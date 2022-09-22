<template>
  <section class="fd-agenda" id="agenda">


    <fieldset class = "fd-agenda__toggle" v-if="'UTC '+getLocalTimeZone() !== 'UTC -4'"> 
        <legend>Time zone</legend>
        <!---'UTC -4 but for test purpose keep it +4'-->
        <div class="fd-agenda__toggle-element"  >
          <input type="radio" id="timezone1" name="event-time" value="event" @change="onTimeChange($event)" checked/>
            <label for="timezone1">Event time<time datetime="2022-09-29T00:00">(UTC -4)</time></label>

        </div>
        <div class="fd-agenda__toggle-element">
          <input type="radio" id="timezone2" name="event-time" value="local" @change="onTimeChange($event)"/>
            <label for="timezone2">Your time<time datetime="2022-09-29T07:00">(UTC {{getLocalTimeZone()}})</time></label>
        </div>
      </fieldset>

      <router-link to="/" aria-label="Home" class="fd-agenda__homeButton">
        <span class="fd-agenda__backSpan" v-html="svgs.back" ></span>
    Home
      </router-link>


    <!--Agenda Header and Line-->
    <div class="fd-agenda__container">
      <div class="fd-agenda__header">
        <h2 class="fd-agenda__title">agenda</h2>
        <div class="fd-agenda__line" aria-hidden="true"></div>
        <h2 class="fd-agenda__date">29.09.2022</h2>
      </div>
      <!--Agenda Filtering Buttons-->

      <FilterButtons :filterPosts="filterPosts" :filteredValue="this.filteredValue" />

      <!--Agenda Schedule Body-->
      <ul class="fd-agenda-body">
        <li
          class="fd-agenda-body__row"
          v-for="el in agenda"
          :key="el.startTime"
        >
          <div class="fd-agenda-body__time-container">
            <div>
              <time class="fd-agenda-body__time">
                {{ convertTime(el.startTime, eventTime) }}</time
              >
            </div>
          </div>

          <div class="fd-agenda-body__container">
            <div class="fd-agenda-body__topic-box">
              <div class="fd-agenda-body__title-box">
                <div class="fd-agenda-body__icon-container" aria-hidden="true">
                  <span
                    class="fd-agenda-body__icon"
                    v-if="el.type === 'Design'"
                    v-html="svgs.paintbrush"
                    aria-hidden="true"
                  ></span>
                  <span
                    class="fd-agenda-body__icon"
                    v-else-if="el.type === 'Development'"
                    v-html="svgs.frontend"
                    aria-hidden="true"
                  ></span>
                  <span
                    class="fd-agenda-body__icon"
                    v-else-if="el.type === 'Accessibility'"
                    v-html="svgs.accessibility"
                    aria-hidden="true"
                  ></span>
                </div>
                <h3 class="fd-agenda-body__title">{{ el.title }}</h3>
              </div>

              <p 
                class="fd-agenda-body__paragraph"
                v-if="el.description.length < 300"
              >{{ el.description }}</p>
              
              <p 
                class="fd-agenda-body__paragraph"
                v-else
              >{{ el.more ? el.description : `${el.description.slice(0, 300)}... ` }}
              
                <button 
                  class="fd-agenda-body__more" 
                  :aria-expanded="el.more ? 'true' : 'false'"
                  @click="el.more = !el.more">
                  {{ el.more ? 'Read Less' : 'Read More' }}
                </button>
              </p>
            </div>

            <ul class="fd-agenda-body__element-box">
              <li
                class="fd-agenda-body__speaker"
                v-for="member in el.speakers"
                :class="{ selected: member === currentMember }"
                :key="member.firstName"
                v-bind:value="{ member: currentMember }"
              >
                <figure
                  class="fd-agenda-body__picture"
                  @click="toggleModal(member, el.id)"
                  v-on:keypress.enter="toggleModal(member, el.id)"
                  role="button"
                  tabindex="0"
                  :id="`${member.firstName}-${member.lastName}-${el.id}`"
                >
                  <img
                    :src="require(`@/assets/images/speakers/${member.photo}`)"
                    :alt="`Image of ${member.firstName} ${member.lastName}`"
                  />
                </figure>

                <div class="fd-agenda-body__speaker-details">
                  <p class="fd-agenda-body__name">
                    {{ member.firstName }} {{ member.lastName }}
                  </p>
                  <p class="fd-agenda-body__role">{{ member.role }}</p>
                  <div class="fd-agenda-body__line" aria-hidden="true"></div>
                  <p class="fd-agenda-body__country">{{ member.country }}</p>
                </div>
              </li>

              <li class="fd-agenda-calendar-box">
                <div
                  class="fd-agenda-calendar-box__line"
                  aria-hidden="true"
                ></div>
                <p class="fd-agenda-calendar-box__addToCal">ADD TO CALENDAR</p>
                <ul
                  class="fd-agenda-calendar-box__buttons"
                  v-for="cal in el.calendars"
                >
                  <li class="fd-agenda-calendar-box__button">
                    <a
                      :href="
                        'data:text/calendar;charset=utf8,' +
                        encodeURIComponent(cal.ics)
                      "
                      :download="el.title"
                      ><span v-html="svgs.calOutlook" aria-hidden="true"> </span
                      >Outlook</a
                    >
                  </li>
                  <li class="fd-agenda-calendar-box__button">
                    <a target="_blank" rel="noreferrer" :href="cal.google"
                      ><span v-html="svgs.calGoogle" aria-hidden="true"> </span
                      >Google</a
                    >
                  </li>
                  <li class="fd-agenda-calendar-box__button">
                    <a
                      :href="
                        'data:text/calendar;charset=utf8,' +
                        encodeURIComponent(cal.ics)
                      "
                      :download="el.title"
                      ><span v-html="svgs.calICal" aria-hidden="true"> </span
                      >iCal</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <FDPopUp
      :member="current"
      class="fd-popup"
      @close="closeModal()"
      :modalActive="modalActive"
    />
  </section>
  <FDFooter />
</template>

<script>
import agenda from "@/assets/agenda.json";
import svgs from "@/assets/svg/svgs.js";
import FilterButtons from "../components/FilterButtons.vue";
import FDFooter from "@/components/FDFooter.vue";
import FDPopUp from "../components/FDPopUp.vue";
import { DateTime } from "luxon";
import FDSaveTheDate from "../components/FDSaveTheDate.vue";

export default {
  name: "FDAgenda",

  components: { FDPopUp, FilterButtons, FDFooter, FDSaveTheDate },
  data() {
    return {
      agenda: agenda,
      svgs,
      current: {},
      modalActive: false,
      eventTime: "event",
      lineup: [],
      formattedLineup: [],
      localTime: new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1],
      filteredValue: "All",
      lastFocussedElementID: null,
    };
  },

  mounted() {
    this.lineup = agenda;
    this.formattedLineup = this.formatLineup();
  },

  computed() {},

  //filters the posts/presentations of agenda
  methods: {
    filterPosts(catName) {
      this.resetPosts();
      if (catName !== "All") {
        this.filteredValue = catName;
        this.agenda = this.agenda.filter((post) => {
          return post.type === catName;
        });
      }
    },
    //reset agenda to all buttons
    resetPosts() {
      this.agenda = agenda;
      this.filteredValue = "All"
    },
    //popup
    toggleModal(member, id) {
      this.current = member;
      console.log(this.current);
      this.modalActive = !this.modalActive;
      this.lastFocussedElementID = `${member.firstName}-${member.lastName}-${id}`;

      //hides the scrolling in the background
      if (this.current) {
        document.documentElement.style.overflow = "hidden";
        document.body.scroll = "no";
      } else {
        document.documentElement.style.overflow = "auto";
        document.body.scroll = "yes";
      }

      this.$nextTick(() => document.getElementById("close-btn").focus());
    },
    //erase all the data from the current popup
    closeModal() {
      this.current = {};
      this.modalActive = false;
      document.getElementById(this.lastFocussedElementID).focus();
      document.documentElement.style.overflow = "auto";
      document.body.scroll = "yes";
    },
    //time functions

    isActive(tab) {
      return this.activeTab === tab;
    },
    setActive(tab) {
      this.activeTab = tab;
    },

    onTimeChange($event) {
      this.eventTime = $event.target.value;
    },

    getLocalTimeZone() {
      return DateTime.now().toFormat("Z");
    },
    filerSortLineup() {
      const sortedSchedule = filteredSchedule.sort((a, b) =>
        DateTime.fromISO(a.startTime) > DateTime.fromISO(b.startTime) ? 1 : -1
      );
      return sortedSchedule;
    },
    formatLineup() {
      return this.lineup.map((session) => {
        let start = session.startTime;
        let end = session.endTime;

        let newStartTime = "2022-09-29T" + start + ":00.000-04:00";
        let newEndTime = "2022-09-29T" + end + ":00.000-04:00";

        return {
          startTime: newStartTime,
          endTime: newEndTime,
        };
      });
    },

    convertTime: function (value, eventTime) {
     
      let newStartTime = "2022-09-29T" + value + ":00.000-04:00";
      //will return the time to UTC time (central time) because mtl time is -4h to UTC one
      let date = DateTime.fromISO(newStartTime)
          .toLocal()
          .toISO({ suppressMilliseconds: true });
  
      if (eventTime === "local") {
        //will add or substrac the difference between UTC and localtime
      let newdate = DateTime.fromISO(date)
          .toLocal()
          .toISO({ suppressMilliseconds: true });
        console.log(date);
        let time = date.substring(date.indexOf("T") + 1);

        console.log(time);

        return (
          time.split(":")[0].replace(/^0+/, "0") + ":" + time.split(":")[1]
        );
      } else {
        console.log(value);
        return value;
      }
    },

    //add to calendar function
    generateCalendars() {
      const cal = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        "DTSTART:2022-09-29",
        "DTEND:2022-09-29",
        "SUMMARY:Fundamental Conference 2022",
        "LOCATION:Worldwide Virtual Event",
        "DESCRIPTION:Join Fundamental Conference on September 29th 2022 to meet designers and developers who come together to share ideas and innovative practices that drive the future of front-end at SAP",
        "UID:iCal",
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\n");

      return {
        cals: {
          google: encodeURI(
            [
              "https://www.google.com/calendar/render",
              "?action=TEMPLATE",
              "&text=Fundamental Conference 2022",
              "&dates=20220929/20220929",
              '&dateTime"= "2022-09-29T07:05:00-04:00',
              "&location=Worldwide Virtual Event",
              "&details=Join Fundamental Conference on September 29th 2022 to meet designers and developers who come together to share ideas and innovative practices that drive the future of front-end at SAP",
              "&sprop=&sprop=name:",
            ].join("")
          ),
          ics: encodeURI("data:text/calendar;charset=utf8," + cal),
        },
      };
    },
  },

  components: { FilterButtons, FDFooter, FDPopUp, FDSaveTheDate },
};
</script>

<style lang="scss" scoped>
.fd-agenda {
  position: relative;
  flex-direction: row;
  max-width: 1200px;
  padding: 5rem 1.5rem;
  margin: 0 auto;
  align-items: center;
  
  &__homeButton{
  
display:none;
  }



  &__toggle {
    margin: 2.125rem auto 0;
    padding: 0;
    border: none;
    display: flex;
    position: relative;
    width: fit-content;
    background-color: #e2eeff;
    border: 0.125rem solid #3E86EF;
    border-radius: 2.5rem;

    legend {
      top: -1.75rem;
      left: 0.5rem;   
      position: absolute;
      font-size: 0.875rem;
      line-height: 1rem;
      font-weight: normal;
      text-transform: uppercase;
      display: none;
    }
    
    &-element {
      input {
        display: none;
      }

      label {
        display: flex;
        cursor: pointer;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1rem;
        align-items: center;
        border-radius: 2.5rem;
        flex-direction: column;
        padding: 0.5rem 1rem;
        text-transform: uppercase;
        transition: border 0.5s ease;
        color: #2865be;
      }

      input:checked{
        & + label {
          background: linear-gradient(73.81deg, #7843d5 0.22%, #1dc4ff 99.78%);
          border-radius: 2.5rem;
          color: white;
          box-shadow: 1.54842px 3.09685px 9.29055px rgba(123, 92, 178, 0.35);

          time {
            color: white;
          }
        }
      }

      label {
        time {
          font-size: 0.75rem;
          font-weight: normal;
          text-transform: capitalize;
          color: #2865be;
        }
      }
    }
  }

  &__container {
    padding: 4rem 0 3rem;
    gap: 0.5rem;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
  }
  &__header {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 2.25rem;
  }

  &__title {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1;
    font-family: "Ubuntu";
    font-style: normal;
    letter-spacing: 0.02em;
    color: #2865be;
    order: 1;
    white-space: nowrap;
  }

  &__line {
    width: 100%;
    height: 0.0625rem;
    background: linear-gradient(63.69deg, #2865be 16.54%, #82deff 83.46%);
    background-size: 400% 400%;
    -webkit-animation: gradient-17d1a7e2 3s ease infinite;
    animation: gradient-17d1a7e2 3s ease infinite;
    margin-bottom: 0.25rem;
    order: 2;
  }
  &__date {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1;
    font-family: "Ubuntu";
    font-style: normal;
    letter-spacing: 0.02em;
    color: #2865be;
    order: 1;
    white-space: nowrap;
    order:2;
  }
}

.fd-agenda-body {
  display: flex;
  flex-direction: column;

  &__wrapper {
    gap: 2rem;
    display: flex;
    flex-direction: row-reverse;
  }

  &__icon,
  &__icon-container {
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__icon {
    margin-top: 0.25rem;
    color: #2865be;
  }

  &__row {
    padding-bottom: 5%;
    flex-direction: column;
    display: flex;
  }

  &__time-box {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 14rem;
  }

  &__time-container {
    height: 8rem;
    text-align: center;
    position: relative;
    margin-bottom: 1rem;
    padding-top: 2rem;
    background-image: url("../assets/images/dot.svg");
    background-position: center;
    background-size: 0.2rem 1.15rem;
    background-repeat: repeat-y;

    div {
      padding: 0.5rem;
      background: #e2eeff;
    }
  }

  &__time {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    display: inline-block;
    background: linear-gradient(-33deg, #7b5cb2, #7b5cb2, #69adf8, #82deff);
    background-size: 300%;
    font-weight: bold;
    line-height: 1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animated_text-17d1a7e2 5s ease-in-out infinite;
    -moz-animation: animated_text-17d1a7e2 5s ease-in-out infinite;
    -webkit-animation: animated_text-17d1a7e2 5s ease-in-out infinite;
  }

  &__title-box {
    gap: 1.5rem;
    display: flex;
    flex-direction: row-reverse;
  }

  &__title {
    flex: 1;
    font-weight: 500;
    color: #2865be;
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }

  &__paragraph {
    font-size: 1rem;
    color: #052e69;
    margin-bottom: 1.5rem;
    line-height: 1.4375rem;
    letter-spacing: 0.01em;
    font-family: sans-serif;
    /* position: relative; */
  }

  &__more {
    display: flex;
    line-height: 1;
    cursor: pointer;
    font-weight: 500;
    color: #2865BE;
    margin: 1rem auto 3rem;
    align-self: center;
    font-size: 1.125rem;
    border-radius: 0.375rem;
    background: #E3EEFF;
    padding: 0.35rem 0.7rem;
    transition: all 0.2s linear;
    border: 0.125rem solid #3E86EF;

    &:hover {
      background: #E3EEFF;
      border-color:#2865BE;
      box-shadow: 1.54842px 3.09685px 9.29055px rgba(123, 92, 178, 0.35);
    }

    &:focus {
      outline: 0.125rem solid #7352AD;
      outline-offset: 0.0625rem;
      background: #E3EEFF;
      border-color:#2865BE;
    }
  }

  &__element-box {
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  &__speaker {
    gap: 1rem;
    display: flex;
    flex-direction: row;
  }

  &__picture {
    width: 4rem;
    height: 4rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    border-radius: 50%;
    transition: all 0.25s linear;

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    button {
      background: transparent;
      border: transparent;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.25rem #7352ad;

      &:hover {
        border-radius: 100%;
        box-shadow: 0 0 0 0.25rem #7352ad, -6px 8px 24px rgba(123, 92, 178, 0.75);
      }
    }

    &:hover {
      border-radius: 100%;
      
      box-shadow: -6px 8px 24px rgba(123, 92, 178, 0.75);
    }
  }

  &__speaker-details {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-family: "Ubuntu";
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    color: #2865be;
  }

  &__role {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375rem;
    color: #2865be;
  }

  &__line {
    width: 50%;
    height: 0.0625rem;
    background: linear-gradient(63.69deg, #2865be 16.54%, #82deff 83.46%);
    background-size: 400% 400%;
    -webkit-animation: gradient-17d1a7e2 3s ease infinite;
    animation: gradient-17d1a7e2 3s ease infinite;
    margin-top: 0.25rem;
  }

  &__country {
    padding-top: 0.25rem;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375rem;
    text-transform: uppercase;
    color: #2865be;
  }
}

.fd-agenda-calendar-box {
  padding-top: 1rem;
  gap: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &____line {
    visibility: hidden;
  }

  &__addToCal {
    color: #052e69;
    font-weight: 400;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-family: sans-serif;
    text-transform: uppercase;
  }

  &__buttons {
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
  }

  &__button {
    a {
      gap: 0.25rem;
      display: flex;
      color: #2865be;
      font-size: 1.125rem;
      align-items: center;
      padding: 0.35rem 0.7rem;
      text-decoration: none;
      line-height: 1.3125rem;
      justify-content: center;
      border-radius: 0.375rem;
      transition: all 0.25s linear;
      border: 0.125rem solid #3e86ef;

      span {
        width: 1.25rem;
        height: 1.25rem;
        color: #2865be;
      }

      &:hover {
        border-color: #2865be;
        box-shadow: 1.54842px 3.09685px 9.29055px rgba(123, 92, 178, 0.35);
      }

      &:focus {
        border-color: #3e86ef;
        outline-offset: 0.0625rem;
        outline: 0.125rem solid #7352ad;
      }
    }
  }
}

@media (min-width: 1000px) {
  .fd-agenda {
    position: relative;
    padding: 5rem 2.25rem;

    &__homeButton{
    width: auto;
height: 21px;
text-decoration: none;
margin: 2.5rem 0 0;


/* Desktop / Link */
font-family: 'Ubuntu';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
/* identical to box height */
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.05em;

/* Blue/500 Regular */
color: #2865BE;

&::after {
      left: 0;
      bottom: 0;
      opacity: 1;
      content: "";
      width: 100%;
      height: 0.1em;
      position: absolute;
      transform: scale(0);
      transform-origin: center;
      background-color: #c5a4fa;
      transition: opacity 300ms, transform 300ms;
    }

    &:hover {
      color: #c5a4fa;
      &::after {
        transform: scale(1);
      }
    }

    &:focus {
      color: #fff;
      border-color: #82deff;
    }

    &:focus:hover {
      &::after {
        transform: scale(0);
      }
    }

    &.router-link-active {
      &::after {
        transform: scale(1);
      }
    }

  }
  

  &__backSpan {
   
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    justify-content: center;
    align-items: center;
    /* margin: 0.5rem 0 0; */
    margin-right: 0.5rem;
     svg {
      color: #2865be;
      height:1.5rem;
     }

     &::after {
      left: 0;
      bottom: 0;
      opacity: 1;
      content: "";
      width: 100%;
      height: 0.1em;
      position: absolute;
      transform: scale(0);
      transform-origin: center;
      background-color: #c5a4fa;
      transition: opacity 300ms, transform 300ms;
    }

    &:hover {
      color: #c5a4fa;
      &::after {
        transform: scale(1);
      }
    }

    &:focus {
      color: #fff;
      border-color: #82deff;
    }

    &:focus:hover {
      &::after {
        transform: scale(0);
      }
    }

    &.router-link-active {
      &::after {
        transform: scale(1);
      }
    }
  }

    &__title {
      font-size: 2rem;
    }
    
    &__header {
      padding-bottom: 2.25rem;
    }
    
    &__container {
      padding: 11.75rem 0;
    }
    
    &__button {
      .button_text {
        font-size: 1rem;
      }
    }
    &__date {
      font-size: 2rem;
    }
    &__toggle {
      position: absolute;
      right: 0;
    }
  }

  .fd-agenda-body {
    flex-direction: column;
    padding-top: 5rem;

    &__row {
      padding-bottom: 7rem;
    }

    &__container {
      width: 100%;
      display: flex;
      margin-top: 1rem;
    }

    &__icon-container {
      display: flex;
      width: 2.625rem;
      height: 2.625rem;
      align-items: center;
      justify-content: center;
    }

    &__icon {
      display: flex;
      width: 2.625rem;
      height: 2.625rem;
      margin-top: 1rem;
      align-items: center;
      justify-content: center;
    }

    &__topic-box {
      padding-right: 5%;
      width: 55%;
      min-width: 55%;
      max-width: 55%;
      position: relative;
      background-image: url("../assets/images/dot.svg");
      background-position: right;
      background-size: 0.25rem 1.75rem;
      background-repeat: repeat-y;
    }

    &__element-box {
      max-width: 45%;
      width: 45%;
      padding-left: 5%;
    }

    &__time-container {
      width: 60%;
      height: auto;
      min-width: 60%;
      max-width: 60%;
      height: 5.125rem;
      padding-top: 2rem;
      text-align: right;
      position: relative;
      margin-bottom: 2rem;
      margin-bottom: 1rem;
      background-image: none;

      div {
        padding: 0;
        background: #e2eeff;
      }
    }

    &__time {
      width: 13rem;
      font-size: 5.25rem;
      transform: translate(50%, 0);
    }

    &__title-box {
      gap: 1.5rem;
      flex-direction: row;
    }

    &__title {
      font-size: 3rem;
      line-height: 3.4375rem;
    }

    &__speaker {
      align-items: flex-start;
    }

    &__picture {
      width: 6.25rem;
      height: 6.25rem;

      img {
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 6.25rem;
      }
    }

    &__paragraph {
      padding-left: 4.125rem;
      font-size: 1.25rem;
      line-height: 1.65;
      letter-spacing: 0.01em;
      color: #052e69;
    }

    &__more {
      line-height: 1;
      bottom: 0.3rem;
      font-size: 1rem;
    }

    &__name {
      font-family: "Ubuntu";
      font-weight: 500;
      font-size: 1.75rem;
      line-height: 2rem;
      color: #2865be;
    }

    &__role {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.125rem;
      color: #2865be;
    }

    &__line {
      width: 50%;
      height: 0.0625rem;
      min-height: 0.0625rem;
      max-height: 0.0625rem;
      background: linear-gradient(63.69deg, #2865be 16.54%, #82deff 83.46%);
      background-size: 400% 400%;
      -webkit-animation: gradient-17d1a7e2 3s ease infinite;
      animation: gradient-17d1a7e2 3s ease infinite;
      margin-top: 0.25rem;
    }

    &__country {
      padding-top: 0.25rem;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.125rem;
      text-transform: uppercase;
      color: #2865be;
    }
  }

  .fd-agenda-calendar-box {
    &__buttons {
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    &__line {
      width: 75%;
      margin-bottom: 2%;
      height: 0.0625rem;
      min-height: 0.0625rem;
      max-height: 0.0625rem;
      background: linear-gradient(63.69deg, #2865be 16.54%, #82deff 83.46%);
      background-size: 400% 400%;
      -webkit-animation: gradient-17d1a7e2 3s ease infinite;
      animation: gradient-17d1a7e2 3s ease infinite;
      visibility: show;
    }

    &__addToCal {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
}
</style>

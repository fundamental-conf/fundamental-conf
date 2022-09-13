<template>

  <section class="fd-agenda" id="agenda">

  

      <fieldset class = "fd-agenda__toggle"> 
        <legend>Time zone</legend>
        <!---'UTC -4 but for test purpose keep it +4'-->
        <div class="fd-agenda__toggle-element" v-if="'UTC '+getLocalTimeZone() !== 'UTC +4'" >
          <input type="radio" id="timezone1" name="event-time" value="event" @change="onTimeChange($event)" checked>
            <label for="timezone1">Event time<time datetime="2022-09-29T00:00">(UTC -4)</time></label>
        </div>
        <div class="fd-agenda__toggle-element">
          <input type="radio" id="timezone2" name="event-time" value="local" @change="onTimeChange($event)">
            <label for="timezone2">Your time<time datetime="2022-09-29T00:00">(UTC {{getLocalTimeZone()}})</time></label>
        </div>
      </fieldset>

    <!--Agenda Header and Line-->
    <div class="fd-agenda__container">
      <div class="fd-agenda__header">
        <h2 class="fd-agenda__title">agenda</h2>
        <div class="fd-agenda__line" aria-hidden="true"></div>
      </div>
      <!--Agenda Filtering Buttons-->

      <FilterButtons :filterPosts="filterPosts" />

      <!--Agenda Schedule Body-->
      <ul class="fd-agenda-body">
        <li
          class="fd-agenda-body__row"
          v-for="el in agenda"
          :key="el.startTime"
          v-cloak
        >
          <div class="fd-agenda-body__time-box">
            <div
              class="fd-agenda-body__dotted-line-top"
              aria-hidden="true"
            ></div>
            <time class="fd-agenda-body__time"> {{el.startTime }}</time>
            <div
              class="fd-agenda-body__dotted-line-bottom"
              aria-hidden="true"
            ></div>
          </div>

          <div class="fd-agenda-body__topic-box">
            <div class="fd-agenda-body__title-box">
              <h2 class="fd-agenda-body__title">{{ el.title }}</h2>
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

            <p class="fd-agenda-body__paragraph">{{ el.description }}</p>
          </div>

          <ul class="fd-agenda-body__element-box">
            <li
              class="fd-agenda-body__speaker"
              v-for="member in el.speakers"
              :class="{ selected: member === currentMember }"
              :key="member.firstName"
              v-bind:value="{ member: currentMember }"
            >
              <figure class="fd-agenda-body__picture">
                <button @click="toggleModal(member)" type="button">
                  <img
                    :src="require(`@/assets/images/speakers/${member.photo}`)"
                    :alt="``"
                  />
                </button>
              </figure>
              <div class="fd-agenda-body__speaker-details">
                <h4 class="fd-agenda-body__name">
                  {{ member.firstName }} {{ member.lastName }}
                </h4>
                <h4 class="fd-agenda-body__role">{{ member.role }}</h4>
                <div class="fd-agenda-body__line" aria-hidden="true"></div>
                <h4 class="fd-agenda-body__country">{{ member.country }}</h4>
              </div>
            </li>

            <div class="fd-agenda-calendar-box">
              <div
                class="fd-agenda-calendar-box__line"
                aria-hidden="true"
              ></div>
              <h5 class="fd-agenda-calendar-box__addToCal">ADD TO CALENDAR</h5>
              <div class="fd-agenda-calendar-box__buttons">
                <button type="button" class="fd-agenda-calendar-box__button">
                  <span
                    v-html="svgs.calOutlook"
                    aria-hidden="true"
                    class="button_icon"
                  >
                  </span>
                  <p class="button_text">Outlook</p>
                </button>
                <button type="button" class="fd-agenda-calendar-box__button">
                  <span
                    v-html="svgs.calGoogle"
                    aria-hidden="true"
                    class="button_icon"
                  >
                  </span>
                  <p class="button_text">Google</p>
                </button>
                <button type="button" class="fd-agenda-calendar-box__button">
                  <span
                    v-html="svgs.calICal"
                    aria-hidden="true"
                    class="button_icon"
                  >
                  </span>
                  <p class="button_text">iCal</p>
                </button>
              </div>
            </div>
          </ul>
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

export default {
  name: "FDAgenda",
  components: { FDPopUp, FilterButtons, FDFooter },
  data() {
    return {
      agenda:agenda,
      svgs,
      current: {},
      modalActive: false,
      eventTime: 'event',
      lineup: [],
      formattedLineup: [],
      localTime: new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1],
    
    };
  },
  filters: {
  
    hoursMin: function(value) {
      let time = value.substring(value.indexOf('T') + 1);
      return time.split(':')[0].replace(/^0+/, '') + ':' + time.split(':')[1];
    },
    trimTime: function(value) {
      let time = value.substring(value.indexOf('T') + 1);
      let timeSplit = time.split(':');
      return timeSplit[0] + ':' + timeSplit[1];
    },
    convertTime: function(value, eventTime) {
      if(eventTime === 'local') {
       return DateTime.fromISO(value).toLocal().toISO({ suppressMilliseconds:true });
      }
      return value;
    },
    
  },

  mounted() {
    this.lineup = agenda;
    this.formattedLineup = this.formatLineup();
  },

  //filters the posts/presentations of agenda
  methods: {
    filterPosts(catName) {
      this.resetPosts();
      if (catName !== "All") {
        this.agenda = this.agenda.filter((post) => {
          return post.type === catName;
        });
      }
    },
    //reset agenda to all buttons
    resetPosts() {
      this.agenda = agenda;
    },
//popup
    toggleModal(member) {
      this.current = member;
      console.log(this.current);
      this.modalActive = !this.modalActive;

      //hides the scrolling in the background
      if (this.current) {
        document.documentElement.style.overflow = "hidden";
        document.getElementsByTagName("*").style.overflow = "hidden";
        document.body.scroll = "no";
      } else {
        document.documentElement.style.overflow = "auto";
        document.getElementsByTagName("*").style.overflow = "auto";
        document.body.scroll = "yes";
      }
    },
    //erase all the data from the current popup
    closeModal() {
      this.current = {};
      this.modalActive = false;
      document.documentElement.style.overflow = "auto";
      document.getElementsByTagName("*").style.overflow = "auto";
      document.body.scroll = "yes";
    },
    //time functions 

    isActive (tab) {
      return this.activeTab === tab;
    },
    setActive (tab) {
      this.activeTab = tab;
    },

    onTimeChange($event) {
      this.eventTime = $event.target.value;
    },

    getLocalTimeZone() {
      return DateTime.now().toFormat('Z');
    },
    filerSortLineup() {
      const sortedSchedule = filteredSchedule.sort((a, b) => (DateTime.fromISO(a.startTime) > DateTime.fromISO(b.startTime)) ? 1 : -1)
      return sortedSchedule;
    },
    formatLineup() {
      return this.lineup.map(session => {  
        let start = session.startTime;
        let end = session.endTime;

        let newStartTime = "2022-09-29T" + start + ":00.000-04:00";
          let newEndTime = "2022-09-29T" + end + ":00.000-04:00";

          return {
            startTime: newStartTime,
            endTime: newEndTime,
          }
      });
    },

  },

  

  components: { FilterButtons, FDFooter, FDPopUp },
};
</script>

<style lang="scss" scoped>
.fd-agenda {
  flex-direction: row;
  max-width: 1200px;
  padding: 5rem 10vw;
  margin: 0 auto;
  align-items: center;

  &__toggle {
    margin: auto;
  padding: 0;
  border: none;
  display: flex;
  position: relative;
  width: fit-content;
  background-color:#E2EEFF;
  border: 1.32264px solid #2865BE;
border-radius: 38.7106px;

  legend {
  top: -1.75rem;
  left: 0.5rem;
  position: absolute;
  font-size: 0.875rem;
  font-weight: normal;
  text-transform: uppercase;
  display:none;
}
&-element {
  
  input {
    display: none;
  }

  label {
    display: flex;
  cursor: pointer;
  font-size: 0.875rem;
  align-items: center;
  border-radius: 2.5rem;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  border: 0.0625rem solid transparent;
  transition: border 0.5s ease;
  color: #2865be;
  }

   input {
	&:checked {
			background: linear-gradient(73.81deg, #7843D5 0.22%, #1DC4FF 99.78%);
				border-radius: 38.7106px;
				color: white;
			}
  }


label {
		time {
			font-size: 0.75rem;
			font-weight: normal;
			text-transform: capitalize;
			color:#2865be ;
		}
	}
}

  }


  &__container {
    padding: 4rem 0.75rem 3rem;
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
    padding-bottom: 8%;
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
}

.fd-agenda-body {
  display: flex;
  flex-direction: column;

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
  &__time {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 97.9%;
    display: inline-block;
    align-items: center;
    text-align: center;

    /* Gradient 3 (Test) */
    background: linear-gradient(73.81deg, #7843d5 0.22%, #1dc4ff 99.78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  &__dotted-line-top {
    background-image: linear-gradient(
      to bottom,
      #3e86ef,
      10%,
      rgba(240, 255, 255, 0) 2%
    );
    background-position: right;
    background-size: 3px 30px;
    background-repeat: repeat-y;
    padding: 45px 3px;
    height: 3rem;
  }
  &__dotted-line-bottom {
    background-image: linear-gradient(
      to bottom,
      #3e86ef,
      10%,
      rgba(240, 255, 255, 0) 2%
    );
    background-position: right;
    background-size: 3px 30px;
    background-repeat: repeat-y;
    height: 3rem;
    padding: 45px 3px;
  }

  &__title-box {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
  }

  &__title {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 41px;
    display: flex;
    align-items: center;
    padding-bottom: 2rem;
    width: 70%;
    /* Blue/500 Regular */
    color: #2865be;
  }

  &__icon {
    width: 22.88px;
    color: #2865be;
  }

  &__paragraph {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;

    /* Blue/600 Dark */
    color: #052e69;
  }

  &__element-box {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 1rem;
    gap: 1rem;
  }

  &__speaker {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }

  &__picture {
    align-items: center;

    display: flex;
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 5rem;
    }
    button {
      background: transparent;
      border: transparent;
    }
  }

  &__speaker-details {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.313rem;

    display: flex;
    align-items: center;
    text-align: justify;

    /* Blue/500 Regular */
    color: #2865be;
  }

  &__role {
    padding-top: 0.5rem;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.438rem;
    /* identical to box height */
    display: flex;
    align-items: center;

    /* Blue/500 Regular */
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
    font-size: 0.75rem;
    line-height: 1.438rem;
    /* identical to box height */
    display: flex;
    align-items: center;
    text-transform: uppercase;

    /* Blue/500 Regular */
    color: #2865be;
  }
}

.fd-agenda-calendar-box {
  padding-top: 2.5rem;
  gap: 8px;

  &____line {
    visibility: hidden;
  }

  &__addToCal {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    color: #052e69;
  }
  &__buttons {
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    padding-top: 5%;
    gap: 2%;
  
  }  
  &__button {
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 6px;

    width: 105px;
    height: 35px;

    /* Blue/400 Mid */
    border: 2px solid #3e86ef;
    border-radius: 6px;

    /* Inside auto layout */
    background-color: $brand-color-silver;
    order: 0;
    flex-grow: 0;
    width: fit-content;
    align-items: center;
    padding: 0.1rem 0.5rem;
    text-decoration: none;
    border-radius: 0.25rem;
    outline-offset: 1.25rem;
    transition: all 0.3s ease-in-out;

  

    .button_text {
      font-family: "Ubuntu";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      /* identical to box height */
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.05em;

      /* Blue/500 Regular */
      color: #2865be;
      &:active {
        color: white;
      }
    }

    .button_icon {
      color: #2865be;
      &:active {
        color: white;
      }
    }
  }

  &__button:active {

      background: linear-gradient(73.81deg, #7843d5 0.22%, #1dc4ff 99.78%);
      border-radius: 38.7106px;
      color: white;
    
  }
}

@media (min-width: 750px) {
  .fd-agenda {
    &__header {
      padding-bottom: 4%;
    }
    &__container {
      padding: 6rem 3rem;
    }
    &__button {
      .button_text {
        font-size: 1rem;
      }
    }
    &__toggle {
    margin: 0;
  padding: 0;
  border: none;
  display: flex;
  position: absolute;
  right:12vw;
  width: fit-content;
  background-color:#E2EEFF;
  border: 1.32264px solid #2865BE;
border-radius: 38.7106px;

  legend {
  top: -1.75rem;
  left: 0.5rem;
  position: absolute;
  font-size: 0.875rem;
  font-weight: normal;
  text-transform: uppercase;
  display:none;
}
&-element {
  
  input {
    display: none;
  }

  label {
    display: flex;
  cursor: pointer;
  font-size: 0.875rem;
  align-items: center;
  border-radius: 2.5rem;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  border: 0.0625rem solid transparent;
  transition: border 0.5s ease;
  color: #2865be;
  }

  input[type="radio"] {
	&:checked {
			background: linear-gradient(73.81deg, #7843D5 0.22%, #1DC4FF 99.78%);
				border-radius: 38.7106px;
				color: white;
			}
		

}
label {
		time {
			font-size: 0.75rem;
			font-weight: normal;
			text-transform: capitalize;
			color:#2865be ;
		}
	}
}

  }
  }

  .fd-agenda-body {
    flex-direction: column;
    padding-top: 5rem;

    &__row {
      flex-direction: row;
      padding-bottom: 0;
      gap: 3%;
    }

    &__topic-box {
      order: 1;
      width: 45%;
      margin-top: 10rem;
    }
    &__time-box {
      order: 2;
      height: fit-content;
      gap: 3%;
    }
    &__element-box {
      margin-top: 10rem;
      width: 40%;
      order: 3;
    }
    &__dotted-line-top {
      display: none;
    }
    &__dotted-line-bottom {
      height: 35rem;
    }

    &__time {
      font-size: 5.25rem;
    }

    &__title-box {
      flex-direction: row-reverse;
    }
    &__title {
      width: 90%;
    }
    &__paragraph {
      margin-left: 11%;
    }
  }

  .fd-agenda-calendar-box {
    &__line {
      width: 88%;
      margin-bottom: 2%;
      height: 0.0625rem;
      background: linear-gradient(63.69deg, #2865be 16.54%, #82deff 83.46%);
      background-size: 400% 400%;
      -webkit-animation: gradient-17d1a7e2 3s ease infinite;
      animation: gradient-17d1a7e2 3s ease infinite;
      visibility: show;
    }
  }
}
</style>

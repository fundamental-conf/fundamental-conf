<template>
<div class="fd-calendars">
  
  <a target="_blank" rel="noreferrer" href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:2022-09-29%0ADTEND:2022-09-29%0ASUMMARY:Fundamental%20Conference%202022%0ALOCATION:Worldwide%20Virtual%20Event%0ADESCRIPTION:Join%20Fundamental%20Conference%20on%20September%2029th%202022%20to%20meet%20designers%20and%20developers%20who%20come%20together%20to%20share%20ideas%20and%20innovative%20practices%20that%20drive%20the%20future%20of%20front-end%20at%20SAP%0AUID:iCal%0AEND:VEVENT%0AEND:VCALENDAR" download="Fundamental-Conf-2022.ics">
    <span v-html="svgs.calOutlook" aria-hidden="true"></span>
    <span class="fd-calendars__text">Outlook</span>
  </a>

  <a target="_blank" rel="noreferrer" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Fundamental%20Conference%202022&dates=20220929/20220929&location=Worldwide%20Virtual%20Event&details=Join%20Fundamental%20Conference%20on%20September%2029th%202022%20to%20meet%20designers%20and%20developers%20who%20come%20together%20to%20share%20ideas%20and%20innovative%20practices%20that%20drive%20the%20future%20of%20front-end%20at%20SAP&sprop=&sprop=name:">
    <span v-html="svgs.calGoogle" aria-hidden="true"></span>
    <span class="fd-calendars__text">Google</span>
  </a>

  <a target="_blank" rel="noreferrer" href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:2022-09-29%0ADTEND:2022-09-29%0ASUMMARY:Fundamental%20Conference%202022%0ALOCATION:Worldwide%20Virtual%20Event%0ADESCRIPTION:Join%20Fundamental%20Conference%20on%20September%2029th%202022%20to%20meet%20designers%20and%20developers%20who%20come%20together%20to%20share%20ideas%20and%20innovative%20practices%20that%20drive%20the%20future%20of%20front-end%20at%20SAP%0AUID:iCal%0AEND:VEVENT%0AEND:VCALENDAR" download="Fundamental-Conf-2022.ics">
    <span v-html="svgs.calICal" aria-hidden="true"></span>
    <span class="fd-calendars__text">iCal</span>
  </a>

</div>
</template>

<script>
import svgs from '@/assets/svg/svgs.js';

export default {
  components: {
    
  },
  name: "FDSaveTheDate",
  data() {
    return {
      svgs,
      calendars: []
    }
  },
  mounted() {
    // this.calendars = this.generateCalendars();
  },
  methods: {
    generateCalendars() {
      const cal = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        'DTSTART:2022-09-29',
        'DTEND:2022-09-29',
        'SUMMARY:Fundamental Conference 2022',
        'LOCATION:Worldwide Virtual Event',
        'DESCRIPTION:Join Fundamental Conference on September 29th 2022 to meet designers and developers who come together to share ideas and innovative practices that drive the future of front-end at SAP',
        'UID:iCal',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\n');
      
      return {
        cals: 
          {
            google: encodeURI([
              'https://www.google.com/calendar/render',
              '?action=TEMPLATE',
              '&text=Fundamental Conference 2022',
              '&dates=20220929/20220929' ,
              '&location=Worldwide Virtual Event',
              '&details=Join Fundamental Conference on September 29th 2022 to meet designers and developers who come together to share ideas and innovative practices that drive the future of front-end at SAP',
              '&sprop=&sprop=name:'
            ].join('')),
            ics: encodeURI('data:text/calendar;charset=utf8,' + cal)
          }
        
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .fd-calendars {
    display: flex;
    gap: 2rem;

    a {
      gap: 0.5rem;
      display: flex;
      outline: none;
      color: #69ADF8;
      width: fit-content;
      align-items: center;
      padding: 0.1rem 0.5rem;
      text-decoration: none;     
      border-radius: 0.25rem;
      outline-offset: 1.25rem;
      transition: all 0.3s ease-in-out;
      border: 0.125rem solid transparent;

      .fd-calendars__text {
        position: relative;
      }

      .fd-calendars__text::after {
        left: 0;
        bottom: -0.125rem;
        opacity: 1;
        content: '';
        width: 100%;
        height: 0.1em;
        position: absolute;
        transform: scale(0);
        transform-origin: center;
        background-color: #69ADF8;
        transition: opacity 300ms, transform 300ms;
      }

      &:hover {
        .fd-calendars__text::after {
          transform: scale(1);
        }
      }

      &:focus {
         border-color: #7352AD;
      }

      &:focus:hover {
        .fd-calendars__text::after {
          transform: scale(0);
        }
      }
    }
  }
</style>
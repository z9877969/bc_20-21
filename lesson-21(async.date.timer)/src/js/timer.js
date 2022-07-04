'use strict';

// padStart, padEnd
const TIMER_DEADLINE = new Date(2022, 6, 4, 13, 16);

// console.dir(Date);

const timer = {
  timerEl: null,
  timerRefs: {},
  intervalId: null,

  start(dedline, rootSelector) {
    this.timerEl = document.querySelector(rootSelector);
    this.createTimerRefs();

    this.intervalId = setInterval(() => {
      const now = Date.now();
      const diff = dedline - now;

      if (diff < 0) {
        this.stop();
        return;
      }

      const time = this.getTime(diff);

      this.containesMarkup(time);
      this.setTimeDescr(time);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  getTime(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const time = {
      days,
      hours,
      minutes,
      seconds,
    };

    return time;
  },

  createTimerRefs() {
    this.timerRefs.days = this.timerEl.querySelector('.js-timer__days');
    this.timerRefs.hours = this.timerEl.querySelector('.js-timer__hours');
    this.timerRefs.minutes = this.timerEl.querySelector('.js-timer__minutes');
    this.timerRefs.seconds = this.timerEl.querySelector('.js-timer__seconds');
  },

  containesMarkup(time) {
    // this.timerRefs.days.textContent = time.days;
    // this.timerRefs.hours.textContent = time.hours;
    // this.timerRefs.minutes.textContent = time.minutes;
    // this.timerRefs.seconds.textContent = time.seconds;

    for (const key in time) {
      this.timerRefs[key].textContent = this.pad(time[key]);
    }
  },

  pad(num) {
    return num.toString().padStart(2, '0');
  },

  declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  },

  setTimeDescr(time) {
    this.timerRefs.days.dataset.title = this.declensionNum(time.days, [
      'день',
      'дні',
      'днів',
    ]);
    this.timerRefs.hours.dataset.title = this.declensionNum(time.hours, [
      'година',
      'години',
      'годин',
    ]);
    this.timerRefs.minutes.dataset.title = this.declensionNum(time.minutes, [
      'хвилина',
      'хвилини',
      'хвилин',
    ]);
    this.timerRefs.seconds.dataset.title = this.declensionNum(time.seconds, [
      'секунда',
      'секунди',
      'секунд',
    ]);
  },
};

timer.start(TIMER_DEADLINE, '.js-timer');
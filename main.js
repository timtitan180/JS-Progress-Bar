// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const TwentyFourHours = 24 * 60 * 60 * 1000;

function Runner() {
    daysSince();
    totalDaysProgress();
}

function daysSince() {
    const startDate = new Date("2026-05-26");
    const currentDate = new Date();

    // Remove the time portion so we're comparing calendar dates
    startDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    const difference = currentDate - startDate;
    return Math.floor(difference / (1000 * 60 * 60 * 24));
}

function totalDaysProgress() {
      const totalDays = 1461;
      const percentage = daysSince() / totalDays * 100;
      return percentage.toFixed(1) + "%";
  // console.log(Math.floor(114/1461 * 100) + "%");
    
}

// Runner();
setInterval(Runner,TwentyFourHours);

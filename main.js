// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler



function Runner() {
    //need to run this script every 24 hours and check if the days that have passed have changed
    // if so then the variable will have to change for the script to run and change the result
    daysSince();
    totalDaysProgress();
    //parent function
}

function daysSince() {
    //function to get the total days that have passed from the start day of service to the current date
    //will be used to get the percentage over the actual total days of service for a four year contract
    const startDate = new Date("2026-05-26");
    const currentDate = new Date();

    // Remove the time portion so we're comparing calendar dates
    startDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    const difference = currentDate - startDate;
    return Math.floor(difference / (1000 * 60 * 60 * 24)));
}

function totalDaysProgress() {
    const totalDays = 1461;
    //get the percentage of the progress to the service end date and show it on the client side
    
    // console.log("totalDaysProgress:" + "" + Math.floor(daysSince() / totalDays * 100));
  // console.log(Math.floor(114/1461 * 100) + "%");
    
}

Runner();

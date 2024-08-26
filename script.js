
function calculateAge() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    // Get current date
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; // Months are 0-based
    var currentDay = currentDate.getDate();
    // label color 
    var dangerDay = document.querySelector("#for-day")
    var dangerMonth = document.querySelector("#for-month")
    var dangerYear = document.querySelector("#for-year")

    if ((day > 31) || (month > 12) || (year > currentYear)) {
        if (day > 31) {
            dangerDay.classList.add("danger")
        }
        if (month > 12) {
            dangerMonth.classList.add("danger")
        }
        if (year > currentYear) {
            dangerYear.classList.add("danger")
        }

    }
    else {
        dangerYear.classList.remove("danger")
        dangerMonth.classList.remove("danger")
        dangerDay.classList.remove("danger")

        // Calculate age
        var ageYears = currentYear - year;
        var ageMonths = currentMonth - month;
        var ageDays = currentDay - day;

        // Adjust age if the birthday hasn't occurred yet this year
        if (currentMonth < month || (currentMonth === month && currentDay < day)) {
            ageYears--;
            ageMonths = 12 - month + currentMonth;
            ageDays = currentDay + (new Date(currentYear, currentMonth, 0).getDate()) - day;
        }

        // Display the age in the respective spans
        document.getElementById("value-years").innerText = ageYears;
        document.getElementById("value-months").innerText = ageMonths;
        document.getElementById("value-days").innerText = ageDays;
    }
}

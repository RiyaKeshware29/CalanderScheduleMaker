// global var dt
var dt = new Date();


// Dark & light mode js code
let mode = document.getElementById("modeBtn");
let light = document.getElementById("light");
let dark = document.getElementById("dark");
let space = document.querySelector(".dates");

var d = dark.addEventListener('click', () => {
    dark.style.display = "none";
    light.style.display = "block";
    light.style.backgroundColor = "yellow";
    light.style.color = "black";
    space.style.backgroundColor = "#000";
    space.style.color = "#fff";
});

light.addEventListener('click', () => {
    light.style.display = "none";
    dark.style.display = "block";
    space.style.backgroundColor = "rgb(244, 241, 241)";
    space.style.color = "black";
});
// Dark & light mode js code end



// main function
function renderDate() {

    // here we are setting date 1
    dt.setDate(1);
    // & getting which day is belogs to date 1 by dt.getDay() method 
    var day = dt.getDay();


    // endDate Obj for knowing the enddate of the month
    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();


    // variable for previous dates
    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();

    // Today date
    var today = new Date();
    // console.log(today);

    var months = [
        "January",
        "Fabruary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // console.log(months[dt.getMonth()]);
    document.getElementById("date_str").innerText = today.toDateString();
    document.getElementById("month").innerHTML = months[dt.getMonth()];
    let date_num = document.querySelector("date-num");


    //For loop for printing previous dates in calander
    var cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='date-num prev-date'>" + (prevDate - x + 1) + "</div>";
    }

    //For loop for printing current month dates in calander
    for (let i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
            cells += "<div class='date-num today' >" + i +
                "<p class='note'>" + "" + "</p>" +
                "</div>";

        }

        else {
            cells += "<div class='date-num'  >" + i +
                "<p class='note'>" + "" + "</p>"
                + "</div>";
        }

    }

    // print dates
    document.getElementsByClassName("dates")[0].innerHTML = cells;

    // Storing temprary Notes using promt box in js 
    let dates = document.getElementsByClassName("date-num");

    for (let j = 0; j < dates.length; j++) {
        let element = dates[j];
        element.addEventListener('click', () => {
            var que = prompt("Write your Schedule??");
            // Set Item
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("note", que);
            }

            if (que != null) {
                // Retrieve
                element.getElementsByClassName('note')[0].innerHTML = localStorage.getItem("note");
            } else {
                console.log("not found");
            }

        });
    }

}
// main function end



// function for prev & next btn
function moveDate(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);
    }
    else if (para == 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }

    renderDate();
}
// function for prev & next btn end







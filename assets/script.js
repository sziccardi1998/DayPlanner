// start on webpage load
$(document).ready(function () {
  // create variables to be used
  var nineAM = $("#nineAM");
  var tenAM = $("#tenAM");
  var elevenAM = $("#elevenAM");
  var noon = $("#noon");
  var onePM = $("#onePM");
  var twoPM = $("#twoPM");
  var threePM = $("#threePM");
  var fourPM = $("#fourPM");
  var fivePM = $("#fivePM");
  var currentDay = $("#currentDay");
  // create object to hold each hours text

  var savedText = {};

  // Variable to hold the current day
  var today = moment().format("dddd, MMMM Do");
  console.log(moment().get('date'));
  currentDay.text(today);
  // create function to test getting the text in text area

  $(".row").each(function (index) {
    var currentId = $(this).attr("id");
    savedText[currentId] = "";
    $(this)
      .children(".saveBtn")
      .on("click", function () {
        var areaText = $(this).siblings(".description").val();
        var rowID = $(this).parent(".row").attr("id");
        savedText[rowID] = areaText;
        setStoredText();
        checkTime();
      });
  });

  // create function to handle retrieving of text content from local storage
  function getStoredText() {
    // retrieve stored text
    var loadedText = JSON.parse(localStorage.getItem("storedText"));
    console.log(loadedText);
    // check to see if retrieved text exsists
    if (loadedText !== null) {
      savedText = loadedText;
      $(".row").each(function () {
        var rowMatch = $(this).attr("id");
        var foundText = $(this).children(".description");
        if (savedText.rowMatch !== "") {
          foundText.val(savedText[rowMatch]);
        }
      });
    }
  }

  // create function to handle storing text content in local storage
  function setStoredText() {
    localStorage.setItem("storedText", JSON.stringify(savedText));
  }

  // load stored text on page load
  getStoredText();

  // create function to handle time and date related operations

  function checkTime() {
    var currentHour = moment().hour();
    // check each of the save button hour values to see if it is past present or future
    $(".saveBtn").each(function () {
      var blockHour = $(this).attr("value");
      var textChange = $(this).siblings(".description");
      if (currentHour < blockHour) {
        textChange.addClass("future");
      } else if (currentHour > blockHour) {
        textChange.addClass("past");
      } else if (currentHour == blockHour) {
        textChange.addClass("present");
      }
    });
  }

  checkTime();
});

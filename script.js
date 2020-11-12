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

  // create object to hold each hours text

  var savedText = {

  };
  // create function to test getting the text in text area

  $(".row").each(function (index) {
    var currentId = $(this).attr("id");
    console.log(currentId);
    savedText[currentId] = "";
    console.log(savedText);
    checkTime(this);
    $(this)
      .children(".saveBtn")
      .on("click", function () {
        var areaText = $(this).siblings(".description").val();
        console.log(areaText);
        var rowID = $(this).parent(".row").attr("id");
        savedText[rowID]= areaText;
        console.log(savedText);
        setStoredText();
      });
  });

  // create function to handle retrieving of text content from local storage
  function getStoredText() {
    
  }

  // create function to handle storing text content in local storage
  function setStoredText() {

  }

  getStoredText();


  // create function to handle time and date related operations

  function checkTime() {
    var currentHour = moment().hour();
    // check each of the save button hour values to see if it is past present or future
    $(".saveBtn").each(function() {
      var blockHour = $(this).attr("value");
      var textChange = $(this).siblings(".description");
      if(currentHour < blockHour){
        textChange.addClass("future");
      }
      else if(currentHour > blockHour){
        textChange.addClass("past");
      }
      else if(currentHour == blockHour){
        textChange.addClass("present");
      }
    })
  }

  checkTime();
});

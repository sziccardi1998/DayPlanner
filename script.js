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

    // create function to test getting the text in text area

    console.log(nineAM.children());

    console.log($(".row").children());

    $(".row").each(function (index) {

        
        ($(this).children(".saveBtn")).on("click", function () {
            var areaText = $(this).siblings(".description").val();
            console.log(areaText);
        })

    });

})

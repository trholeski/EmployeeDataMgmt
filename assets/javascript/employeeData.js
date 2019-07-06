$(document).ready(function(){
//defining some global variables that will be used as the placeholder of user input.
var search 
var numberOfRecords 
var startYear
var endYear
var key = "mFOHoR2tOylWqAA7pUS0mjkNpgXdMziR"
var queryURL

//when the user clicks "submit query" button, the global variables defined above are redefined to the respective user input. queryURL is also redefined to be the full api url.
$("#submitSearch").on("click", function(){
    search = $("#searchInput").val();
    numberOfRecords = $("#recordNum").val();
    console.log(numberOfRecords);
    startYear = $("#startYear").val();
    endYear = $("#endYear").val();
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" + search + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231"
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log(response.response.docs)
        var results = response.response.docs;
        for(var i = 0; i<numberOfRecords; i++) {
            var div = $("<div class=card>");
            // var p = $("<p>");
            // var headline = p.html("Headline: " + results[i].headline.main);
            // var link = p.html("Link: " + results[i].web_url);
            // var abstract = p.html("Abstract: " + results[i].abstract);
            // div.append(headline);
            // div.append(link);
            // div.append(abstract);
             div.append("<p> Head Line: "+ results[i].headline.main+"</p>");
             div.append("<p>Web URL: "+ results[i].web_url+"</p>");
             div.append("<p>Abstract: "+ results[i].abstract+"</p>");
            $("#results").prepend(div);
        }
    });
});

});



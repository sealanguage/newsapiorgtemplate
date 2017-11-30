/* global $ APIKEY*/
//makes sure the page loads before the javascript or jquery runs
$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources",
        data: { category: "business", country: "us", language: "en", apiKey: "3820fecb5ce54f10a2473ac3bee90c76" },
        //top: {},
        success: function(data) {
            if (data.status === "ok") {
                    console.log(data)
                    for (var i = 0; i < data.sources.length; i++) {
                        var source = document.createElement("OPTION");
                        source.setAttribute ("value", data.sources[i].id);
                        source.innerHTML = data.sources[i].name;
                        document.getElementById("selection").appendChild(source);
                    }
               
            }    
        }
    });
    
    $("#source").submit(function(event) {
        event.preventDefault();
   
        document.getElementById("display-top-articles").innerHTML = "";
    
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/top-headlines",
        data: {sources: document.getElementById("selection").value, apiKey: "3820fecb5ce54f10a2473ac3bee90c76" }, 
        success: function(data) {
            if (data.status === "ok") {
                    console.log(data);
                    for (var i = 0; i < data.articles.length; i++) {
                    var headlines = document.createElement("P");
                    //headlines.innerHTML = data.articles[i].title + "<br>" +  data.articles[i].description;
                    headlines.innerHTML = data.articles[i].title + "<br> <span id='font-weight: lighter'>" +  data.articles[i].description; + "</span>";
                    //headlines.innerHTML = data.articles[i].title;
                    //headlines.innerHTML = data.articles[i].description;
                    //     //headlines.innerHTML = data.articles[i].name;
                     document.getElementById("display-top-articles").appendChild(headlines);
                     }
                }
            }
        });
    });
    
});
/* global $ APIKEY*/
//makes sure the page loads before the javascript or jquery runs
$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/top-headlines?sources",
        data: { category: "business", country: "us", language: "en", apiKey: "c70b91b84386467ea4eaadbea1fcc78c" },
        //TAKE OUT API KEY BEFORE POSTING TO GITHUB
        success: function(data) {
            if (data.status === "ok") {
                    console.log(data)
                    for (var i = 0; i < data.sources.length; i++) {
                        var source = document.createElement("OPTION");
                        source.setAttribute ("value", data.artic[i].id);
                        source.innerHTML = data.sources[i].name;
                        document.getElementById("selection").appendChild(source);
                    }
                    
            }    
        }   
        
    })
    //.done(function( data ) {
        //console.log( data );
        //console.log(data.status);
  //});
})
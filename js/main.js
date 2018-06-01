/*  Bootstrap Single Page Application for Scales N Tails Inc. 
    By Busy Bee IT - Author Schuyler Ankele
    Contact: schuyler.ankele@gmail.com


in case I fuck up
$(document).ready(function(){
    $("#whyButton").click(function(){
        $("#home").hide();
        $("#whyPage").show();
        
    });
    
});
*/


$(document).ready(function(){
    
    
    $("#whyButton").click(function(){
        $("#home").hide();
        $("#whyPage").show();
        
    });
    $(".homeButton1").click(function(){
        
        $("#whyPage").hide();
        $("#home").show();
    });
    
    
    $("#FAQButton").click(function(){
        $("#home").hide();
        $("#FAQContainer").show();
        
    });
    $(".homeButton2").click(function(){ 
        $("#FAQContainer").hide();
        $("#home").show();
    });
    
    
    
    $("#franchiseAppButton").click(function(){
        $("#home").hide();
        $("#franchiseApp").show();    
    });
    $(".homeButton3").click(function(){
        
        $("#franchiseApp").hide();
        $("#home").show();
    });
    
    
    $("#virtualTourButton").click(function(){
        $("#home").hide();
        $("#virtualTour").show();
        
    });
    $(".homeButton4").click(function(){
        
        $("#virtualTour").hide();
        $("#home").show();
    });
    
    
    $("#reqsButton").click(function(){
        $("#home").hide();
        $("#franchiseReqs").show();
        
    });
    $(".homeButton5").click(function(){
        
        $("#franchiseReqs").hide();
        $("#home").show();
    });
    
    
    
    
    $("#contactButton").click(function(){
        $("#home").hide();
        $("#contactPage").show();
        
    });
    $(".homeButton6").click(function(){
        
        $("#contactPage").hide();
        $("#home").show();
    });
    
    
    
    $("#slideshowButton").click(function(){
        $("#home").hide();
        $("#slideshowPage").show();
        
    });
    $(".homeButton7").click(function(){
        
        $("#slideshowPage").hide();
        $("#home").show();
    });
    
});

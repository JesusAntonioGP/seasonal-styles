$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);


// changes to spring link

switch("#seasons"){


    case 0: 
        season = "spring";
        $("header h3").text("Jump into spring! ");
        $("html").css("background-color","#2B7129");
        $("#wear").attr("src","images/spring-wear.jpg");
        $("#logo").attr("src","images/spring.gif");
        break;

    case 1:
        season = "summer"
        $("header h3").text("Jump into Summer! ");
        $("html").css("background-color","#EBA52B");
        $("#wear").attr("src","images/summer-wear.jpg");
        $("#logo").attr("src","images/summer.gif");
        break;

    case 2:

    season = "fall"
        $("header h3").text("Jump into Fall! ");
        $("html").css("background-color","#A81124");
        $("#wear").attr("src","images/fall-wear.jpg");
        $("#logo").attr("src","images/fall.gif");
        break;

    case 3: 

    season = "winter"

        $("header h3").text("Jump into Winter! ");

        $("html").css("background-color","#005393");
        $("#wear").attr("src","images/winter-wear.jpg");
        $("#logo").attr("src","images/winter.gif");

}
       

       

        



    });
});


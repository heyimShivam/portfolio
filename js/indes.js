

if(innerWidth<=544){
  
    $("#threeline").click(function(){
        $("#bottomNav").slideToggle();
    }
    )
}

$("#switchimg").attr("src","images/icons/sun.png");

var lightcheck=1;
$("#sun").click(()=>{
if(lightcheck==0){
    
    //day them  nav body start
    $("body").css("background-color","white");
    $("#nav").css("background-color","white");
    $(".proa").css("color","#333");
    $("body").css("color","#313131");
    $(".hastag").css("color","black");
    $("#threelinetext").css("background-color","white");
    document.getElementById("sun").innerText="flourescent";
    $("#sun").css("color","purple")
    //

     lightcheck=lightcheck+1;
}else if(lightcheck==1){

    //night theme
    $("body").css("background-color","#313131");
    $("body").css("color","#FFFFFF");
    $(".proa").css("color","white");
    $("#nav").css("background-color","#242124");
    $(".hastag").css("color","white");
    $("#threelinetext").css("background-color","#242124");
    document.getElementById("sun").innerText="mode_night";
    $("#sun").css("color","purple");
    //
    lightcheck=0;
}
})
let skill1=0;
let skill2=0;
let skill3=0;
let skill4=0;
let skill5=0;
let skill6=0;
let skill7=0;

$("#skill1").click(()=>{
    skilltech("#skill1",1);
})
$("#skill2").click(()=>{
    skilltech("#skill2",2);
})
$("#skill3").click(()=>{
    skilltech("#skill3",3);
})
$("#skill4").click(()=>{
    skilltech("#skill4",4);
})
$("#skill5").click(()=>{
    skilltech("#skill5",5);
})
$("#skill6").click(()=>{
    skilltech("#skill6",6);
})
$("#skill7").click(()=>{
    skilltech("#skill7",7);
})


function skilltech(id,no){
    $(".skillsbox").removeClass("enlarge");
    console.log("removing it okay")
    $(id).removeClass("skillsbox");
   if(no==1){
    if(skill1==0){
        
        $(id).addClass("enlarge");
        
        var skilltext="#skilltext"+no;
        $(skilltext).addClass("skilltext");
        setTimeout(()=>{$("#skilltext1").css("display","block")},500);
        skill1++;
       
    }else{
        var skilltext="#skilltext"+no;
        $(skilltext).removeClass("skilltext");
        $("#skilltext1").css("display","none");
        $(id).removeClass("enlarge").addClass("skillsbox");
        skill1=0;
    }
}else if(no==2){
    if(skill2==0){
        var skilltext="#skilltext"+no;
        $(skilltext).addClass("skilltext");
        setTimeout(()=>{$("#skilltext2").css("display","block")},500);
        
        $(id).addClass("enlarge");
        skill2++;
       
    }else{
        var skilltext="#skilltext"+no;
        $(skilltext).removeClass("skilltext");
        $("#skilltext2").css("display","none");
        $(id).removeClass("enlarge").addClass("skillsbox");
        skill2=0;
    }
}else if(no==3){
    if(skill3==0){
        var skilltext="#skilltext"+no;
        $(skilltext).addClass("skilltext");
        setTimeout(()=>{$("#skilltext3").css("display","block")},500);
        $(id).addClass("enlarge");
        skill3++;
       
    }else{
        var skilltext="#skilltext"+no;
        $(skilltext).removeClass("skilltext");
        $("#skilltext3").css("display","none");
        $(id).removeClass("enlarge").addClass("skillsbox");
        skill3=0;
    }
     
}else if(no==4){
    if(skill4==0){
        var skilltext="#skilltext"+no;
        $(skilltext).addClass("skilltext");
        setTimeout(()=>{$("#skilltext4").css("display","block")},500);
        $(id).addClass("enlarge");
        skill4++;
       
    }else{
        var skilltext="#skilltext"+no;
        $(skilltext).removeClass("skilltext");
        $("#skilltext4").css("display","none");
        $(id).removeClass("enlarge").addClass("skillsbox");
        skill4=0;
    }
     
}else if(no==5){
    if(skill5==0){
        var skilltext="#skilltext"+no;
        $(skilltext).addClass("skilltext");
        setTimeout(()=>{$("#skilltext5").css("display","block")},500);
        $(id).addClass("enlarge");
        skill5++;
       
    }else{
        var skilltext="#skilltext"+no;
        $(skilltext).removeClass("skilltext");
        $("#skilltext5").css("display","none");
        $(id).removeClass("enlarge").addClass("skillsbox");
        skill5=0;
    }
     
}else if(no==6){
    if(skill6==0){
        var skilltext="#skilltext"+no;
        $(skilltext).addClass("skilltext");
        setTimeout(()=>{$("#skilltext6").css("display","block")},500);
        $(id).addClass("enlarge");
        skill6++;
       
    }else{
        var skilltext="#skilltext"+no;
        $(skilltext).removeClass("skilltext");
        $("#skilltext6").css("display","none");
        $(id).removeClass("enlarge").addClass("skillsbox");
        skill6=0;
    }
     
}else if(no==7){
    if(skill7==0){
        var skilltext="#skilltext"+no;
        $(skilltext).addClass("skilltext");
        setTimeout(()=>{$("#skilltext7").css("display","block")},500);
        $(id).addClass("enlarge");
        skill7++;
       
    }else{
        var skilltext="#skilltext"+no;
        $(skilltext).removeClass("skilltext");
        $("#skilltext7").css("display","none");
        $(id).removeClass("enlarge").addClass("skillsbox");
        skill7=0;
    }
     
}
}
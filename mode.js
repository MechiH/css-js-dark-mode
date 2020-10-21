const moonPath="M13 33C13 51.2254 32.5 66 32.5 66C14.5507 66 0 51.2254 0 33C0 14.7746 14.5507 0 32.5 0C32.5 0 13 14.7746 13 33Z";
const sunPath="M65 33C65 51.2254 50.4493 66 32.5 66C14.5507 66 0 51.2254 0 33C0 14.7746 14.5507 0 32.5 0C50.4493 0 65 14.7746 65 33Z";
const darkMode=document.querySelector("#darkMode");
let toggle = false ;
 darkMode.addEventListener('click',() => {
 	//  we are ging to to morph the sun to the moon then we rotate it so we have actions in a timeline that's why we are using
     	//the anime .js to have that timeline
     	// we set up the timeline
     const timeline =anime.timeline({
     	// anime.timeline is a function
     	// in the () we put propreities and we used {} because we are using an obkect as a propretie 
     	// object example var car = {type:"Fiat", model:"500", color:"white"};
     	duration:750,
         easing:"easeOutExpo"
     });
     // add animations to the timeline
     timeline.add({
     	// like querySelector
     	 // animation the d is the d of the svg that give us the points of the svg,the [] is an array beacuse we can morph  to diffrent thing so we add  diffrent objects 

     	targets:".sun",
     	d:[{value:toggle ? sunPath : moonPath}]
     })
     .add({
     	targets:"#darkMode",
     	rotate:toggle ? -400 : 330
     },"-=340")
     .add({
     	targets:"section",
     	backgroundColor: toggle ? "rgb(200,200,230)" : "rgb(22,22,22)",
     	color :toggle ? "rgb(22,22,22)": "rgb(255,255,255)"  
     },"-=550");
     if (!toggle) 
 	{toggle=true;}
  else 
  	{toggle=false;}
 });

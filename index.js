function startOver() {alert ("That was a 'yes' or 'no' question, try again");
zombieWorld ();
}
function zombieWorld () {
  alert ("Zombie World");
  let yesAnswer = prompt ("Do you like steak?");
  if (yesAnswer.toLowerCase () === "yes") {
    alert ("Congrats, you're a human");
  let humanType = prompt ("Do you like guns?");
  if (humanType.toLowerCase () === "yes") {
    alert("Great, you're a hunter");
    /*function hunter();*/ 
  }
  else if (humanType.toLowerCase () === "no") {    
    alert ("Have fun, as an unarmed civilian!");
    
    let yesAnswerFirstAdventure = prompt ("We need you to gather food from a nearby village for the people in camp, are you ready to go?")
if 
    (yesAnswerFirstAdventure.toLowerCase () ==="yes") {
    let numberFood = prompt ("You arrive with a few other people, how many food items did you obtain?") 
    if (numberFood < 5) {
        alert ("Your health declines 25% because you donate the food to the children in the camp.") 
            
        } else {
        alert ("Your health goes up 25% because you get a good meal for the day.")
    
}
        } else  
    alert ("We will need you to go to the front lines of zombie defense if you refuse to gather food. We all have a job to do here, so I don't really care if you are ready to go or not. Head out.")
    /*function civilian();*/
  } 
  else {
    startOver ()
  }
} else {
    alert ("Only one reason for that. Congrats, you're a Zombie");
  let zombieType = prompt ("Do you like brains?");
  if (zombieType.toLowerCase() === "yes"){
    alert("Great, you're a blood thirsty zombie")
    /*function zombie();*/ 
  }
  else if (zombieType.toLowerCase() === "no"){
    alert("well you look like one of 'em, You will soon!");
    /*function almostZombie()*/
  }
  else {    
    startOver()
  }
}}
zombieWorld()

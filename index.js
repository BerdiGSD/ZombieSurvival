
function startOver() {alert ("That was a 'yes' or 'no' question, try again");
zombieWorld ();
}

function hunter() {
  let ammo = 8; 
  let shotsToWin = 3;
  
  // core function to initiate the rest
  function statusOnFight () {
    if(action.toLowerCase() === "yes") {
      fightSequence();
    } else{
      alert (`Zombie noticed you`)
      secondRoute();
    }
  }
  
  // repeatable fight sequence
  function fightSequence() {
    shotsFired(); 
    alert(`${ammo} remaining`);
    hitOrMiss();
    lifePoints()
  }
  
  // function to decrement the ammo count
  function shotsFired () {
    ammo -= 1
    return ammo;
  }
  
  // random variable to decide on a 50 / 50 chance if the shot will hit or not
  function hitOrMiss () {
    let chances = Math.floor(Math.random() * 100) + 1;
    if (chances <50) {
      alert (`Darn it, it missed`);
    } else {
      shotsToWin -= 1;
      alert (`Good shot, just ${shotsToWin} more shots to go`);
      return shotsToWin;
    }
  }
  
  // conditions for winning the fight
  function lifePoints () {
    if (shotsToWin === 0) {
      alert (`You did it! You live to see another day`);
      return alert(`Game Over, You Won!!!`)
    } else if ((shotsToWin > 0) && (ammo === 0)){
      alert (`Game Over, the zombie got to you`);
    } else {
      action = prompt ('Do you take another shot');
      statusOnFight()
    }
  }
  
  // alternative route in the story that will still require you to fight the zommbie
  function secondRoute () {
    let responseToZombie = ""
    alert (`Oh no, the zombie spotted you!!`);
    alert ('You have to fight for your life now');
    responseToZombie = prompt (`Do you want to take it out before it gets you?`);
  
    if (responseToZombie.toLowerCase() === "yes") {
      fightSequence();
    } else {
      return alert(`Game Over, zombies are hungry after all`)
    }
  }
  
  //This will start the reduction in ammo and the story line for the hunter
  let action = prompt('You run across a zombie, do you take the shot?');
  
  if (action === "yes") {
    statusOnFight();
  } else {
    secondRoute();
  }
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
    hunter();
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

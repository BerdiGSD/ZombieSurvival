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
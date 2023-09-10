let ammo = 8; 
let shotsToWin = 3;



function statusOnFight () {
  if(action.toLowerCase() === "yes") {
    fightSequence();
  } else{
    alert (`Zombie noticed you`)
    secondRoute();
  }
}

function fightSequence() {
  shotsFired(); 
  alert(`${ammo} remaining`);
  hitOrMiss();
  lifePoints()
}

function shotsFired () {
  ammo -= 1
  return ammo;
}

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

function secondRoute () {
  let responseToZombie = ""
  alert ('You have to fight for your life now');
  responseToZombie = prompt (`Do you want to take a shot at it?`);

  if (responseToZombie.toLowerCase() === "yes") {
    fightSequence();
  } else {
    return alert(`Game Over, zombies are hungry after all`)
  }
}

//This will start the reduction in ammo
let action = prompt('You run across a zombie, do you take the shot?');

if (action === "yes") {
  statusOnFight();
} else {
  secondRoute();
}



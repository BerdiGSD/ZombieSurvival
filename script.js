let ammo = 8; 
let shotsToWin = 3;

function statusOnFight () {
  if(action.toLowerCase() === "yes") {
    shotsFired(); 
    alert(`${ammo} remaining`);
    hitOrMiss();
  } else {
    alarm (`Zombie noticed you`)
  }
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

function lifeOrDeath () {
  if (shotsToWin === 0) {
    alert (`You did it! You live to see another day`);
  } else if ((shotsToWin > 0) && (ammo === 0)){
    alert (`Game Over, the zombie got to you`);
  } else {
    action = prompt ('Do you take another shot');
    statusOnFight()
  }
}

//This will start the reduction in ammo
let action = prompt('You run across a zombie, do you take the shot?');

statusOnFight();

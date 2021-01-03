const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';
const enteredValue = parseInt(prompt('Maksimalni broj života', 100));

let choosenMaxLife = enteredValue;

if (isNaN(choosenMaxLife) || choosenMaxLife <= 0) {
  choosenMaxLife = 100;
}

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;
let hasBonusLive = true;
let battleLog = [];

adjustHealthBars(choosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  // rijesenje sa switch

  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = 'MONSTER';

      break;

    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: 'MONSTER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;

    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;

    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
        event: ev,
        value: val,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;

    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;

    default:
      logEntry = {};
  }

  // // rijesenje sa if

  // if (ev === LOG_EVENT_PLAYER_ATTACK) {

  //   // ...target dodaje direkno u objekt varijablu

  //   logEntry.target = 'MONSTER';

  //   // drugi nacin kako to prikazati

  // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {

  //   logEntry = {

  //     event: ev,

  //     value: val,

  //     target: 'MONSTER',

  //     finalMonsterHealth: monsterHealth,

  //     finalPlayerHealth: playerHealth

  //   };

  // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {

  //   logEntry = {

  //     event: ev,

  //     value: val,

  //     target: 'PLAYER',

  //     finalMonsterHealth: monsterHealth,

  //     finalPlayerHealth: playerHealth

  //   };

  // } else if (ev === LOG_EVENT_PLAYER_HEAL) {

  //   logEntry = {

  //     event: ev,

  //     value: val,

  //     target: 'PLAYER',

  //     finalMonsterHealth: monsterHealth,

  //     finalPlayerHealth: playerHealth

  //   };

  // } else if (ev === LOG_EVENT_GAME_OVER) {

  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth
  //   };
  // }

  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = choosenMaxLife;
  currentPlayerHealth = choosenMaxLife;
  resetGame(choosenMaxLife);
}

function attackHandler() {
  checkWinner(ATTACK_VALUE);
}

function strongAttackHandler() {
  checkWinner(STRONG_ATTACK_VALUE);
}

function checkWinner(attack) {
  const monsterDamage = dealMonsterDamage(attack);
  currentMonsterHealth = currentMonsterHealth - monsterDamage;

  writeToLog(
    'A DRAW',
    attack,
    currentMonsterHealth,
    currentPlayerHealth
  );

  endRound();
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;

  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);

  currentPlayerHealth = currentPlayerHealth - playerDamage;

  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLive) {
    hasBonusLive = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    alert('Dobio novi zivot');
    setPlayerHealth(initialPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('Pobjedio si!');

    writeToLog(
      LOG_EVENT_GAME_OVER,
      'PLAYER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );

    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('Izgubio si');

    writeToLog(
      LOG_EVENT_GAME_OVER,
      'Moster won',
      currentMonsterHealth,
      currentPlayerHealth
    );

    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('Nerjeseno');

    writeToLog(
      LOG_EVENT_GAME_OVER,
      'A DRAW',
      currentMonsterHealth,
      currentPlayerHealth
    );

    reset();
  }
}

function healPlayerHandler() {
  let healValue;

  if (currentPlayerHealth + HEAL_VALUE > choosenMaxLife) {
    alert(" You can't heal more than your max initial health");
    healValue = choosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);

  currentPlayerHealth = currentPlayerHealth + healValue;

  writeToLog(
    'Heal',
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );

  endRound();
}


function printLogHandler() {
  for (let i = 0; i < battleLog.length; i++) {
    console.log('------');
  }

  for (let i = 0; i < battleLog.length; i++) {
    console.log(battleLog[i]);
  }

  // petlja kroz polje
  for (const log of battleLog) {
    console.log(log);
  }

  console.log('petlja u petlji');
  for (const data of battleLog) {
    console.log(data);
    for (const key in data) {
      console.log(key + ' = ' + data[key]);
    }
  }

  let j = 0;
  while (j < 3) {
    console.log('--while -');
    j++;
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);

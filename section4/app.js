// noinspection JSUnresolvedVariable
// noinspection JSUnusedGlobalSymbols

Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      roundsSinceSpecialAttack: 0,
      canHeal: true,
      winner: null,
      logs: []
    };
  },
  methods: {
    attackMonster() {
      const damage = getRandomValue(5, 10);
      this.monsterHealth -= this.monsterHealth - damage < 0
        ? this.monsterHealth : damage;
      this.addLogMessage(`You hit the monster for ${damage}`);
      if (this.monsterHealth > 0) {
        this.attackPlayer();
      }
      this.roundsSinceSpecialAttack += 1;
    },
    attackPlayer() {
      if (this.monsterHealth === 0) {
        return;
      }
      const damage = getRandomValue(5, 20);
      this.playerHealth -= this.playerHealth - damage < 0
        ? this.playerHealth : damage;
      this.addLogMessage(`The monster hit you for ${damage}`);
    },
    specialAttackMonster() {
      const damage = getRandomValue(15, 30);
      this.monsterHealth -= this.monsterHealth - damage < 0
        ? this.monsterHealth : damage;
      this.addLogMessage(`You critical hit the monster for ${damage}`);
      this.attackPlayer();
      this.roundsSinceSpecialAttack = 0;
    },
    heal() {
      const healing = getRandomValue(5, 15);
      if (healing + this.playerHealth > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healing;
      }
      this.canHeal = false;
      this.addLogMessage(`You healed yourself for ${healing}`);
    },
    surrender() {
      this.winner = 'surrendered';
      this.addLogMessage(`You surrendered to the monster with ${this.playerHealth} health left`);
    },
    reset() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.roundsSinceSpecialAttack = 0;
      this.canHeal = true;
      this.winner = null;
      this.logs = []
    },
    addLogMessage(message) {
      this.logs.unshift(message);
    }
  },
  computed: {
    monsterBarStyles() {
      return {width: this.monsterHealth + '%'}
    },
    playerBarStyles() {
      return {width: this.playerHealth + '%'}
    },
    cannotUseSpecialAttack() {
      return this.roundsSinceSpecialAttack < 3;
    },
    cannotHeal() {
      return !this.canHeal;
    },
    gameOver() {
      return this.playerHealth === 0 || this.monsterHealth === 0 || this.winner !== null;
    },
    playerWon() {
      return this.winner === 'player';
    },
    monsterWon() {
      return this.winner === 'monster';
    },
    surrendered() {
      return this.winner === 'surrendered';
    }
  },
  watch: {
    monsterHealth(nv) {
      if (nv === 0) {
        this.addLogMessage(`The monster gurgles its last breath`)
        this.winner = 'player';
      }
    },
    playerHealth(nv) {
      if (nv === 0) {
        this.addLogMessage(`You fall to the ground dead`)
        this.winner = 'monster'
      }
    },
  }
}).mount("#game");

function getRandomValue(min, max) {
  return Math.floor(min + (Math.random() * (max - min)));
}
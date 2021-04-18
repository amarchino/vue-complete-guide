function getRandomValue(minDamage, maxDamage) {
  return Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100
    };
  },
  methods: {
    attackMonster() {
      this.monsterHealth -= getRandomValue(5, 12);
      this.attackPlayer();
    },
    attackPlayer() {
      this.playerHealth -= getRandomValue(5, 12);
    }
  }
});
app.mount('#game');

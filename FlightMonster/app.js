new Vue({
  el: '#app',
  data: {
    showButtons: false,
    myBlood: 100,
    monsterBlood: 100,
    // hurt: [],
    turns: []
  },
  computed: {
  	myBloodStyle: function(){
  		return {
  			width: this.myBlood + '%'
  		}
  	},
  	monsterBloodStyle: function(){
  		return {
  			width: this.monsterBlood + '%'
  		}
  	}
  },
  methods: {
    changeShowButtons: function() {
      this.showButtons = !this.showButtons
    },
    attack: function(){
    	// myH = Math.floor(Math.random() * 20)
    	// monsterH = Math.floor(Math.random() * 20)
    	// this.hurt.push([myH, monsterH])
    	var damage = this.calculateDamage(3,10)
    	this.monsterBlood -= damage
    	this.turns.unshift({
    		isPlayer: true,
    		text: 'Pleyer hits monster for ' + damage
    	})
    	// this.myBlood -= myH
    	// if(this.myBlood<=0) {
    	// 	alert('You Lost')
    	// 	this.showButtons = false
    	// 	this.giveUp()
    	// 	return
    	// }
    	if(this.checkWin()) return
    	// this.monsterBlood -= this.calculateDamage(5, 12)
    	// // this.monsterBlood -= monsterH
    	// // if(this.monsterBlood<=0) {
    	// // 	alert('You Won')
    	// // 	this.showButtons = false
    	// // 	this.giveUp()
    	// // }    	
    	// this.checkWin()
    	this.monsterAttack()
    },
    specialAttack: function(){
    	// myH = Math.floor(Math.random() * 20)
    	// monsterH = Math.floor(Math.random() * 30)
    	// this.hurt.push([myH, monsterH])
    	// this.myBlood -= myH
    	// this.monsterBlood -= monsterH
    	var damage = this.calculateDamage(10,20)
    	this.monsterBlood -= damage
    	this.turns.unshift({
    		isPlayer: true,
    		text: 'Pleyer hits monster for ' + damage
    	})
    	if(this.checkWin()) return    	
    	this.monsterAttack()    	
    },
    heal: function(){
    	// heal = Math.floor(Math.random() * 20)
    	// this.myBlood += heal    	
    	if(this.myBlood <=90) {
    		this.myBlood += 10
    	} else {
    		this.myBlood = 100
    	}
    	this.turns.unshift({
    		isPlayer: true,
    		text: 'Pleyer heals for ' + 10
    	})    	
    	this.monsterAttack()    	    	
    },
    giveUp: function(){
    	this.showButtons = false
    	this.myBlood = 100
    	this.monsterBlood = 100
    	// this.hurt = []
        this.turns = []
    },
    monsterAttack: function() {
    	var damage = this.calculateDamage(3,10)
    	this.myBlood -= damage
    	this.checkWin()
    	this.turns.unshift({
    		isPlayer: false,
    		text: 'Monster hits player for ' + damage
    	})
    },
    calculateDamage: function(min, max){
    	return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin: function(){
    	if(this.myBlood <= 0) {
    		if(confirm('You lost! Start new game?')) {
    			this.giveUp()
    		} else {
    			this.showButtons = true
    		}
    		return true
    	} else if(this.monsterBlood <= 0) {
    		if(confirm('You won! Start new game?')) {
    			this.giveUp()
    		} else {
    			this.showButtons = true
    		}
    		return true    		
    	}
    	return false
    }
  }
});

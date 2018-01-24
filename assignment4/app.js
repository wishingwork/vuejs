new Vue({
  el: '#exercise',
  data: {
  	effect: false,
  	className: 'yellowBorder',
  	progress: 0
  },
  computed: {
    blockStyle: function() {
    	return {
    		highlight: this.effect,
    		shrink: !this.effect
    	}    	
    },
    // get the variable from methods and display
    newClassName: function() {
    	if(this.effect == 'true') { 
    		return this.className
    	}
    },
    myStyle: function(){
    	return {
    		'background-color': this.className
    	} 
    },
    progressStyle: function(){
    	return {
    		width: this.progress + 'px'
    	}
    }
  },
  methods: {
    startEffect: function() {
    	this.effect = !this.effect
    },
    // Doing some calculation and then go to computed to display
    anotherClass: function(event) {	
  		this.effect = event.target.value;
    },
    startProgress: function() {
    	this.progress += 10;

    }
  }
});

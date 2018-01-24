new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
        	alertMe: function(event) {
        		alert('Alert!');
        	},
        	storeValue: function(event){
        		this.value = event.target.value;
        	}
        }
    });
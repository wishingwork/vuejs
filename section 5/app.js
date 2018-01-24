var data = {
    title: 'The VueJS Instance',
    showParagraph: false
};

var vm1 = new Vue({
  // el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'test';
    },
    updateTitle: function(title) {
      this.title = 'title';
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});
vm1.$mount('#app1');
// vm1.newProperty = 'cc';
// console.log(vm1);
console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'nono';

setTimeout(function(){
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 2000);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second VueJS Instance',
  },
  methods: {
    onChange: function(){
      vm1.title = "Changed!"
    }
  }
});
var vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

// vm3.$mount('#app3');
vm3.$mount();
document.getElementById("app3").appendChild(vm3.$el);

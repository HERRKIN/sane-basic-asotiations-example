import Ember from 'ember';

export default Ember.Controller.extend({

   actions:{
		save: function (){
			var _this = this
			 var m = this.get('model');
			// var m = this.modelFor('newbook')
			 //console.log(m.get('owner').get('name'))
			 console.log(this.selectedowner)
			 m.set('owner',this.selectedowner)
			 console.log(m.get('name'))
			  m.save()
			 .then(function  () {
			 	_this.transitionTo('books')
			 })
		}
	
   }
});

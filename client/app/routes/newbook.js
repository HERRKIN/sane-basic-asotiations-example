import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function  () {
		return this.store.createRecord('book');
	},
	setupController: function  (controller,model) {
		controller.set('model',model)
		controller.set('users', this.store.find('user'));
	},
	   actions:{
		save: function (){
			var _this = this
			 //var m = this.get('model');
			 var m = this.currentModel;
			// var m = this.modelFor('newbook')
			 //console.log(m.get('owner').get('name'))
			 var selected = this.controllerFor('newbook').get('selectedowner')




			 console.log(selected)
			 m.set('owner',selected)
			 console.log(m.get('name'))
			  m.save()
			 .then(function  () {
			 	_this.transitionTo('books')
			 })
		}
	
   }
});

import Ember from 'ember';

export default Ember.Route.extend({
		model: function  (params) {
		return this.store.find('book',params.book_id);//este no es necesario, ember lo asume
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
			 var selected = this.controllerFor(this.routeName).get('selectedowner')




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

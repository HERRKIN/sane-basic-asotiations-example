import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function  () {
		return this.store.createRecord('book');
	},
	setupController: function  (controller,model) {
		controller.set('model',model)
		controller.set('users', this.store.find('user'));
	}
});
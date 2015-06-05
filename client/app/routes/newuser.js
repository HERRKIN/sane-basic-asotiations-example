import Ember from 'ember';

export default Ember.Route.extend({
	model:function  () {
		return this.store.createRecord('user');
	},
	actions:{
		save: function (){
			var _this = this;
			 //var m = this.currentModel;
			 var m = this.modelFor('newuser');
			
			 m.save()
			 .then(function  () {
			 	_this.transitionTo('users');
			 })
		}
	}
});

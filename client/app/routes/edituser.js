import Ember from 'ember';

export default Ember.Route.extend({

	   actions:{
		save: function (){
			var _this = this
			 //var m = this.get('model');
			 var m = this.currentModel;
			// var m = this.modelFor('newbook')
			 //console.log(m.get('owner').get('name'))

			 console.log(m.get('name'))
			  m.save()
			 .then(function  () {
			 	_this.transitionTo('users')
			 })
		}
	
   }
});

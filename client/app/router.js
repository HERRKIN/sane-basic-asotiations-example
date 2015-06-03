import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user');
  this.route('book');
  this.route('users');
  this.route('newuser');
  this.route('newbook');
  this.route('books');
  this.route('editbook', {path: '/editbook/:book_id'});
  this.route('edituser', {path: '/edituser/:user_id'});
});

export default Router;

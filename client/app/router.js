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
});

export default Router;

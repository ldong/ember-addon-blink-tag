//blink-tag/app/components/blink-tag.js
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'h1',

  show: true,

  classNameBindings: ['show:blink-tag--visible:blink-tag--invisible'],

  didInsertElement: function() {
    setInterval(() => {
      if(!this.isDestroyed) {
        this.toggleProperty('show');
      }
    }, 3000);
  }

});

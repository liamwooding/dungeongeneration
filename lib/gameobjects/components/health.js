//Because Browserify encapsulates every module, use strict won't apply to the global scope and break everything
'use strict';

//Require necessary modules
var Event = require('../..input/event.js');

/**
 * Health Component constructor
 *
 * @class Health
 * @classdesc The health component is responsible for managing the health
 *
 * @param {Number} maxHealth - The new and maximum health of the entity
 */
var Health = function(maxHealth, entity) {

	/**
	 * @property {String} name - The name of this system. This field is always required!
	 */
	this.name = 'health';

	/**
	 * @property {Number} minHealth - The minimum health of the entity
	 */
	this.minHealth = 0;

  /**
   * @property {Event} events - Event holder
   */
  this.events = new Event();

  /**
   * @property {Entity} entity - Reference to the entity that has this component
   */
  this.entity = entity;

	/**
	 * @property {Number} health - The starting, and maximum health of the entity
	 */
	this.health = this.maxHealth = maxHealth;

};

Health.prototype = {

	/**
	 * Returns the percentage of health that is left
	 * @protected
	 *
	 * @return {Number} Percentage rounded to 2 decimals
	 */
	percentage: function() {

		//Return the percentage
		return this.health / this.maxHealth;

	},

	/**
	 * Check if the entity has full health
	 * @protected
	 *
	 * @return {Boolean} True when full health, false when damaged
	 */
	isDamaged: function() {

		//Return true or false based on the entities health
		return this.health < this.maxHealth;

	},

	/**
	 * Check whether the entity is dead
	 * @protected
	 *
	 * @return {Boolean} True when dead, false when alive
	 */
	isDead: function() {

		//Return true or false based on the entities health
		return this.health <= this.minHealth;

	},

	/**
	 * Function to take damage
	 * @protected
	 */
	takeDamage: function(damage) {

		//Subtract the damage from the health of this entity
		this.health -= damage;

		//If the health drops below the minimum health, set it to the minimum health
		if(this.health < this.minHealth) {

			this.health = this.minHealth;

      // Fire an event, so we can update the UI
      var healthChangeEvent = new CustomEvent("playerHealthChange", {"detail": {"new": })
      
		}

	}

};

//Export the Browserify module
module.exports = Health;

//Because Browserify encapsulates every module, use strict won't apply to the global scope and break everything
'use strict';

//Require necessary modules
var Entity = require('../gameobjects/entity.js'),
	Health = require('../gameobjects/components/health.js'),
	LightSource = require('../gameobjects/components/lightsource.js'),
	Collide = require('../gameobjects/components/collide.js'),
	Weapon = require('../gameobjects/components/weapon.js'),
	KeyboardControl = require('../gameobjects/components/keyboardcontrol.js'),
	CanFight = require('../gameobjects/components/canfight.js'),
	Tooltip = require('../gameobjects/components/tooltip.js'),
	Sprite = require('../gameobjects/components/sprite.js'),
	Position = require('../gameobjects/components/position.js');

/**
 * @class PlayerFactory
 * @classdesc A factory that returns pre made player entities with
 * a set of components
 */
var PlayerFactory = {

	/**
	 * Function that returns a new warrior
	 * @public
	 *
	 * @param {Game} game - Reference to the currently running game
	 * @param {Vector2} position - The position object of this entity
	 * @param {Object} controls - Associative array with every control this entity uses
	 *
	 * @return {Entity} A player entity
	 */
	newPlayerWarrior: function(game, position, controls) {

		//Create the entity
		var entity = new Entity(game, "You", 1000);

		//Give the player a health of 100 points
		entity.addComponent(new Health(100));

		//The starting position of the player is at the dungeon's entrance
		entity.addComponent(new Position(position));

		//The player has a sprite
		entity.addComponent(new Sprite("entities", 0, 0));

		//The player must be controllable by the keyboards arrow keys
		entity.addComponent(new KeyboardControl(
			game,
			entity,
			controls
		));

		//Add a lightsource to the player
		entity.addComponent(new LightSource(true, 6));

		//You can collide with this entity
		entity.addComponent(new Collide(true));

		//The entity has a weapon
		//TODO: Change this to a loadout. Something that says: Hey you are wearing this and this and this
		entity.addComponent(new Weapon(7));

		//This entity is capable of fighting
		entity.addComponent(new CanFight(game));

		//Add a tooltip to this entity
		entity.addComponent(new Tooltip(
			game.settings.canvas,
			"Player",
			"",
			""
		));

		//Return the entity
		return entity;

	}

};

//Export the Browserify module
module.exports = PlayerFactory;

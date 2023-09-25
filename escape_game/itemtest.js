/* jshint esversion: 8 */

// This example is a port of: https://gist.github.com/diazvictor/6fe3372bce79587a3c21123a19881cb1

// I create the Inventory class
class Inventory {
	// What to do when the class is initialized
	constructor() {
		this.items = [];
	}

	/**
	 * I look at what I carry in my inventory
	 * @returns {Boolean} true or false if there are items
	 */
	getItems () {
		if (this.items[0]) {
			console.log("You carry:");
			this.items.forEach(inventory => {
				console.log(`* ${inventory.desc}`);
			});
			return true;
		} else {
			console.log("You have nothing.");
			return false;
		}
	}

	/**
	 * I check if an item exists
	 * @param {String} item name
	 * @returns {Boolean} true or false if the item exists
	 */
	hasItem (name) {
		for (var i in this.items) {
			if (name == this.items[i].name) {
				return true;
			}
		}
		return false;
	}
	
	/**
	 * I add an item to the inventory
	 * @param {String} item name
	 * @param {String} item description
	 * @returns {Number} the number of items in the inventory
	 */
	addItem (name, desc) {
		this.items.push({
			"name": name,
			"desc": desc,
		});
		return this.items.length;
	}

	/**
	 * I remove an item from inventory
	 * @param {String} item name
	 * @returns {Boolean} true or false if the item has been removed successfully
	 */
	removeItem (name) {
		this.items.forEach(inventory => {
			if (name == inventory.name) {
				this.items.pop(inventory.name);
				return true;
			} else {
				return false;
			}
		});
	}
}

// BackPack inherits methods and properties from Inventory
class BackPack extends Inventory {
	/**
	 * I add an item to the inventory but first I check if the limit has not
	 * been reached.
	 * @param {String} item name
	 * @param {String} item description
	 * @returns {Number} the number of items in the inventory
	 */
	addItem (name, desc) {
		this.size = 10;
		if (this.items.length >= this.size) {
			console.log("backpack is full");
			return false;
		} else {
			super.addItem(name, desc);
			return true;
		}
	}
}

let player = new BackPack();

player.addItem('lantern', 'an oil lantern');
player.addItem('sword', 'This sword has the blessing of the wind');

player.getItems();
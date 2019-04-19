/*jshint esversion: 6 */
// @ts-check

//Code to initialize the canvas for us
window.onload = function() {
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("myCanvas") );
    let height = canvas.height = window.innerHeight;
    let width = canvas.width = window.innerWidth;
    let context = canvas.getContext("2d");

    //Test canvas out
    context.fillStyle = "black";
    context.fillRect(10,10, width-20, height-20);

    let towers = [];
};

// --------------  CLASS DEFINITIONS  ----------------------

/**
 * Object representing a tower on map. It contains not only the information for its location on the screen
 * 
 * @typedef TowerOptions
 * @property [x=0] - x coordinate of location on screen
 * @property [y=0] - y coordinate of location on screen
 * @property [damage=10] - damage per hit/tick
 * @property [attackSpeed=1] - attacks/second
 */
class Tower {
    /**
     * 
     * @param {TowerOptions} options -- List of options for the tower
     */
    constructor(options={} ) {
        this.damage = "damage" in options ? options.damage : 10;
        this.attackSpeed = "attackSpeed" in options ? options.attackSpeed : 1;

        /** @type {Array<Projectile>} */
        this.projectiles = [];

        /** @type {Enemy} */
        this.target = null;
    }

    /**
     * Draws tower, along with any emitted projectiles
     * 
     * @param {CanvasRenderingContext2D} context - context to be drawn in
     */
    draw(context) {
        //TODO
    }

    /**
     * Emits new projectile towards current target
     */
    attack() {
        //TODO
    }

    /**
     * Re-determine target (enemy)
     */
    target() {
        //TODO
    }
}   

/**
 * Object representing a projectile targeting an enemy. Belongs to a Tower (the one that created it)--will be drawn within that Tower's draw() method.
 * Must be passed parent, target. Other properties optional.
 * 
 * @typedef ProjectileOptions
 * @property [parent] Tower to which this projectile belongs
 * @property [childNum] Index in parent's projectiles array. To be used for clean-up, in pop()
 * @property [target] Enemy which this projectile is targeting
 * @property [damage=10] Damage this projectile will do
 * @property [velocity=50] Velocity in pixels/second
 * @property [dir=0] Direction of movement, as an angle in radians (measured from x-axis)
 * @property [x] x coordinate of location on screen
 * @property [y] y coordinate of location on screen
 */
class Projectile {
    /**
     * 
     * @param {ProjectileOptions} options 
     */
    constructor(options={} ) {
        this.parent = options.parent;
        this.target = options.target;

        this.damage = "damage" in options ? options.damage : 10;
        this.velocity = "velocity" in options? options.velocity : 50;
        this.dir = "dir" in options? options.dir : 0;
    }

    /**
     * Called by parent tower draw() method.
     * First checks if enemy target is reached: if so, pops on that enemy; if not, updates its position and draws itself
     */
    draw() {
        //TODO
    }

    /**
     * If target is reached, do damage and disappear (remove self from parent Tower's projectiles array)
     */
    pop() {
        //TODO
    }
}

/**
 * 
 */
class Enemy {
    constructor(options={} ) {

    }
}
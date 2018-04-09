class Point{
    /**
     * Create the point with the coordinates of (x, y)
     * 
     * @param {number} x        The x coordinate of the point
     * @param {number} y        The y coordinate of the point
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
    * Returns a new Point with the values of the current point, and
    * the values of the point provided added.
    * 
    * @param {number} x      The X coordinate of the secondary point
    * @param {number} y      The Y coordinate of the secondary point
    * 
    * @returns {Point}       Returns the new coordinate
    */
    addWithReturn(x, y){
        return {
            x: this.x + x,
            y: this.y + y
        };
    }

    /**
     * Adds the provided (x, y) values to the current Point.
     * 
     * @param {number} x    The X coordinate of the secondary point
     * @param {number} y    The Y coordinate of the secondary point
     */
    add(x, y) {
        this.x += x;
        this.y += y;
    }

    show(){
        ellipse(this.x, this.y, 1, 1);
    }
}
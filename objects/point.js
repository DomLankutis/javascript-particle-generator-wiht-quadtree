class Point{
    /**
     * Create the point with the coordinates of (x, y)
     * 
     * @param {number} x        The x coordinate of the point
     * @param {number} y        The y coordinate of the point
     */
    constructor(xx, yy) {
        this.cords = {
            x: xx,
            y: yy
        };
    }
    /**
    * Adds the current point witht he point provided,
    * for ease of use input is provided as two points:
    * 
    * @param {number} x      The X coordinate of the secondary point
    * @param {number} y      The Y coordinate of the secondary point
    * 
    * @returns {Point}       Returns the new coordinate
    */
    add(x, y){
        return {
            x: this.cords.x += x,
            y: this.cords.y += y
        };
    }
}
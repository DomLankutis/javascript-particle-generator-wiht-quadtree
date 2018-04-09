/** Class representing a Rectangle */
class Rectangle{
    /**
    * Creates an object which stores the four points of the ractange.
    * 
    * @param {Point} pos            The centre position of the rectangle
    * @param {number} width         the width of the rectangle from the centre
    * @param {number} height        The the height of the rectangle from the centre
    */
    constructor(pos, width, height) {
        this.pos = pos;
        this.width = width;
        this.height = height;
    }

    /**
     * Check if a point is contained within the rectangle
     * 
     * @param {Point} point     The point that is to be checked.
     * 
     * @returns {bool}          Returns a boolean value of true if object is contained within the object.
     */
    contains(point) {
        if (point.x >= this.pos.x - this.width && point.x <= this.pos.x + this.width  && 
            point.y >= this.pos.y - this.height && point.y <= this.pos.y + this.height) {
            return true;
        }else {
            return false;
        }
    }
    
    /**
     *  Draws the rectrangle. (MUST INCLUDE P5.js for this to work)
     */
    show() {
        noFill();
        rect(this.pos.x, this.pos.y, this.width * 2, this.height * 2);
    }
}

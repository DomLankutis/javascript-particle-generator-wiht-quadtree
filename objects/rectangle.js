/** Class representing a Rectangle */
class Rectangle{
    /**
    * Creates an object which stores the four points of the ractange.
    * 
    * @param {Point} topLeftPos     The most top left corner point of the rectangle
    * @param {number} width         the width of the rectangle from the most top left point
    * @param {number} height        The the height (going downwards) from the most top left point
    */
    constructor(topLeftPos, width, height) {
        this.points = {
            topLeft:        topLeftPos.add(0, 0),
            topRight:       topLeftPos.add(width, 0),
            bottomRight:    topLeftPos.add(width, height),
            bottomLeft:     topLeftPos.add(0, height)
        };
        
        this.width = width;
        this.height = height;
    }
    
    /**
     *  Draws the rectrangle. (MUST INCLUDE P5.js)
     */
    show() {
        rect(this.points.topLeft.x, this.points.topLeft.y, this.width, this.height);
    }
}

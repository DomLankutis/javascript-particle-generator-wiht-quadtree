class Quadtree{
    /**
     * Creates the first Quadtree as the size of the screen (REQUIRES P5.js),
     * after which it starts to recur through itself if conditions are met:
     * 
     * @param {number} maxItems     Set the maximum number of items allowed in one quadtree secition.
     */     
    constructor(maxItems) {
        this.rectangle = new Rectangle(new Point(0, 0), width, height);
        this.maxItems = maxItems;        
    }

    /**
     * Insert a point to the quadtree, the if the limit is reacehd begin creating new quadtrees.
     * (incrementing the current function, so tha if there is still more items in a quad tree then create more of them),
     * If there the ammount of items is NOT more than the 'maxItems' then just insert the point in to the objects array of points.
     * 
     * @param {Point} point         The point that is to be inserted in to the quadtree
     */
    insert(point){

    }

}
/**Class for the Quadtree object */
class Quadtree{
    /**
     * Create a quadtree which gets the bounds provided so that we know the initial size of the tree.
     * Usually you would want the first initial bounds to be the size of the screen.
     * 
     * @param {number} maxItems     Set the maximum number of items allowed in one quadtree secition.
     * @param {Rectangle} bounds    Set the bounds of the current branch.
     */     
    constructor(maxItems, bounds) {
        this.bounds = bounds;
        this.maxItems = maxItems;
        this.points = [];
        this.divided = false;
        this.bounds.show();
    }

    /**
     * Creates 4 quadtrees within the current branch
     */
    subdivide() {
        this.nW = new Quadtree(this.maxItems, new Rectangle(new Point(this.bounds.pos.x - this.bounds.width / 2, this.bounds.pos.y - this.bounds.height / 2), this.bounds.width / 2, this.bounds.height / 2));
        this.nE = new Quadtree(this.maxItems, new Rectangle(new Point(this.bounds.pos.x + this.bounds.width / 2, this.bounds.pos.y - this.bounds.height / 2), this.bounds.width / 2, this.bounds.height / 2));
        this.sE = new Quadtree(this.maxItems, new Rectangle(new Point(this.bounds.pos.x + this.bounds.width / 2, this.bounds.pos.y + this.bounds.height / 2), this.bounds.width / 2, this.bounds.height / 2));
        this.sW = new Quadtree(this.maxItems, new Rectangle(new Point(this.bounds.pos.x - this.bounds.width / 2, this.bounds.pos.y + this.bounds.height / 2), this.bounds.width / 2, this.bounds.height / 2));
        
        this.divided = true;
    }

    /**
     * Insert a point to the quadtree, the if the limit is reacehd begin creating new quadtrees.
     * (incrementing the current function, so tha if there is still more items in a quad tree then create more of them),
     * If there the ammount of items is NOT more than the 'maxItems' then just insert the point in to the objects array of points.
     * 
     * @param {Point} point         The point that is to be inserted in to the quadtree
     * 
     * @returns                     If the point was inserted. If the return is false then the point is not within the bounds of the branch
     */
    insert(point) {
        if (!this.bounds.contains(point)){
            return false;
        }

        if (this.points.length < this.maxItems) {
            this.points.push(point);
            return true;
        }else {
            if (!this.divided) {
                this.subdivide();
            } else if (this.nW.insert(point)) {
                return true;
            } else if (this.nE.insert(point)) {
                return true;
            } else if (this.sE.insert(point)) {
                return true;
            } else if (this.sW.insert(point)) {
                return true;
            }
        }
    }

}
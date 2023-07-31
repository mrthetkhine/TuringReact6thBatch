class Point
{
    x =0;
    y :number;

    constructor(x: number,y: number)
    {
        this.x = x;
        this.y = y;
        console.log('Point constru');
    }
}
class Point3D extends Point
{
    z:number;
    constructor(x:number, y: number , z : number)
    {
        super(x,y);
        console.log('Point 3D con');
        //console.log('Before super ',this.x);
       
        this.z = z;
    }
    print()
    {
        console.log('x ',this.x, ' y ',this.y, ' z ',this.z);
    }
}
//let point = new Point(10,20);
let point3D = new Point3D(10,20,30);
point3D.print();
class Rubber{
	constructor(x,y,r)
	{

var options={
		restitution: 0.3,
		friction: 10,
		density: 1
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,this.r, options)
		World.add(world, this.body);

	}
	display(color)
	{
			var rubberPos=this.body.position;

			push()
			translate(rubberPos.x, rubberPos.y);
			strokeWeight(4);
			stroke("black");
			fill(color);
			//draw the ellipse here to display the rubber ball
			ellipseMode (RADIUS);
			ellipse(0,0,this.r)
			pop()
	}

}
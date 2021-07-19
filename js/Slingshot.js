class slingshot
{
constructor(bodyA,pointB)
{
    var options = 
    {
        bodyA:bodyA, pointB:pointB,
        stiffness:0.05,
        length:1
    }
    this.bodyA = bodyA
    this.pointB = pointB

    this.body = Constraint.create(options)
    World.add(world, this.body)
}

display()
{
if(this.body.bodyA)
{
    var pointA = this.bodyA.position
    var pointB = this.pointB
    line(pointA.x, pointA.y, pointB.x, pointB.y)
}
}
attach(body)
{
    this.body.bodyA = body
}

fly()
{
    this.body.bodyA = null
}
}
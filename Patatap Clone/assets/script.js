var path; 

for (let i = 0; i < 1000; i+=20)
{
    for (let j = 0; j < 1000; j+=20)
    {
        path = new Path.Circle(new Point(i, j), 30);
        path.strokeColor = 'white';
        path.fillColor = "white";
    }
}



function getRandomInt(min, max)//функция random
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var mass = [1, 2, 3, 4, 5];
var nmass = [];
var b=0;

function shuf(mass) { //функция shuffle
  if (mass.length!= 1) { 
	
        b=getRandomInt(1, mass.length-1);
	b=mass[b];
	for (k in mass)
		{
		if (mass[k]==b)
		    mass[k]=mass[0];			
		}

	nmass.push(b);
	mass.splice(0, 1);
    return shuf(mass);
  } else {
	nmass.push(mass[0]);	
    return nmass;
  }
}
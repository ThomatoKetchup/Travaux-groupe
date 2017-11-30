var ChaineAleatoire = function ChaineAleatoire(min,max)
{
	
	var ListeCar = new Array();
	//var ListeCar = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9");
	for(i=21;i<127;i++){
		ListeCar.push(String.fromCharCode(i));
	}
	var Chaine ='';
	var nbcar = getRandomLength(min,max);
	for(i = 0; i < nbcar; i++)
	{
		Chaine = Chaine + ListeCar[Math.floor(Math.random()*ListeCar.length)];
	}
	return Chaine;
}

var Bool = function Bool()
{
	var ListeCar = new Array("Oui","Non");
	var Chaine = '';
	Chaine = ListeCar[Math.floor(Math.random()*ListeCar.length)];
	return Chaine;
}

var Nombre = function Nombre(nbcar)
{
	var ListeCar = new Array("0","1","2","3","4","5","6","7","8","9");
	var Chaine ='';
	for(i = 0; i < nbcar; i++)
	{
		Chaine = Chaine + ListeCar[Math.floor(Math.random()*ListeCar.length)];
	}
	return Chaine;
}


function getRandomLength(min, max) {
  return (Math.random() * (max - min) + min);
}


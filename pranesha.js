
/* -------- Added by Pranesha Bunsee ------- */
// wikipedia says that ninjas have disguises to blend into the community while doing their work


Ninja.prototype.disguise = function() { 
  if ( this.getStars() > 4 ) {
    this.disguise = "priest";
  } 
  else {
    this.disguise = "fortune teller";
  }
}

//Give ninja3 instance 5 stars, rides a horse and wears black
var ninja3 = new MountedNinja()
ninja3.stars = 5;
ninja3.ridesHorse = true;
ninja3.wearsBlack = true;

// create an object for famous ninjas
function famousNinja(firstName, lastName, clan){
	console.log(this);
	console.log(arguments);
	//setup inheritance of Ninja for famousNinja
	var famousNinjaBeingBuilt = this;
	Ninja.apply(famousNinjaBeingBuilt, arguments);
    // or you could simply do
    //Ninja.apply(this, arguments);

	this.firstName = firstName;
	this.lastName = lastName;
	this.clan = clan;
}

// Instantiate an instance of famousNinja object and inherit properties of Ninja object
famousNinja.prototype = new Ninja();
 var PraneshaNinja = new famousNinja(5);
 PraneshaNinja.firstName = "Pranesha";
 

// wikipedia says that ninjas have tools like ropes, grappling hooks, collapsible ladders, etc.
// create properties on famousNinja to be able to have info about what tools each famous ninja specialized in.
famousNinja.prototype.tool = function(){
	if ( this.lastName == "Goemon" ) {
		this.tool = "poison";
	} 
	else if (this.lastName == "Kumawakamaru" ) 
	{
		this.tool = "sword";
	} 
	else if ( this.lastName = "Hattori" ) 
	{
		this.tool = "ropes";
	}
	else
	{
		this.tool = "none";
	}
}

// create an instance of famousNinja
var ninja4 = famousNinja();
ninja4.firstName = "Ishikawa";
ninja4.lastName = "Goemon";
ninja4.clan = "some clan name";

// jquery stuff
$(document).ready(function(){
	console.log("ready!");
});





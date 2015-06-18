
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
	this.firstName = firstName;
	this.lastName = lastName;
	this.clan = clan;
}

// Instantiate an instance of famousNinja object and inherit properties of Ninja object
famousNinja.prototype = new Ninja(8);


// wikipedia says that ninjas have tools like ropes, grappling hooks, collapsible ladders, etc.
// create properties on famousNinja to be able to have info about what tools each famous ninja specialized in.
famousNinja.prototype.tool = function(){
	if ( this.lastName == "Goemon" ) {
		this.tool = "poison";
	} elsif (this.lastName == "Kumawakamaru" ) {
		this.tool = "sword";
	} else {
		this.tool = "none";
	}
}

// create an instance of famousNinja
var ninja4 = famousNinja("Ishikawa", "Goemon", "some clan name" );





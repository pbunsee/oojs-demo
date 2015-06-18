function Ninja(stars){

  this.stars = stars;

  this.getStars = function(){
    return this.stars;
  };

  hasSword: true;

  this.throwStar = function() {
    if (this.getStars() > 0){
      console.log("Threw a Star");
      this.stars--;
    } else {
      console.log("No more stars! Vanish!");
    }
  };
}

var ninja1 = new Ninja(4);
var ninja2 = new Ninja(1);

//this will not alter ninja1
ninja2.hasMask = true;

//this will alter both ninjas and all future ninjas
Ninja.prototype.wearsBlack = true;

function MountedNinja(){
  this.ridesHorse = true;
}

// Set MountedNinja to inherit properties of Ninja in the following way:
MountedNinja.prototype = new Ninja(4);

rider = new MountedNinja();


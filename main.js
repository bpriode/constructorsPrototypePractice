//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, owner, status, color, hungry) {
  this.name = name;
  this.owner = owner;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
}

let sadie = new Dog('Sadie', 'Mason', 'normal', 'black', false )

let moonshine = new Dog('Moonshine',undefined, undefined, undefined, true)

let atticus = new Dog('Atticus', undefined, undefined, undefined, )

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name;
  this.cool = cool;
  this.pet = function(pet) {
      pet.status = 'happy'
  }
  this.feed = function(pet) {
      pet.hungry = false
  }
}

let mason = new Human('Mason', false)

let julia = new Human('Julia', true)

// Instances of Human
// Needed: mason, julia

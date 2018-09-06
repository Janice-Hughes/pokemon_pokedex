// background placeholder
// referenced https://codepen.io/quasimondo/pen/lDdrF
var colors = new Array(
[62,35,255],
[60,255,60],
[255,35,98],
[45,175,230],
[255,0,255],
[255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
 background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

step += gradientSpeed;
if ( step >= 1 )
{
step %= 1;
colorIndices[0] = colorIndices[1];
colorIndices[2] = colorIndices[3];

//pick two new target color indices
//do not pick the same as the current one
colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

}
}

setInterval(updateGradient,10);

// sidenav
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.sidenav');
var instances = M.Sidenav.init(elems,{


});
});
// modal
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.modal');
var instances = M.Modal.init(elems, {

});
});

document.getElementById('larvitar').addEventListener('click', e=>{
var instance = M.Modal.getInstance(document.getElementById('modal4'));
instance.open()
console.log('one')
})

document.getElementById('bulbasaur').addEventListener('click', e=>{
var instance = M.Modal.getInstance(document.getElementById('modal2'));
instance.open()
console.log('two')
})

document.getElementById('cyndaquil').addEventListener('click', e=>{
var instance = M.Modal.getInstance(document.getElementById('modal3'));
instance.open()
console.log('three')
})

// // the meat of the whole pokedex sandwich


class Trainer {
constructor(name, gender, hometown){ 
this.name = name;
this.gender = gender;
this.hometown = hometown;
this.pokemon = [];
}

all() {
  return this.pokemon
}

add(pokemon) {
this.pokemon.push(pokemon)
}

get(name) {
return this.pokemon.find((element) => {
return element.name == name
})
}

}

// const terra = new Trainer("Terra", "female", "Pokemon trainer");

// console.log(terra);

class Pokeball {
constructor() {
this.all = []
}

add(pokemon) {
this.all.push(pokemon)
}

get(name) {
return this.all.find((element) => {
return element.name = name
})
}

}
const pokeball = new Pokeball();
console.log(pokeball);

class Pokemon {

constructor(data, info) {

this.id = data.id;
this.name = data.name;
this.weight = data.weight;
this.height = data.height;
this.type = data.types[0].type.name;
this.hp = data.stats[5].base_stat;
this.attack = data.stats[4].base_stat;
this.defense = data.stats[3].base_stat;
this.abilities = [];
this.info = info;

for (let i = 0; i < data.abilities.length; i++) {
  this.abilities.push(data.abilities[i].ability.name)
}

}
}

let para = document.getElementById("info1");

function terrasPokemon(pokemon) {
  if (pokemon.name === "cyndaquil") {
    para = document.getElementById("info2");
  } else if (pokemon.name === "larvitar") {
    para = document.getElementById("info3");
  }

  para.innerHTML = (`id: ${ pokemon.id }<br>
  name: ${ pokemon.name }<br>
  weight: ${ pokemon.weight }lbs<br>
  height: ${ pokemon.height }<br>
  type: ${ pokemon.type }<br>
  hp: ${ pokemon.hp }<br>
  attack: ${ pokemon.attack }<br>
  defense: ${ pokemon.defense }<br>
  abilities: ${ pokemon.abilities }`);
}



const chooseBulbasaur = axios.get("https://pokeapi.co/api/v2/pokemon/1/");
const chooseCyndaquil = axios.get("https://pokeapi.co/api/v2/pokemon/155/");
const chooseLarvitar = axios.get("https://pokeapi.co/api/v2/pokemon/246/");

axios.all([chooseBulbasaur, chooseCyndaquil, chooseLarvitar])

.then(catchem => {

const poke1 = catchem[0].data;
const poke2 = catchem[1].data;
const poke3 = catchem[2].data;

console.log(poke1);

let monstername1= poke1.name;

console.log(monstername1)

let monstername1hp= poke1.stats[5].base_stat; 

console.log(monstername1hp)

let monstername1attack= poke1.stats[4].base_stat;

console.log(monstername1attack)

let monstername1defense= poke1.stats[3].base_stat;

console.log(monstername1defense)



M.AutoInit();

const terra = new Trainer("Terra", "female", "Pokemon trainer");

let bulbasaurInfo = "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."

let bulbasaur = new Pokemon(poke1, bulbasaurInfo);

console.log(bulbasaur);
pokeball.add(bulbasaur);
terra.add(bulbasaur);
terrasPokemon(bulbasaur);

let cyndaquilInfo = "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion."

let cyndaquil = new Pokemon(poke2, cyndaquilInfo);
console.log(cyndaquil);
pokeball.add(cyndaquil);
terra.add(cyndaquil);
terrasPokemon(cyndaquil);

let larvitarInfo = "Larvitar is born deep under the ground. To come up to the surface, this Pokémon must eat its way through the soil above. Until it does so, Larvitar cannot see its parents."

let larvitar = new Pokemon(poke3, larvitarInfo);
console.log(larvitar);
pokeball.add(larvitar);
terra.add(larvitar);
terrasPokemon(larvitar);

console.log(pokeball);
console.log(terra);

console.log(terra.get("bulbasaur"));



}).catch((error) => {
console.log(error);
})

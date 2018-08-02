// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return ["Broom", ...kittens];
}

function prependKitten(name) {
  
}

function removeLastKitten() {
  return kittens.slice(0, array.length - 1);
} 

function removeFirstKitten() {
  return kittens.slice(1);
}
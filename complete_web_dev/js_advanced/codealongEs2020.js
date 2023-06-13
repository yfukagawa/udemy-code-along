////
//BigInt - let the integer value go beyond the MAX_SAFE_INTEGER
typeof 123324n;

// OPTIONAL CHAINING OPERATOR = "?."
let will_pokemon_user = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}
let yoshi_pokemon_user = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 10,
        power: 'ligtning'
    }
}

let weight = will_pokemon_user.pikachu.weight;
console.log('Pikachu weighs ' + weight + 'kg');

let raichu_weight = will_pokemon_user.pikachu.weight;
console.log('Raichu weighs ' + weight + 'kg');// this would pull in wrong value or not work;

let newWeight = yoshi_pokemon_user?.pikachu?.weight;
console.log(newWeight);
let newWeight2 = yoshi_pokemon_user?.raichu?.weight;
console.log(newWeight2);

// NULLISH COALESCING PERATOR = "??"
let power = yoshi_pokemon_user?.raichu?.power || 'OR: no power';
console.log(power); // null, empty string, or non string value would return 'no power'

power = yoshi_pokemon_user?.raichu?.power ?? '??: no power';
console.log(power); //

power = yoshi_pokemon_user?.raichu?.power ? yoshi_pokemon_user?.raichu?.power : '??: no power';
var mongoose = require('mongoose');

var schema = mongoose.Schema({
	id:{
		type: String,
	},
	description:{
		type: String,
		required: true
	},
	steps:{
		type: Array,
		required: true
	},
	rating:{
		type: String,
	},
	state:{
		type: String,
	},
	created_by:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	},
	completed_date:{
		type: Date,
	},
	removed_date:{
		type: Date,
	}
});

var Pokemon = module.exports = mongoose.model('Pokemon', schema);

module.exports.getAllPokemons = function(callback, limit){
	Pokemon.find(callback).limit(limit);
}

module.exports.getPokemonById = function(pokemonId, callback){
	Pokemon.findById(pokemonId, callback);
}

module.exports.addPokemon = function(pokemon, callback){	
	var json = {
		description: pokemon.description,
        steps: pokemon.steps,
        rating: pokemon.rating,
		state: "inprogress",
	}
	pokemon.create(json, callback);
}


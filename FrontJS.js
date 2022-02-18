let searchInput = document.querySelector('input')
let searchButton = document.getElementById('submit')
let search = searchInput.value
let color ="";

var windowObjectReference;
$("#Home").on('click', function(){
    window.location.reload(false);
})

$("#Surprise").on('click', function (){
    console.log("connected")
    windowObjectReference = window.open(
        "https://cdn.dribbble.com/users/985548/screenshots/3419574/dragonite.gif",
        "Dragonite",
        "left=100,top=100,width=320,height=320")
});
$("#Pokedex").on('click', function (){
    console.log("connected")
    windowObjectReference = window.open(
        "https://www.pokemon.com/us/")
});

$("#Contact").on('click', function (){
    windowObjectReference = window.open(
        "https://www.linkedin.com/in/natanrinconluna/")
});

$("#submit").on('click', function (){
    $.get(`https://pokeapi.co/api/v2/pokemon/${searchInput.value.toLowerCase()}`, (data) => {
        let PokemonName = data['species']['name']
        let PokemonID = data['id']   
        let PokemonType0 = data['types']['0']['type']['name']
        let Pokemondata = data['types']
        let PokeNameLink = PokemonName.toString().toLowerCase
        let gen = "";
        
        console.log(data)
        console.log(PokemonID)
        console.log(PokemonName)
        console.log(PokemonType0)
        console.log(Pokemondata.length)
    
        if(PokemonID <= 151){
        gen ='gen1';
        }
        if( 251 >= PokemonID && PokemonID > 151){
        gen ='gen2';
        }
        //251
        if(386 >= PokemonID && PokemonID > 251){
        gen ='gen3';
        }
        if(493 >= PokemonID && PokemonID > 386){
        gen ='gen4';
        }
        if(649 >= PokemonID && PokemonID > 493){
        gen ='gen5';
        }
        if(721 >= PokemonID && PokemonID > 649){
        gen ='gen6';
        }
        if(809 >= PokemonID && PokemonID > 649){
        gen ='gen7';
        }
        if(905 >= PokemonID && PokemonID > 809){
        gen ='gen8';
        }
        
        if(data['types'].length === 2 ){
        let PokemonType1 = data['types']['1']['type']['name']
        $("#Pokemon-Name").html(`${PokemonName.toUpperCase()}`)
        $("#Pokemon-Number").html(`Pokemon Id#${PokemonID}`)
        $("#Pokemon-Type0").html(`${PokemonType0}`)
        $("#Pokemon-Type1").html(`${PokemonType1}`)
        $(".card-image").attr("src", `https://github.com/orbitalbitmap/pokemon-ui/blob/master/public/images/${gen}/${PokemonName}.png?raw=true`)
        }

        $("#Pokemon-Name").html(`${PokemonName.toUpperCase()}`)
        $("#Pokemon-Number").html(`Pokemon Id# ${PokemonID}`)
        $("#Pokemon-Type0").html(`${PokemonType0}`)
        $(".card-image").attr("src", `https://github.com/orbitalbitmap/pokemon-ui/blob/master/public/images/${gen}/${PokemonName}.png?raw=true`)

    });
});


const baseUrl =  "https://pokeapi.co/api/v2/pokemon/";
const pokemon = document.getElementById("pokeName");
const buttonSearch = document.getElementById("search");
const buttonDelete = document.getElementById("delete");
const appNote = document.getElementById("app");

buttonSearch.addEventListener("click" , insertPokemon);
buttonSearch.addEventListener("touchstart" , insertPokemon);

buttonDelete.addEventListener("click", deletePokemon);
buttonDelete.addEventListener("touchstart" , deletePokemon);

function insertPokemon(){
window.fetch(`${baseUrl}${pokemon.value.toLowerCase()}`)
.then(response =>{
    if(
        response.status==404
    ){alert("Pokemon no disponible.Intenta con otro")
} else{
    return response.json()
} 

}
)
.then(responseJSON =>{
    const allItems=[]

    const result = []

    for (let pokemonInfo in responseJSON){
        result.push([pokemonInfo , responseJSON[pokemonInfo]])

    }
    console.table(result);

    const pokemonImage = document.createElement("img")
    pokemonImage.src= result[14][1].front_default

    const pokemonName = document.createElement("h2"
    )
    pokemonName.innerText= `Name:${result[10][1] }- ID: ${result[6][1]}`

    const pokemonType = document.createElement('h2');
    pokemonType.innerText = `Type: ${result[16][1][0].type.name}`;

    const pokemonWh = document.createElement('h2');
    pokemonWh.innerText = `Height: ${ result[4][1] }-Weight${ result[17][1] }`;



    const container = document.createElement("div")
    container.append(pokemonImage, pokemonName, pokemonType,pokemonWh)

    allItems.push(container)

    appNote.append(...allItems)
})
};

function deletePokemon(){
let allPokemon = appNote.childNodes
allPokemon = Array.from(allPokemon)

allPokemon.forEach(pokemon =>{
    pokemon.remove(pokemon)
})
};
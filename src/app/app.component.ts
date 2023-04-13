import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

const ERROR_POKEMON_NOT_FOUND = "Le Pokémon demandé n'existe pas.";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );

    if (pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.error(ERROR_POKEMON_NOT_FOUND);
      this.pokemonSelected = pokemon;
    }
  }
}

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <h1>Welcome to {{ pokemons[1] }}!</h1>`,
})
export class AppComponent {
  title = "application de pokémons";
  pokemons = ["Bulbizarre", "Salamèche", "Carapuce"];
}

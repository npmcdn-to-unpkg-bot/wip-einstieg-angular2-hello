import {Component} from "@angular/core";

@Component({
  selector: "app",
  providers: [],
  template: "Hallo {{name}}",
  directives: [],
})
export class App {
    private name: string = "Jan";
}

import {Component} from "@angular/core";

@Component({
  selector: "app",
  providers: [],
  templateUrl: "src/app.component.html",
  directives: [],
})
export class App {
  private jan: string = "jan";
  private name: string = this.jan;

  private clickTim() {
    this.name = "tim";
  }
}

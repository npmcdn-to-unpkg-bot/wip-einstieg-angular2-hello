import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  private jan: string = "Jan";
  private name: string = this.jan;

  private clickTim() {
    this.name = "Tim";
  }
}

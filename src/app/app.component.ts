import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  navFeature:string = "recipe";
  selectNav(selectedFeature:string){
this.navFeature = selectedFeature;
  }
}

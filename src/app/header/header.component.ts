import { Component, Output,EventEmitter} from '@angular/core';


@Component({
selector:"app-header",
templateUrl:"./header.component.html"
})
export class HeaderComponent {
@Output('featureSel') selectedFeature = new EventEmitter<string>();
    onselect(feature:string){
   this.selectedFeature.emit(feature);
    }
}
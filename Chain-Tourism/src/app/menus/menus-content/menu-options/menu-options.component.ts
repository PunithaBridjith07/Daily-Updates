import { Component, Input } from '@angular/core';

@Component({
  selector: 'chainTour-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.css']
})
export class MenuOptionsComponent {
  @Input() name!:string;
  @Input() about!:string;
  @Input() image!:string;

}

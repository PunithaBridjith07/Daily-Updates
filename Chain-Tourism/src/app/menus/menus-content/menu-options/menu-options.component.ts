import { Component, Input } from '@angular/core';

@Component({
  selector: 'li[menuOptions]',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.css'],
})
export class MenuOptionsComponent {
  @Input() name!: string;
  @Input() about!: string;
  @Input() image!: string;
}

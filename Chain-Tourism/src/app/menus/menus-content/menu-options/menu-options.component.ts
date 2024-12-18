import { Component, inject, Input } from '@angular/core';
import { MainDataServiceService } from 'src/app/main/main-data-service.service';

@Component({
  selector: 'li[menuOptions]',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.css'],
})
export class MenuOptionsComponent {
  private mainDataService = inject(MainDataServiceService);

  @Input() name!: string;
  @Input() about!: string;
  @Input() image!: string;

  selectStayType(name: string) {
    this.mainDataService.onSelectStayType(name)
  }
}

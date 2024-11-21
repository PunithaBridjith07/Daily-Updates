import { NgModule } from '@angular/core';
import { MenusComponent } from './menus.component';
import { CommonModule } from '@angular/common';
import { MenusContentModule } from './menus-content/menus-content.module';

@NgModule({
  declarations: [MenusComponent],
  exports: [MenusComponent],
  imports: [CommonModule, MenusContentModule],
})
export class MenusModule {}

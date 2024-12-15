import { NgModule } from '@angular/core';
import { MenusComponent } from './menus.component';
import { CommonModule } from '@angular/common';
import { MenusContentModule } from './menus-content/menus-content.module';
import { MenuOptionsModule } from './menus-content/menu-options/menu-options.module';

@NgModule({
  declarations: [MenusComponent],
  exports: [MenusComponent],
  imports: [CommonModule, MenusContentModule, MenuOptionsModule],
})
export class MenusModule {}

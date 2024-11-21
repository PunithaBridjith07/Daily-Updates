import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusContentComponent } from './menus-content.component';
import { MenuOptionsModule } from './menu-options/menu-options.module';

@NgModule({
  declarations: [MenusContentComponent],
  exports: [MenusContentComponent],
  imports: [CommonModule, MenuOptionsModule],
})
export class MenusContentModule {}

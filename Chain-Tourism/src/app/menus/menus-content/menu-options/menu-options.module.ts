import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOptionsComponent } from './menu-options.component';

@NgModule({
  declarations: [MenuOptionsComponent],
  exports: [MenuOptionsComponent],
  imports: [CommonModule],
})
export class MenuOptionsModule {}

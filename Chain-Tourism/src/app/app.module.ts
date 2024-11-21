import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenusModule } from './menus/menus.module';
import { MainModule } from './main/main.module';
@NgModule({
  declarations: [AppComponent, FooterComponent],
  bootstrap: [AppComponent],
  providers: [],
  imports: [BrowserModule, MenusModule, MainModule],
})
export class AppModule {}

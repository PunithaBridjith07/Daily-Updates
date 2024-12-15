import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenusModule } from './menus/menus.module';
import { MainModule } from './main/main.module';
import { AuthenSharedModule } from './authen-shared/authen-shared.module';
@NgModule({
  declarations: [AppComponent, FooterComponent],
  bootstrap: [AppComponent],
  providers: [],
  imports: [
    BrowserModule,
    MenusModule,
    MainModule,
    HttpClientModule,
    AuthenSharedModule,
  ],
})
export class AppModule {}

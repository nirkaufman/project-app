import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UsersAppModule} from './users-app/users-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UsersAppModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

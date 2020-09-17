import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {routes} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {UsersModule} from './users/users.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    UsersModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule,
    SharedModule],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}

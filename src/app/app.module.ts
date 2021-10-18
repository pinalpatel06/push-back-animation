import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { AsideToggleDirective } from './directives/aside-toggle.directive';
import { SubChildComponent } from './components/sub-child/sub-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    AsideToggleDirective,
    SubChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

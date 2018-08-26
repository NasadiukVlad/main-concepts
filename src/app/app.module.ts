import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstChildComponent } from './components/first-child/first-child.component';
import { SecondChildComponent } from './components/second-child/second-child.component';
import { ThirdChildComponent } from './components/third-child/third-child.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import {FormsModule} from '@angular/forms';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent,
    SecondChildComponent,
    ThirdChildComponent,
    DataBindingComponent,
    LifecycleHooksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

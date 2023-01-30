import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExampleComponent } from './example/example.component';
import { PipePipe } from './pipe.pipe';
import { LogicComponent } from './logic/logic.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
      ExampleComponent,
      PipePipe,
      LogicComponent,
      InputComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

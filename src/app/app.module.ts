import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientesTablaComponent } from './clientes-tabla/clientes-tabla.component';
import { PruebitaComponent } from './pruebita/pruebita.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesTablaComponent,
    PruebitaComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

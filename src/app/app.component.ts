import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-angular';

  public contador: number = 10;

  public incrementar(): void {
    this.contador++;
  }

  public decrementar(): void {
    this.contador--;
  }

  public onChangeContador(contador: number): void {
    this.contador = contador;
  }
}

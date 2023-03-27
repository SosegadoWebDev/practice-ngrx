import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() contador!: number;
  @Output() emitCambio: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public multiplicar(): void {
    this.contador *= 2;
    this.emitCambio.emit(this.contador);
  }

  public dividir(): void {
    this.contador /= 2;
    this.emitCambio.emit(this.contador);
  }

  resetNieto(nuevContador: number) {
    this.contador = nuevContador;
    this.emitCambio.emit(this.contador);
  }
}

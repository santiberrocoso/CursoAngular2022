import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro:number;
  nroNULL?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prueba_angular2 ANGULAR';
  public ArregloTarjetas: Tarjeta[]=[]

  ngOnInit(): void { // se ejecuta al inicializar la página html
    this.ArregloTarjetas = [
      {titulo:'Video 1', subtitulo: 'Sub 1', nro: 5},
      {titulo:'Video 2', subtitulo: 'Sub 2', nro: 7},
      {titulo:'Video 3', subtitulo: 'Sub 3', nro: 1},
    ]
  }
}

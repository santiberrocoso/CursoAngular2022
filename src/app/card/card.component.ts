import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  public image:string="https://media.istockphoto.com/id/1168945108/es/foto/imagen-de-primer-plano-de-las-manos-masculinas-utilizando-el-tel%C3%A9fono-inteligente-con-el.jpg?s=2048x2048&w=is&k=20&c=pUkkD1MpWXu0tqY8F5VexsgIL8Tjgs3rM8Y99j6S4pI=";
  public Titulo:string ="Curso Angular Interpolacion";
  constructor(){}

  ngOnInit(): void {

  }
}

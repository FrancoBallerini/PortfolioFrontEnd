import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  faPen = faPen;
  FotoPerfil ="";
  title ="Acerca de Mi...";



  constructor() { }

  ngOnInit(): void {
  }

}

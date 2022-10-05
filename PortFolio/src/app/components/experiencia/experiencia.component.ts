import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  faPen = faPen



  LogoDivito = '../assets/IMG/LogoDivito.jpg'
  LogoRAZ = '../assets/IMG/LogoRAZ.png'
  LogoTZ = '../assets/IMG/LogoTZ.png'
  constructor() { }

  ngOnInit(): void {
  }


}

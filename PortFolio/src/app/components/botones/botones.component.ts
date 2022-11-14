import { Component, OnInit } from '@angular/core';
import { faPen, faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
  faPen = faPen;
  faRemove = faRemove;

  constructor() { }

  editar () {}

  delete () {}



  ngOnInit(): void {
  }

}

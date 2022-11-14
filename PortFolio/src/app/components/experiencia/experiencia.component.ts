import { Component, OnInit } from '@angular/core';
import { faPen, faRemove } from '@fortawesome/free-solid-svg-icons';
import { PorfolioService} from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: any;

  faPen = faPen;
  faRemove = faRemove;

  constructor (private datosPorfolio:PorfolioService )
   {


  }


  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.experienciaList=data.experience;
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { PorfolioService} from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  habilidadList:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.habilidadList=data.skill;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faKey, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { PorfolioService} from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  encabezado:any;

  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faUserCircle = faUserCircle;
  faKey = faKey ;


  constructor(private datosPorfolio:PorfolioService) {

  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
     this.encabezado=data;
    });
  }

}

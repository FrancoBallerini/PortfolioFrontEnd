import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faHandScissors } from '@fortawesome/free-solid-svg-icons';






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faUserCircle = faUserCircle;

  itemImageUrl= '../assets/IMG/APLogo.png';

  faHandshake = faHandshake;
  faHandScissors = faHandScissors;

  constructor() { }

  ngOnInit(): void {
  }

}

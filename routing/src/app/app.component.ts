import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-marvel-heros';
  constructor(private router: Router){

  }
  navigateToCat(){
    this.router.navigate(['/cat']);
  }

  navigateToDog(){
    this.router.navigate(['/dog']);
  }

  navigateToHome(){
    this.router.navigate(['']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';

  constructor(private router: Router){

  }

  navigateToAddPictures(){
    this.router.navigate(['/add-pictures']);
  }

  navigateToHome(){
    this.router.navigate(['']);
  }
}

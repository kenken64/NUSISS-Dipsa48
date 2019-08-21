import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Lesson';
  numberOfPeople = 30;
  fruits = [ 'Apple', 'Orange', 'Grape'];
  lengthOfCart = 3;
  isDisabled = false;
  buttonPressed = 'No';


  pressAButton(){
    console.log('press button');
    this.buttonPressed = 'yes !';
  }

  sizeChanged(size){
    console.log('font size > change ' + size);
  }
}

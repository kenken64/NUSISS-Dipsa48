import { Component, OnInit } from '@angular/core';
import { Picture } from '../models/Picture';
import { PicturesService } from '../services/pictures.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-pictures',
  templateUrl: './list-pictures.component.html',
  styleUrls: ['./list-pictures.component.css']
})
export class ListPicturesComponent implements OnInit {
  pictures: Picture[] = []
  constructor(private service: PicturesService,  
    private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.service.getPicturesList()
    .then(result => {
      console.log('result:', result);
      this.pictures = result}
      )
    .catch(error => {
      console.error('error: ', error);
    });
  }

  onDelete(id: string){
    this.service.deletePicture(id)
    .then(result => {
      console.log('result:', result);
      this._snackBar.open("Picture deleted", 'Close', {
        duration: 2000,
      });
      this.router.navigate(['/']);
    })
    .catch(error => {
      console.error('error: ', error);
    });
  }

}

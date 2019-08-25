import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PicturesService } from '../services/pictures.service';
import { Picture } from '../models/Picture';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-pictures',
  templateUrl: './add-pictures.component.html',
  styleUrls: ['./add-pictures.component.css']
})
export class AddPicturesComponent implements OnInit {
  picture: Picture;

  pictureForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
  });

  constructor(private service: PicturesService, 
    private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.pictureForm.value);
    const author = this.pictureForm.value.author;
    const title = this.pictureForm.value.title;
    const description = this.pictureForm.value.description;
    const img = this.pictureForm.value.img;
    
    this.picture = new Picture(author, description, img, title);

    this.service.addPicture(this.picture).then(result => {
      console.info('picture: ', result);
      this.pictureForm.reset();
      
      this._snackBar.open("Picture added", 'Close', {
        duration: 2000,
      });
      this.router.navigate(['/']);
    });
  }

}

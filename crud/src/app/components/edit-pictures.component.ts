import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PicturesService } from '../services/pictures.service';
import { Picture } from '../models/Picture';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-pictures',
  templateUrl: './edit-pictures.component.html',
  styleUrls: ['./edit-pictures.component.css']
})
export class EditPicturesComponent implements OnInit {

  picture$: Observable<Picture>;
  pictureUpd: Picture;
  updateId: string;

  pictureForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
  });

  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router, private service: PicturesService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log("edit picture")
    this.service.getPicture(this.activatedRoute.snapshot.params.id)
      .then(result => {
        console.log(result);
        this.pictureForm.patchValue({
          author: result.author,
          title: result.title,
          description: result.description,
          img: result.img
        });
        this.updateId = result.id;
      })
  }

  onSubmit() {
    console.warn(this.pictureForm.value);
    const author = this.pictureForm.value.author;
    const title = this.pictureForm.value.title;
    const description = this.pictureForm.value.description;
    const img = this.pictureForm.value.img;
    const id = this.updateId;
    console.log(id);
    this.pictureUpd = new Picture(author, description, img, title, id);

    this.service.updatePicture(this.pictureUpd).then(result => {
      console.info('picture: ', result);
      this.pictureForm.reset();
      
      this._snackBar.open("Picture updated", 'Close', {
        duration: 2000,
      });
      this.router.navigate(['/']);
    });
  }

}

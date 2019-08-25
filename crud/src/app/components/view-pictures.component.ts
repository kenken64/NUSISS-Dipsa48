import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PicturesService } from '../services/pictures.service';
import { Picture } from '../models/Picture';

@Component({
  selector: 'app-view-pictures',
  templateUrl: './view-pictures.component.html',
  styleUrls: ['./view-pictures.component.css']
})
export class ViewPicturesComponent implements OnInit {
  picture: Picture;

  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router, private service: PicturesService) { }

  ngOnInit() {
    console.log("view pictures")
    this.service.getPicture(this.activatedRoute.snapshot.params.id)
      .then(result => {
        this.picture = result;
        console.info('picture: ', result)
      });
  }

  onEdit(pictureId: string) {
    console.log("" + pictureId);
    this.router.navigate([`/edit-pictures/${pictureId}`]);
  }

  back() {
    this.router.navigate(['/']);
  }

}

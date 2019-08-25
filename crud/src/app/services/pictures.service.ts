import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse  } from "@angular/common/http";
import { map, flatMap, toArray, tap, catchError,  } from 'rxjs/operators';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Picture } from '../models/Picture';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private http: HttpClient) { }

  getPicturesList(): Promise<Picture[]> {
    const params = new HttpParams()
        
      return (
          this.http.get<Picture[]>(`${environment.api_url}/pictures`, { params })
              .pipe(
                  flatMap(v => v),
                  map((v: any) => {
                      return (<Picture>{ id: v.id, author: v.author });
                  }),
                  toArray()
              )
              .toPromise()
      )
  }

  getPicture(id: number): Promise<Picture> {
    const params = new HttpParams()   
    return (
        this.http.get<Picture>(`${environment.api_url}/pictures/${id}`, { params })
            .pipe(
                map((v: any) => {
                    return (<Picture>{
                        id: v.id,
                        author: v.author,
                        description: v.description,
                        img: v.img,
                        title: v.title
                    })
                })
            )
            .toPromise()
    );
  }

  addPicture(picture: Picture){
    console.log("add picture" + picture);
    return (
      this.http.post<Picture>(`${environment.api_url}/pictures`, picture).pipe(
        catchError(this.handleError)
      ).toPromise()
    );
  }

  updatePicture(picture: Picture){
    console.log("update picture" + picture);
    return (
      this.http.put<Picture>(`${environment.api_url}/pictures/${picture.id}`, picture).pipe(
        catchError(this.handleError)
      ).toPromise()
    );
  }

  deletePicture(pictureId: string){
    console.log("delete picture" + pictureId);
    return (
      this.http.delete<Picture>(`${environment.api_url}/pictures/${pictureId}`).pipe(
        catchError(this.handleError)
      ).toPromise()
    );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPicturesComponent } from './components/list-pictures.component';
import { AddPicturesComponent } from './components/add-pictures.component';
import { EditPicturesComponent } from './components/edit-pictures.component';
import { ViewPicturesComponent } from './components/view-pictures.component';

const routes: Routes = [
    { path: "", component: ListPicturesComponent },
    { path: "add-pictures", component: AddPicturesComponent },
    { path: "edit-pictures/:id", component: EditPicturesComponent },
    { path: 'view-pictures/:id', component: ViewPicturesComponent },
    { path: "**", redirectTo: "/", pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

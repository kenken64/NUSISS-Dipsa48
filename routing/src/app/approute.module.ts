import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from "./components/hero-list.component";
import { CharacterComponent } from "./components/character.component";
import { CatComponent } from './components/cat.component';
import { DogComponent } from './components/dog.component';

const ROUTES: Routes = [
    { path: "", component: HeroListComponent },
    { path: "list", component: HeroListComponent },
    { path: "character/:id", component: CharacterComponent },
    { path: 'cat', component: CatComponent },
    { path: 'dog', component: DogComponent },
    { path: "**", redirectTo: "/", pathMatch: 'full' }
]

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRouteModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';


const routes: Routes = [{
  path: '', redirectTo: '/search', pathMatch: 'full'
},
{ path: 'search', component: SearchPageComponent },
{ path: 'add', component: AddEditComponent },
{ path: 'edit', component: AddEditComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { WildcardComponent } from './wildcard/wildcard.component';
const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : '',
    redirectTo : 'home', pathMatch : 'full'
  },
  {
    path : 'about',
    component : AboutComponent,
  },
  {
    path : 'services',
    component : ServicesComponent,
  },
  {
    path : 'contact',
    component : ContactComponent,
  },
  {
    path :'**',
    component : WildcardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

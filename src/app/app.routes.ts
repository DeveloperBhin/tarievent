import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { RegistrationComponent } from './component/registration/registration';

export const routes: Routes = [
  {
    path: '',
    component: Landing
  },
  
  { path: 'register', component: RegistrationComponent },
      { path: '**', redirectTo: '' }

 



];
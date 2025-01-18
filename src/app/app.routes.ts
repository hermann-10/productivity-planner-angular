import { Routes } from '@angular/router';
import { HomePageComponent } from './visitor/home/home.page.component';
import { RegisterComponent } from './visitor/register/register.component';
import { LoginComponent } from './visitor/login/login.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent, title: 'Productivity Planner' },
    { path: 'register', component: RegisterComponent, title: 'Register' },
    { path: 'login', component: LoginComponent, title: 'Login' },
];

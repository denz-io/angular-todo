import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { DashboardPage } from './pages/dashboard/dashboard.component';
import { HomePage } from './pages/home/home.component';
import { InvalidRoutePage } from './pages/invalid-route/invalid-route.component';
import { LoginPage } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPage },
  { path: 'login', component: LoginPage },
  { path: '**', component: InvalidRoutePage },
];

@NgModule({
  declarations: [HomePage, DashboardPage, LoginPage, InvalidRoutePage],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

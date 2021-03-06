import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TuiInputModule, TuiInputPasswordModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiErrorModule, TuiNotificationModule, TuiSvgModule } from '@taiga-ui/core';

import { HomeComponent } from './container/home.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    HomeComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    TuiIslandModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiErrorModule,
    TuiNotificationModule,
    TuiSvgModule
  ]
})
export class HomeModule { }

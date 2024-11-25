import { NgModule } from '@angular/core';
import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HeroDetailComponent} from 'src/app/hero-detail/hero-detail.component';
import {HeroSearchComponent} from 'src/app/hero-search/hero-search.component';
import {HeroService} from 'src/app/hero.service';
import {MessageService} from 'src/app/message.service';

@NgModule({
  declarations: [
    EnviromentComponent,
    HeroDetailComponent,
    HeroSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    EnviromentComponent,
  ],
  providers: [
    HeroService,
    MessageService,
  ],
  bootstrap: [
  ]
})
export class EnviromentModule { }

import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { Sherlock } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {NavigationComponent} from './navigation/navigation.component';
import {CollectorComponent} from './collector/collector.component';
import {RatingComponent} from './rating/rating.component';

@NgModule({
  declarations: [
    Sherlock,
    NavigationComponent,
    CollectorComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [ Sherlock ]
})
export class AppModule {}

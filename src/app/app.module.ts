import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { UsersModule } from './users/users.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { CircuitsModule } from './circuits/circuits.module';
import { DriversModule } from './drivers/drivers.module';
import { RankingsModule } from './rankings/rankings.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfrastructureModule,
    UsersModule,
    HttpClientModule,
    NoopAnimationsModule,
    CommonModule,
    RouterModule,
    HomeModule,
    CircuitsModule,
    DriversModule,
    RankingsModule,
    CommonModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

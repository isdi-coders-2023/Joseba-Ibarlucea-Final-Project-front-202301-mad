import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitDetailComponent } from './circuits/circuit-detail/circuit-detail.component';
import { CircuitsCardComponent } from './circuits/circuits-card/circuits-card.component';
import { DriverDetailComponent } from './drivers/driver-detail/driver-detail.component';
import { DriversCardsComponent } from './drivers/drivers-cards/drivers-cards.component';
import { HomeComponent } from './home/home/home.component';
import { RankingsCardsComponent } from './rankings/rankings-cards/rankings-cards.component';
import { CardsComponent } from './teams/cards/cards.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teams', component: CardsComponent },
  { path: 'teams/:id', component: TeamDetailsComponent },
  { path: 'circuits', component: CircuitsCardComponent },
  { path: 'circuits/:id', component: CircuitDetailComponent },
  { path: 'drivers', component: DriversCardsComponent },
  { path: 'drivers/:id', component: DriverDetailComponent },
  { path: 'rankings', component: RankingsCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

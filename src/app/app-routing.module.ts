import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitDetailComponent } from './circuits/circuit-detail/circuit-detail.component';
import { CircuitsCardComponent } from './circuits/circuits-card/circuits-card.component';
import { AddUpdateDriverComponent } from './drivers/add-update-driver/add-update-driver.component';
import { DriverDetailComponent } from './drivers/driver-detail/driver-detail.component';
import { DriversCardsComponent } from './drivers/drivers-cards/drivers-cards.component';
import { HomeComponent } from './home/home/home.component';
import { RankingsCardsComponent } from './rankings/rankings-cards/rankings-cards.component';
import { AboutComponent } from './statics/about/about.component';
import { ContactComponent } from './statics/contact/contact.component';
import { CopyrightComponent } from './statics/copyright/copyright.component';
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
  { path: 'drivers/add', component: AddUpdateDriverComponent },
  { path: 'drivers/update/:id', component: AddUpdateDriverComponent },
  { path: 'drivers/:id', component: DriverDetailComponent },
  { path: 'rankings', component: RankingsCardsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'copyrights', component: CopyrightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

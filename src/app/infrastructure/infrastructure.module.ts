import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { TeamsModule } from '../teams/teams.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LayoutComponent,
  ],
  exports: [LayoutComponent],
  imports: [CommonModule, RouterModule, TeamsModule],
})
export class InfrastructureModule {}

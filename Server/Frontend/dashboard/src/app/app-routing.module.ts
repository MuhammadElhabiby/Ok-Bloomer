import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ChartComponent } from './components/chart/chart.component';
import { PreseteditorComponent } from './components/preseteditor/preseteditor.component';
import { TimelapsComponent } from './components/timelaps/timelaps.component';
import { AddBoxComponent } from './components/header/box-selector/add-box/add-box.component';
import { GlossarplantsComponent } from './components/glossarplants/glossarplants.component';
import { ChiliComponent } from './components/glossarplants/chili/chili.component';
import { AuthGuard } from './components/auth/signup/auth.guard';
import { SpidermitesComponent } from './pestglossary/spidermites/spidermites.component';
import { PestglossaryComponent } from './pestglossary/pestglossary.component';
import { ThripsComponent } from './pestglossary/thrips/thrips.component';
import { WhitefliesComponent } from './pestglossary/whiteflies/whiteflies.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent, },
  {path: 'signup' , component: SignupComponent},
  {path: 'charts', component: ChartComponent},
  {path: 'preseteditor', component: PreseteditorComponent, canActivate:[AuthGuard]},
  {path: 'timelaps', component: TimelapsComponent},
  {path: 'addBox', component: AddBoxComponent},
  {path: 'glossarplants', component: GlossarplantsComponent},
  {path: 'info/chili', component: ChiliComponent},
  {path: 'pestglossary', component: PestglossaryComponent},
  {path: 'info/spidermites', component: SpidermitesComponent},
  {path: 'info/thrips', component: ThripsComponent},
  {path: 'info/whiteflies', component: WhitefliesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {

 }

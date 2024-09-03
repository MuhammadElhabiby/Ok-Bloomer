import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ChartComponent } from './components/chart/chart.component';
import { PreseteditorComponent } from './components/preseteditor/preseteditor.component';
import { TimelapsComponent } from './components/timelaps/timelaps.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartTempComponent } from './components/chart/chart-temp/chart-temp.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { BoxSelectorComponent } from './components/header/box-selector/box-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { AddBoxComponent } from './components/header/box-selector/add-box/add-box.component';
import { BoxComponent } from './components/header/box/box.component';
import { AuthInterceptor } from './components/auth/signup/auth.interceptor';
import { GlossarplantsComponent } from './components/glossarplants/glossarplants.component';
import { ChiliComponent } from './components/glossarplants/chili/chili.component';
import { InfoComponent } from './components/sidenav/info/info.component';
import { ChartTdsComponent } from './components/chart/chart-tds/chart-tds.component';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { PotatoComponent } from './components/glossarplants/potato/potato.component';
import { BasilComponent } from './components/glossarplants/basil/basil.component';
import { SucchiniComponent } from './components/glossarplants/succhini/succhini.component';
import { PapricaComponent } from './components/glossarplants/paprica/paprica.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ChartHumidityComponent } from './components/chart/chart-humidity/chart-humidity.component';
import { PreseteeditorAlarmComponent } from './components/preseteditor/preseteeditor-alarm/preseteeditor-alarm.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PestglossaryComponent } from './pestglossary/pestglossary.component';
import { SpidermitesComponent } from './pestglossary/spidermites/spidermites.component';
import { ThripsComponent } from './pestglossary/thrips/thrips.component';
import { WhitefliesComponent } from './pestglossary/whiteflies/whiteflies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent, 
    SignupComponent, 
    SidenavComponent, 
    ChartComponent, 
    PreseteditorComponent, 
    TimelapsComponent, 
    ChartTempComponent,
    BoxSelectorComponent, 
    AddBoxComponent, 
    BoxComponent, 
    GlossarplantsComponent, 
    ChiliComponent, 
    InfoComponent, 
    ChartTdsComponent, 
    PotatoComponent, 
    BasilComponent, 
    SucchiniComponent, 
    PapricaComponent, 
    ChartHumidityComponent, 
    PreseteeditorAlarmComponent, 
    PestglossaryComponent, 
    SpidermitesComponent, 
    ThripsComponent, 
    WhitefliesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    NgChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatExpansionModule,
    NgxSliderModule,
    MatCheckboxModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: LocationStrategy, useClass:HashLocationStrategy},
    {provide: DatePipe}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

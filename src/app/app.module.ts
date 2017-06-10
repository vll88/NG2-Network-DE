import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import {GoogleMapsNg2Module} from 'google-maps-ng2';
import{} from '@types/googlemaps';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonateComponent } from './donate/donate.component';
import { EventsComponent } from './events/events.component';
import { OrganizeComponent } from './organize/organize.component';
import { TrainingComponent } from './training/training.component';
import { StatsComponent } from './stats/stats.component';
import { MapComponent } from './map/map.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { OrganizeSidebarComponent } from './organize-sidebar/organize-sidebar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { VolunteerSidebarComponent } from './volunteer-sidebar/volunteer-sidebar.component';
import {SidebarModule} from 'ng-sidebar';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { VolunteerFeatureComponent } from './volunteer-feature/volunteer-feature.component';
import { OrganizeFeatureComponent } from './organize-feature/organize-feature.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsSmsComponent } from './events-sms/events-sms.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyClaQQH76XoSggCc2LoaG9vxtqhIY-OYOE',
  authDomain: 'first-test-8b104.firebaseapp.com',
  databaseURL: 'https://first-test-8b104.firebaseio.com',
  projectId: 'first-test-8b104',
  storageBucket: 'first-test-8b104.appspot.com',
  messagingSenderId: '897656003008'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesPageComponent,
    AboutComponent,
    HomeComponent,
    VolunteerComponent,
    DonateComponent,
    EventsComponent,
    OrganizeComponent,
    TrainingComponent,
    StatsComponent,
    MapComponent,
    LocationFormComponent,
    OrganizeSidebarComponent,
    JumbotronComponent,
    HomeFooterComponent,
    VolunteerSidebarComponent,
    VolunteerFormComponent,
    VolunteerFeatureComponent,
    OrganizeFeatureComponent,
    EventsCalendarComponent,
    EventsSmsComponent,
    LoginComponent,
    LogOutComponent,
    CreateProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    GoogleMapsNg2Module.forRoot({
      apiKey: 'AIzaSyBS9UDB8cqF_f4gE7-328G-l43XGEYV8RA',
      libraries:["places"]
    }),
    SidebarModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

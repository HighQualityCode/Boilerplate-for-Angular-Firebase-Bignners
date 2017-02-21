import { SignUpComponent } from './sign-up/sign-up.component';
import { IsLoggedInGuard } from './guards/isLoggedIn.guard';
import { ProfilePageComponent } from './profile/profile-page.component';
import { AuthMethods, AuthProviders } from 'angularfire2/auth';
import { StatefulClass } from './helpers/statefulClass';
import { FirebaseConfig } from './firebase/firebase.config';
import { Effects, Reducers } from './store/store.config';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateService } from './store/state-service/state.service';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterStoreModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './nav/nav.component';
import { ModalComponent } from './store/modal/modal.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        FooterComponent,
        LandingPageComponent,
        NavComponent,
        ModalComponent,
        ProfilePageComponent,
        SignUpComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(AppRoutes),
        StoreModule.provideStore(Reducers),
        RouterStoreModule.connectRouter(),
        ...Effects.map(e => EffectsModule.run(e)),
        AngularFireModule.initializeApp(FirebaseConfig),
    ],
    providers: [
        StateService,
        StatefulClass,
        IsLoggedInGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

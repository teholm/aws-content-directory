import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AuthenticationService } from './authentication.service'
// import { AuthGuardService } from './auth-guard.service'

const routes: Routes = [
  { path: '', component: ProfileComponent }
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'profile', component: ProfileComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  // providers: [],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}

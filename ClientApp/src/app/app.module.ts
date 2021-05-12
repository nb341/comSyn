import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ItemService } from './services/item.service';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'register', component: RegisterComponent, pathMatch: 'full' },
      { path: 'about-us', component: AboutComponent, pathMatch: 'full' },
      { path: 'contact-us', component: ContactComponent, pathMatch: 'full' },
      { path: 'shop', component: ShopComponent, pathMatch: 'full' },
      { path: 'search', component: SearchComponent }
    ])
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

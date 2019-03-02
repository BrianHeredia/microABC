import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService} from '../app/services/data.service';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { RecetaComponent } from './receta/receta.component';
import { DetailComponent } from './detail/detail.component';
import { ChefComponent } from './chef/chef.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    BusquedaComponent,
    RecetaComponent,
    DetailComponent,
    ChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmployeeComponent } from './employee/employee.component';
import { FetchdataService } from './fetchdata.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EmployeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl },
    FetchdataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

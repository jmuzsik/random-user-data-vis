import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { ReuseableChartComponent } from './reuseable-chart/reuseable-chart.component';
import { DataService } from './data.service';
import { UploadFileService } from './put-data.service';
import { GetFileService } from './get-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SideNavbarComponent,
    ReuseableChartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, UploadFileService, GetFileService],
  bootstrap: [AppComponent]
})
export class AppModule {}

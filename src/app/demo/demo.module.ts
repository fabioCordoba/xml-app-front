import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { UploadComponent } from './components/upload/upload.component';
import { ExportComponent } from './components/export/export.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavMenuComponent,
    UploadComponent,
    ExportComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
})
export class DemoModule {}

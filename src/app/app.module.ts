import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  UppyAngularDashboardModule,
  UppyAngularDragDropModule,
} from '@uppy/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploaderModule } from 'angular-uploader';
import { UploaderComponent } from './uploader/uploader.component';
import { DropzoneComponent } from './uploader/dropzone/dropzone.component';
import { Ng2FileUploadComponent } from './uploader/ng2-file-upload/ng2-file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { UppyComponent } from './uploader/uppy/uppy.component';

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    DropzoneComponent,
    Ng2FileUploadComponent,
    UppyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploaderModule,
    FileUploadModule,
    UppyAngularDashboardModule,
    UppyAngularDragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

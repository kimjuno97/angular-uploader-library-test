import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploaderComponent } from './uploader/uploader.component';
import { Ng2FileUploadComponent } from './uploader/ng2-file-upload/ng2-file-upload.component';
import { UppyComponent } from './uploader/uppy/uppy.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'uploader',
    pathMatch: 'full',
  },
  {
    path: 'uploader',
    component: UploaderComponent,
  },
  {
    path: 'ng2-file',
    component: Ng2FileUploadComponent,
  },
  {
    path: 'uppy',
    component: UppyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

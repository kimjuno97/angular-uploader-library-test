import { Component } from '@angular/core';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from 'uploader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  router = ['uploader', 'ng2-file', 'uppy'];
}

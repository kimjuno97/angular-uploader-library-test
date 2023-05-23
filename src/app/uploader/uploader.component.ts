import { Component } from '@angular/core';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from 'uploader';
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent {
  uploader = Uploader({
    apiKey: 'public_W142hue6W7FNLDThXEySNg3DsvAu', // <-- Get production-ready API keys from Upload.io
  });
  options: UploadWidgetConfig = {
    multi: true,
  };
  onComplete = (files: UploadWidgetResult[]) => {
    this.uploadedFileUrl = files[0]?.fileUrl;
  };
  uploadedFileUrl: string | undefined = undefined;
}

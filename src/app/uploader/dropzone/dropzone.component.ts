import { Component } from '@angular/core';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from 'uploader';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss'],
})
export class DropzoneComponent {
  uploader = Uploader({ apiKey: 'public_W142hue6W7FNLDThXEySNg3DsvAu' }); // Your real API key. 1주일 뒤 만료
  options: UploadWidgetConfig = {
    multi: true,
    styles: {
      colors: {
        active: 'red',
      },
    },
    metadata: {
      myCustomField1: true,
      myCustomField2: {
        hello: 'world',
      },
    },
  };
  // 'onUpdate' vs 'onComplete' attrs on 'upload-dropzone':
  // - Dropzones are non-terminal by default (they don't have an end
  //   state), so by default we use 'onUpdate' instead of 'onComplete'.
  // - To create a terminal dropzone, use the 'onComplete' attribute
  //   instead and add the 'showFinishButton: true' option.
  onUpdate = (files: UploadWidgetResult[]) => {
    alert(files.map((x) => x.fileUrl).join('\n'));
  };
  width = '300px';
  height = '375px';
}

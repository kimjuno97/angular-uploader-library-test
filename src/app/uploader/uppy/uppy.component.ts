import { Component, OnInit } from '@angular/core';
import { Uppy } from '@uppy/core';

@Component({
  selector: 'app-uppy',
  templateUrl: './uppy.component.html',
  styleUrls: ['./uppy.component.scss'],
})
export class UppyComponent {
  uppy: Uppy = new Uppy({ debug: true, autoProceed: true });
}

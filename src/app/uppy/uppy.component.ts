import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Uppy } from '@uppy/core';

@Component({
  selector: 'app-uppy',
  templateUrl: './uppy.component.html',
  styleUrls: ['./uppy.component.scss'],
})
export class UppyComponent implements OnInit, OnChanges {
  uppy!: Uppy;
  uppy2!: Uppy;
  ngOnInit(): void {
    this.uppy = new Uppy({ debug: true, autoProceed: true });
    this.uppy.on('complete', (result) => {
      console.log('Upload upp', result);
    });

    this.uppy2 = new Uppy({ debug: true, autoProceed: true });
    this.uppy2.on('complete', (result) => {
      console.log('Upload upp', result);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('asd', changes);
  }
}

import {  OnInit } from '@angular/core';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.sass']
})
export class OverlayExampleComponent {
  @ViewChild('overlayTemplate') overlayTemplate!: TemplateRef<any>;

  dummyList = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  private overlayRef!: OverlayRef;

  //positions! : ConnectedPosition[];

  constructor(private overlay: Overlay, private viewContainerRef:ViewContainerRef) { }

  openOverlay(value:any) {
    if (!this.overlayRef && this.overlayTemplate) {
      this.overlayRef = this.overlay.create({
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-dark-backdrop',
        positionStrategy: this.overlay.position()
          .global()
          .centerHorizontally()
          .centerVertically(),
      });
      this.overlayRef.backdropClick().subscribe(() => this.closeOverlay());
    }
    if (this.overlayRef) {
      this.overlayRef.attach(new TemplatePortal(this.overlayTemplate, this.viewContainerRef, {
        $implicit: value
      }));
    }
  }
  

  closeOverlay() {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

export class PageView {

  private display: string;
  private link: string;

  constructor(display: string, link: string) {

    this.display = display;
    this.link = link;
  }

  public getDisplay(): string {

    return this.display;
  }

  public getLink(): string {

    return this.link;
  }
}

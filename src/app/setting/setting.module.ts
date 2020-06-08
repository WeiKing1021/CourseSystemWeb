import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageView } from 'src/app/class/page-view/page-view.module';

export class Setting {

  public webTitle: string;
  public webDescription: string;

  public apiUrl: string;
  public pageList: Array<PageView>;

  constructor() {

    this.webTitle = 'noLearn';
    this.webDescription = 'No Learn No Pain';

    this.apiUrl = 'https://courseapi.weicraft.tw/';
  }
}

import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/setting/setting.module';

@Component({
  selector: 'app-index-bar',
  templateUrl: './index-bar.component.html',
  styleUrls: ['./index-bar.component.css']
})
export class IndexBarComponent implements OnInit {

  constructor(
    public setting: Setting,
  ) { }

  ngOnInit(): void {
  }

}

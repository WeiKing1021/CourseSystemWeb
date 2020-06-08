import { Component, OnInit } from '@angular/core';
import { StudentManager } from 'src/app/util/student-manager/student-manager.service';
import { Setting } from 'src/app/setting/setting.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public setting: Setting,
    public studentManager: StudentManager,
  ) {}

  ngOnInit(): void {
  }
}

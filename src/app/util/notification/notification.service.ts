import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationManager {

  public message: string;
  public display: boolean;

  constructor() {

    this.message = null;
    this.display = false;
  }

  public send(message: any): void {

    this.message = message == null ? 'NULL' : message;
    this.display = true;
  }

  public close(): void {

    this.display = false;
  }
}

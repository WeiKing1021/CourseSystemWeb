import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Setting } from 'src/app/setting/setting.module';
import { QueryResult } from './query-result.module';

@Injectable({
  providedIn: 'root'
})
export class HttpQuery {

  constructor(
    private setting: Setting,
    private http: HttpClient,
  ) { }

  public get<T>(url: string, httpParams: HttpParams, queryResult: (result: QueryResult<T>) => void): void {

    const opt = { observe: 'response' as 'response', params: httpParams };

    this.http.get<T>(this.setting.apiUrl + url, opt).subscribe(
      res => {

        queryResult(QueryResult.asNormal<T>(res));
      }
      , error => {

        queryResult(QueryResult.asError<T>(error));
      }
    );
  }

}

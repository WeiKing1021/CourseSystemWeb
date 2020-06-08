import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

export class QueryResult<T> {

  public ok: boolean;
  public status: number;
  public statusText: string;
  public data: T;

  public errorMessage: string;
  public errorName: string;

  constructor() {}

  public static asNormal<T>(httpResponse: HttpResponse<T>): QueryResult<T> {

    const result = new QueryResult<T>();

    result.ok = httpResponse.ok;
    result.status = httpResponse.status;
    result.statusText = httpResponse.statusText;
    result.data = httpResponse.body;

    return result;
  }

  public static asError<T>(errorResponse: HttpErrorResponse): QueryResult<T> {

    const result = new QueryResult<T>();

    result.ok = errorResponse.ok;
    result.status = errorResponse.status;
    result.statusText = errorResponse.statusText;

    result.errorMessage = errorResponse.message;
    result.errorName = errorResponse.name;

    return result;
  }
}

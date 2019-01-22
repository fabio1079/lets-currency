import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const BASE_URL = "http://data.fixer.io/api";
const ACCESS_KEY = "e99d5d81dcd71097fefcba2fb9124bfb";

export type Query = {
  from: string;
  to: string;
};

export interface FixerCall {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: object;
}

export interface SymbolsCall {
  success: boolean;
  symbols: object;
}

@Injectable({
  providedIn: "root"
})
export class FixerService {
  constructor(private http: HttpClient) {}

  private latestUrl({ from, to }: Query): string {
    return `${BASE_URL}/latest?access_key=${ACCESS_KEY}&symbols=${from},${to}`;
  }

  fetch(query: Query): Observable<FixerCall> {
    const URL = this.latestUrl(query);

    return this.http.get<FixerCall>(URL);
  }

  symbols(): Observable<SymbolsCall> {
    const URL = `${BASE_URL}/symbols&access_key=${ACCESS_KEY}`;

    return this.http.get<SymbolsCall>(URL);
  }
}

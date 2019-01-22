import { Component, OnInit } from "@angular/core";

import { FixerService, Query } from "./fixer.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  result = 0.0;
  error = false;
  amount = 1;
  query: Query = {
    from: "USD",
    to: "BRL"
  };

  constructor(private fixer: FixerService) {}

  ngOnInit() {
    this.getCurrency();
  }

  getCurrency() {
    this.fixer.fetch(this.query).subscribe(({success, rates}) => {
      if (success) {
        this.result = this.calcResult(rates[this.query.from], rates[this.query.to], this.amount);
        this.error = false;
      } else {
        this.error = true;
        this.result = 0;
      }
    });
  }

  private calcResult(from: number, to:number, amount: number) {
    return (to/from) * amount;
  }
}

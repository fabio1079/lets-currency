import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FixerService } from "./fixer.service";

const FixerFetchMockResponse = {
  success: true,
  timestamp: 1548254346,
  base: "EUR",
  date: "2019-01-23",
  rates: {
    USD: 1.135714,
    BRL: 4.318325
  }
};

const FixerSymbolsMockResponse = {
  success: true,
  symbols: {
    USD: "United States Dollar",
    BRL: "Brazilian Real"
  }
};

describe("AppComponent", () => {
  let fixer: FixerService = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [AppComponent]
    }).compileComponents();

    fixer = TestBed.get(FixerService);
    spyOn(fixer, "symbols").and.returnValue(FixerSymbolsMockResponse);
    spyOn(fixer, "fetch").and.returnValue(FixerFetchMockResponse);
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  /*
  it(`should have as title 'lets-currency'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('lets-currency');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to lets-currency!');
  });
  */
});

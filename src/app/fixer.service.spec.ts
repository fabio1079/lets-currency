import { TestBed } from "@angular/core/testing";

import { HttpClientTestingModule } from "@angular/common/http/testing";

import { FixerService } from "./fixer.service";

const FixerSymbolsMockResponse = {
  success: true,
  symbols: {
    USD: "United States Dollar",
    BRL: "Brazilian Real"
  }
};

describe("FixerService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it("should be created", () => {
    const service: FixerService = TestBed.get(FixerService);
    expect(service).toBeTruthy();
  });

  it('Get symbols from API', () => {
    const service: FixerService = TestBed.get(FixerService);
    spyOn(service, "symbols").and.returnValue(FixerSymbolsMockResponse);

    expect(service.symbols()).toBe(FixerSymbolsMockResponse);
  });
});

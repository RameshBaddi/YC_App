import React from "react";
import { fetchApi } from "./AppContext/fetchApi";

describe("Fetch API testing", () => {
  let data
  it("Async fetch function: Has response", async () => {
    data = await fetchApi();
    expect(Object.keys(data).length).toBeGreaterThan(0);
  });

  it("Async fetch function: Has hits object", async () => {
    expect(Object.keys(data)[0]).toEqual("hits");
  });

  it("Async fetch function: Has data in hits object", async () => {
    expect(data.hits.length).toBeGreaterThan(0);
  });
});

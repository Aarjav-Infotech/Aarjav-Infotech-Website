import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { WEB3FORMS_SUBMIT_URL } from "./contact.ts";

describe("Web3Forms contact submission", () => {
  it("targets the official Web3Forms endpoint", () => {
    assert.equal(WEB3FORMS_SUBMIT_URL, "https://api.web3forms.com/submit");
  });
});

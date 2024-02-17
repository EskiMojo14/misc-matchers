/* eslint-disable @typescript-eslint/no-empty-interface */
import { expect } from "vitest";
import * as mixNMatchers from "./index";

declare module "vitest" {
  interface Assertion<T = any> extends mixNMatchers.MixNMatchers<T> {}
  interface AsymmetricMatchersContaining
    extends mixNMatchers.AsymmetricMixNMatchers {}
}

expect.extend(mixNMatchers);
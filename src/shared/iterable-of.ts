import type { MatcherFunction } from "../utils/types";
import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import { isIterable, makeEqualValue } from "../utils";

const makeIterableOfMatcher = (
  matcherName: string,
  asymmetric: boolean,
  strict = false,
): MatcherFunction<[expected: unknown]> =>
  function toBeIterableOf(received, expected) {
    if (!isIterable(received)) {
      return {
        pass: false,
        message: () => `Expected ${printReceived(received)} to be an iterable`,
      };
    }
    const prefix =
      matcherHint(matcherName, undefined, undefined, {
        isNot: this.isNot,
        promise: this.promise,
        isDirectExpectCall: asymmetric,
      }) + "\n\n";
    const equalValue = makeEqualValue(this);

    let i = 0;
    for (const value of received) {
      if (!equalValue(value, expected, strict)) {
        return {
          pass: false,
          message: () =>
            prefix +
            `Expected ${printReceived(received)} to contain only values matching ${printExpected(expected)}, but item at index ${i} was ${printReceived(value)}`,
        };
      }
      i++;
    }
    return {
      pass: true,
      message: () =>
        prefix +
        `Expected ${printReceived(received)} not to contain only values matching ${printExpected(expected)}`,
    };
  };

/**
 * Asserts that a value is an iterable where all items are deeply equal to the expected value.
 *
 * @example
 * expect([1, 1, 1]).toBeIterableOf(1);
 * expect([1, 1, 2]).not.toBeIterableOf(1);
 *
 * expect([1, 2, 1]).toBeIterableOf(expect.any(Number));
 */
export const toBeIterableOf = makeIterableOfMatcher("toBeIterableOf", false);

/**
 * Matches an iterable where all items are deeply equal to the expected value.
 *
 * @example
 * expect({ value: [1, 1, 1] }).toEqual({ value: expect.iterableOf(1) });
 * expect({ value: [1, 1, 2] }).not.toEqual({ value: expect.iterableOf(1) });
 *
 * expect({ value: [1, 2, 1] }).toEqual({ value: expect.iterableOf(expect.any(Number)) });
 */
export const iterableOf = makeIterableOfMatcher("iterableOf", true);

/**
 * Asserts that a value is an iterable where all items are strictly deeply equal to the expected value.
 *
 * @example
 * expect([1, 1, 1]).toBeStrictIterableOf(1);
 * expect([1, 1, 2]).not.toBeStrictIterableOf(1);
 *
 * expect([1, 2, 1]).toBeStrictIterableOf(expect.any(Number));
 */
export const toBeStrictIterableOf = makeIterableOfMatcher(
  "toBeStrictIterableOf",
  false,
  true,
);

/**
 * Matches an iterable where all items are strictly deeply equal to the expected value.
 *
 * @example
 * expect({ value: [1, 1, 1] }).toEqual({ value: expect.strictIterableOf(1) });
 * expect({ value: [1, 1, 2] }).not.toEqual({ value: expect.strictIterableOf(1) });
 *
 * expect({ value: [1, 2, 1] }).toEqual({ value: expect.strictIterableOf(expect.any(Number)) });
 */
export const strictIterableOf = makeIterableOfMatcher(
  "strictIterableOf",
  true,
  true,
);

const makeRecordOfMatcher = (
  matcherName: string,
  asymmetric: boolean,
  strict = false,
): MatcherFunction<[expected: unknown]> =>
  function toBeRecordOf(received, expected) {
    if (typeof received !== "object" || received === null) {
      return {
        pass: false,
        message: () =>
          `Expected ${printReceived(received)} to be an object, but it was ${printReceived(typeof received)}`,
      };
    }
    const prefix =
      matcherHint(matcherName, undefined, undefined, {
        isNot: this.isNot,
        promise: this.promise,
        isDirectExpectCall: asymmetric,
      }) + "\n\n";
    const equalValue = makeEqualValue(this);

    for (const [key, value] of Object.entries(received)) {
      if (!equalValue(value, expected, strict)) {
        return {
          pass: false,
          message: () =>
            prefix +
            `Expected ${printReceived(received)} to contain only values matching ${printExpected(expected)}, but item at key ${key} was ${printReceived(value)}`,
        };
      }
    }
    return {
      pass: true,
      message: () =>
        prefix +
        `Expected ${printReceived(received)} not to contain only values matching ${printExpected(expected)}`,
    };
  };

/**
 * Asserts that a value is a record (object) where all values are deeply equal to the expected value.
 *
 * @example
 * expect({ a: 1, b: 1, c: 1 }).toBeRecordOf(1);
 * expect({ a: 1, b: 1, c: 2 }).not.toBeRecordOf(1);
 *
 * expect({ a: 1, b: 2, c: 1 }).toBeRecordOf(expect.any(Number));
 */
export const toBeRecordOf = makeRecordOfMatcher("toBeRecordOf", false);

/**
 * Matches a record (object) where all values are deeply equal to the expected value.
 *
 * @example
 * expect({ value: { a: 1, b: 1, c: 1 } }).toEqual({ value: expect.recordOf(1) });
 * expect({ value: { a: 1, b: 1, c: 2 } }).not.toEqual({ value: expect.recordOf(1) });
 *
 * expect({ value: { a: 1, b: 2, c: 1 } }).toEqual({ value: expect.recordOf(expect.any(Number)) });
 */
export const recordOf = makeRecordOfMatcher("recordOf", true);

/**
 * Asserts that a value is a record (object) where all values are strictly deeply equal to the expected value.
 *
 * @example
 * expect({ a: 1, b: 1, c: 1 }).toBeStrictRecordOf(1);
 * expect({ a: 1, b: 1, c: 2 }).not.toBeStrictRecordOf(1);
 *
 * expect({ a: 1, b: 2, c: 1 }).toBeStrictRecordOf(expect.any(Number));
 */
export const toBeStrictRecordOf = makeRecordOfMatcher(
  "toBeStrictRecordOf",
  false,
  true,
);

/**
 * Matches a record (object) where all values are strictly deeply equal to the expected value.
 *
 * @example
 * expect({ value: { a: 1, b: 1, c: 1 } }).toEqual({ value: expect.strictRecordOf(1) });
 * expect({ value: { a: 1, b: 1, c: 2 } }).not.toEqual({ value: expect.strictRecordOf(1) });
 *
 * expect({ value: { a: 1, b: 2, c: 1 } }).toEqual({ value: expect.strictRecordOf(expect.any(Number)) });
 */
export const strictRecordOf = makeRecordOfMatcher("strictRecordOf", true, true);

declare module "mix-n-matchers" {
  export interface MixNMatchers<R = any, T = unknown> {
    /**
     * Asserts that a value is an iterable where all items are deeply equal to the expected value.
     *
     * @example
     * expect([1, 1, 1]).toBeIterableOf(1);
     * expect([1, 1, 2]).not.toBeIterableOf(1);
     *
     * expect([1, 2, 1]).toBeIterableOf(expect.any(Number));
     */
    toBeIterableOf<E>(expected: E): R;
    /**
     * Asserts that a value is an iterable where all items are strictly deeply equal to the expected value.
     *
     * @example
     * expect([1, 1, 1]).toBeStrictIterableOf(1);
     * expect([1, 1, 2]).not.toBeStrictIterableOf(1);
     *
     * expect([1, 2, 1]).toBeStrictIterableOf(expect.any(Number));
     */
    toBeStrictIterableOf<E>(expected: E): R;
    /**
     * Asserts that a value is a record (object) where all values are deeply equal to the expected value.
     *
     * @example
     * expect({ a: 1, b: 1, c: 1 }).toBeRecordOf(1);
     * expect({ a: 1, b: 1, c: 2 }).not.toBeRecordOf(1);
     *
     * expect({ a: 1, b: 2, c: 1 }).toBeRecordOf(expect.any(Number));
     */
    toBeRecordOf<E>(expected: E): R;
    /**
     * Asserts that a value is a record (object) where all values are strictly deeply equal to the expected value.
     *
     * @example
     * expect({ a: 1, b: 1, c: 1 }).toBeStrictRecordOf(1);
     * expect({ a: 1, b: 1, c: 2 }).not.toBeStrictRecordOf(1);
     *
     * expect({ a: 1, b: 2, c: 1 }).toBeStrictRecordOf(expect.any(Number));
     */
    toBeStrictRecordOf<E>(expected: E): R;
  }
  export interface AsymmetricMixNMatchers {
    /**
     * Matches an iterable where all items are deeply equal to the expected value.
     *
     * @example
     * expect({ value: [1, 1, 1] }).toEqual({ value: expect.iterableOf(1) });
     * expect({ value: [1, 1, 2] }).not.toEqual({ value: expect.iterableOf(1) });
     *
     * expect({ value: [1, 2, 1] }).toEqual({ value: expect.iterableOf(expect.any(Number)) });
     */
    iterableOf<E>(expected: E): any;
    /**
     * Matches an iterable where all items are strictly deeply equal to the expected value.
     *
     * @example
     * expect({ value: [1, 1, 1] }).toEqual({ value: expect.strictIterableOf(1) });
     * expect({ value: [1, 1, 2] }).not.toEqual({ value: expect.strictIterableOf(1) });
     *
     * expect({ value: [1, 2, 1] }).toEqual({ value: expect.strictIterableOf(expect.any(Number)) });
     */
    strictIterableOf<E>(expected: E): any;
    /**
     * Matches a record (object) where all values are deeply equal to the expected value.
     *
     * @example
     * expect({ value: { a: 1, b: 1, c: 1 } }).toEqual({ value: expect.recordOf(1) });
     * expect({ value: { a: 1, b: 1, c: 2 } }).not.toEqual({ value: expect.recordOf(1) });
     *
     * expect({ value: { a: 1, b: 2, c: 1 } }).toEqual({ value: expect.recordOf(expect.any(Number)) });
     */
    recordOf<E>(expected: E): any;
    /**
     * Matches a record (object) where all values are strictly deeply equal to the expected value.
     *
     * @example
     * expect({ value: { a: 1, b: 1, c: 1 } }).toEqual({ value: expect.strictRecordOf(1) });
     * expect({ value: { a: 1, b: 1, c: 2 } }).not.toEqual({ value: expect.strictRecordOf(1) });
     *
     * expect({ value: { a: 1, b: 2, c: 1 } }).toEqual({ value: expect.strictRecordOf(expect.any(Number)) });
     */
    strictRecordOf<E>(expected: E): any;
  }
}

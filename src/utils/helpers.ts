// Helpers & Utilities

export const first = <T>(arr: Array<T>): T | null =>
  !arr.length ? null : arr[0];

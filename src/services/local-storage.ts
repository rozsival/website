export const getStoredValue = <V, K extends string = string>(key: K) =>
  window.localStorage.getItem(key) as V | null;

export const storeValue = <K extends string, V>(key: K, value: V) =>
  window.localStorage.setItem(key, String(value));

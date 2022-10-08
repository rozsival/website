import type { LocalStorage } from './types';

export const getStoredValue = <K extends keyof LocalStorage>(key: K) =>
  window.localStorage.getItem(key) as LocalStorage[K] | null;

export const storeValue = <K extends keyof LocalStorage>(
  key: K,
  value: LocalStorage[K],
) => window.localStorage.setItem(key, String(value));

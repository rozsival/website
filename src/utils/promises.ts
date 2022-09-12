export const catchError = <T>(promise: Promise<T>) => {
  // eslint-disable-next-line no-console
  promise.catch(console.error);
};

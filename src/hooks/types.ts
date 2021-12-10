export type UseFetchOptions = {
  url: string;
  method: RequestInit['method'];
};

export type UseFetchReturn<Data, Response> = [
  { error: string; loading: boolean; response?: Response },
  (data: Data) => Promise<void>,
];

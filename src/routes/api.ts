const createApiRoute = <Path extends string>(path: Path): string =>
  `/api/${path}`;

export const apiRoutes = {
  sendForm: createApiRoute('send-form'),
};

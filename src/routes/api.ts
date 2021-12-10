const createApiRoute = <Path extends string>(path: Path) =>
  `/api/${path}` as const;

export const apiRoutes = {
  sendForm: createApiRoute('send-form'),
};

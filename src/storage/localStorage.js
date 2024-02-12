import storage from './mmkvStorage';

export const USER_REFRS = {
  JWT: 'jwt',
};

export const setJWT = async (jwt) => {
  await storage.setItem(USER_REFRS.JWT, jwt);
};
export const getJWT = async () => {
  const data = await storage.getItem(USER_REFRS.JWT);
  return data ?? null;
};
export const clearUser = async () => {
  await storage.removeItem(USER_REFRS.JWT);
};

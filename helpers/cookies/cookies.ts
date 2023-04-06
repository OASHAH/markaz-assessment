import { deleteCookie, getCookie, setCookie } from "cookies-next";
export const cookieHelper = () => {
  return {
    get: (key) => getCookie(key),
    set: (key, value) => setCookie(key, value, {}),
    delete: (key) => deleteCookie(key),
  };
};

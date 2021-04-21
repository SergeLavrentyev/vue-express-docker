import { request } from "./generic.service";

const getCities = () => request({ url: "cities", method: "get" });

export {
  getCities
}

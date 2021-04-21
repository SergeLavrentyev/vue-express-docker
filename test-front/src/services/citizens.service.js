import { request } from "./generic.service";

const getCitizens = () => request({ url: "citizens", method: "get" });

export {
  getCitizens
}

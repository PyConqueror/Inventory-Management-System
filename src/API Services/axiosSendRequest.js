import axios from "axios";
import { getToken } from "./userServices";

export default async function axiosSendRequest(url, method, data = null, params = null) {
  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`
  };
  console.log(params)
  const config = {
    method,
    url: `${url}`,
    headers,
    data,
    params,
  };

  return axios(config);
}

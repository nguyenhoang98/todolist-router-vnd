import axios from "axios";

function axiosServices(url, method, data) {
  return axios({
    url: url,
    method: method,
    data: data,
  });
}
export default axiosServices;

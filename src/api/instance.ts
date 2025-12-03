import axios, {
  type AxiosInstance,
  type AxiosResponse,
  AxiosError,
} from "axios";

export const baseURL = import.meta.env.VITE_APP_BASE_URL;

const _axios: AxiosInstance = axios.create({
  baseURL,
});

_axios.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  async function (error: AxiosError) {
    if (error.response) {
      const { status, data }: { status: number; data: any } = error.response;

      console.log("status", status);
      // === other errors handling ===
      switch (status) {
        case 400:
          console.log("400 Bad Request:", data.message);
          break;
        case 401:
          console.log("401 Unauthorized:", data.message);
          break;
        case 403:
          console.log("403 Forbidden:", data.message);
          break;
        case 404:
          console.log("404 Not Found:", data.message);
          break;
        case 422:
          console.log("422 Unprocessable Content:", data.message);
          break;
        case 500:
          console.log("500 Internal Server Error:", data.message);
          break;
        default:
          console.log(`Unhandled status code ${status}:`, data.message);
          break;
      }

      return Promise.reject(error);
    } else if (error.request) {
      console.log("No response received:", error.request);
    } else {
      console.log("Error during request setup:", error.message);
    }
    return Promise.reject(error);
  }
);

export default _axios;

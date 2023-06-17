import axiosInstance from "../axiosInstance.jsx";

export default {

    login(url, data, success, failure) {
      axiosInstance
      .post("/login", {
        email: data?.email,
        password: data?.password,
      })
      .then((response) => {
        if (response?.data) {
          success(response.data);
        }
      })
      .catch((error) => {
        failure(error?.response?.data);
      });
  },
  logout(success, failure) {
      axiosInstance
      .post("/logout")
      .then((response) => {
        if (typeof response.data != "undefined") success(response.data);
      })
      .catch((error) => {
        failure(error?.response?.data);
      });
  },

  getUser(success, failure) {
      axiosInstance
      .get("/auth/user")
      .then((response) => {
        if (response?.data) {
          success(response.data);
        }
      })
      .catch((error) => {
        failure(error?.response?.data);
      });
  },
};

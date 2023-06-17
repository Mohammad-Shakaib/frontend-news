import React, { useEffect } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { isJWTValid } from "@/components/common/utils/userData";
import { getUser } from "@/redux/feature/authSlice";
import authService from "@/redux/feature/authService";
import { useDispatch } from "react-redux";

function ReactApp() {
  const dispatch = useDispatch();
    const isAuthenticated = isJWTValid();
  useEffect(() => {
    if (isAuthenticated) {
      getAuthUser();
    }
  }, [isAuthenticated]);

  function getAuthUser() {
    authService.getUser(
      (response) => {
        dispatch(
          getUser({
            user: response?.data,
          })
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return <AppRoutes isAuthenticated={isAuthenticated} />;
}

export default ReactApp;

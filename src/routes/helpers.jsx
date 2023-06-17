// Private route restrict to access public pages after login.
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUser, selectToken } from "../redux/feature/authSlice";
import PageNotFound from "../components/pageNotFound/PageNotFound";

export const PublicRoute = ({ _children, ..._rest }) => {
  const isAuthenticated = useSelector(selectToken);
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' replace />;
};
export const NotFoundRoute = ({ _children, ..._rest }) => {
  return <PageNotFound />;
};

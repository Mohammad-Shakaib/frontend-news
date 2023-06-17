import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Header.scss";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../redux/feature/authSlice";
import authService from "../redux/feature/authService";
import { Dropdown, Space, Menu, Avatar, Spin } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const Header = ({ isAuthenticated, authUser }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const profile = () => {
    navigate("/profile");
  };

  const signout = (e) => {
    e.preventDefault();
    authService.logout(
        (_data) => {
          dispatch(logout());
            navigate("/login");
        },
        (_error) => {
          dispatch(logout());
        }
    );
  };

  const menu = (
      <Menu
          items={[
            {
              type: "divider",
            },
            {
              label: <a onClick={profile}>My Account</a>,
              key: "0",
            },
            {
              type: "divider",
            },
            {
              label: <a onClick={signout}>Logout</a>,
              key: "1",
            },
          ]}
      />
  );

  return (
    <header>
      <div className="container">
        <div className="left">
          <div className="logo">
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              <img src="/images/bbc.png" alt="logo" />
            </a>
          </div>
        </div>
        <div className="right">
          {isAuthenticated && (
              <div className="dropdown">
                <Dropdown
                    overlay={menu}
                    overlayClassName="profileDropdown"
                    trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <Avatar
                          src={
                            authUser?.avatar
                                ? authUser.avatar_url
                                : "https://ui-avatars.com/api/?name=" + authUser?.name
                          }
                          data-testid="tested"
                          size="large"
                      />
                      {authUser?.name}
                      <CaretDownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
          )}
          {(!isAuthenticated &&
              <div className="auth">
                <a
                    className="btn danger danger-alt"
                    onClick={() => navigate("/register")}
                >
                  Sign Up
                </a>
                <a className="btn primary" onClick={() => navigate("/login")}>
                  Log In
                </a>
              </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import PropTypes from "prop-types";
import GuestGuard from "@guards/GuestGuard";

const Login = (props) => {
  return (
    <div>
      <GuestGuard>Login Page</GuestGuard>
    </div>
  );
};

Login.propTypes = {};

export default Login;

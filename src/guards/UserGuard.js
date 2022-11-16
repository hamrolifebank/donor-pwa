import { Register } from "@components/Register";
import { useAppAuthContext } from "@contexts/AuthContext";
import PropTypes from "prop-types";

const UserGuard = ({ children }) => {
  const { user } = useAppAuthContext();

  if (!user) {
    return <Register />;
  }
  return <>{children}</>;
};

export default UserGuard;

UserGuard.propTypes = {
  children: PropTypes.node,
};

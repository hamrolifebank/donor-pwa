import Page from "@components/Page";
import { Register } from "@components/Register";
import { useAppAuthContext } from "@contexts/AuthContext";
import PropTypes from "prop-types";

const UserGuard = ({ children }) => {
  const { user } = useAppAuthContext();

  if (!user) {
    const PAGE_TITLE = "Register";
    return (
      <Page title={PAGE_TITLE}>
        <Register />;
      </Page>
    );
  }
  return <>{children}</>;
};

export default UserGuard;

UserGuard.propTypes = {
  children: PropTypes.node,
};

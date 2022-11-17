import Page from "@components/Page";
import { Register } from "@components/Register";
import { useAppAuthContext } from "@contexts/AuthContext";
import PropTypes from "prop-types";

const UserGuard = ({ children }) => {
  const { user, isInitialized } = useAppAuthContext();
  if (!isInitialized) {
    return <LoadingScreen />;
  }

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

UserGuard.propTypes = {
  children: PropTypes.node,
};
export default UserGuard;

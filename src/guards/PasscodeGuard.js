import PropTypes from "prop-types";
import { useEffect } from "react";
// next
import { useRouter } from "next/router";
// components
import LoadingScreen from "@components/LoadingScreen";
//
import { useAppAuthContext } from "@contexts/AuthContext";
import { PATH_AUTH, PATH_DASHBOARD } from "@routes/paths";
import { usePasscodeContext } from "@contexts/PasscodeContext";

// ----------------------------------------------------------------------

PasscodeGuard.propTypes = {
  children: PropTypes.node,
};

// Wrap this for all pages that donot require authentication(guest user)

export default function PasscodeGuard({ children }) {
  const { push, pathname } = useRouter();

  const { isPasscodeset, isAppLocked } = usePasscodeContext();

  useEffect(() => {
    if (isPasscodeset && isAppLocked) {
      push(PATH_DASHBOARD.root);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAppLocked]);

  if (isAppLocked === undefined) {
    return <LoadingScreen />;
  } else if (isAppLocked === true) {
    if (pathname === PATH_DASHBOARD.root) {
      return <>{children}</>;
    } else {
      return <LoadingScreen />;
    }
  } else {
    return <>{children}</>;
  }
}

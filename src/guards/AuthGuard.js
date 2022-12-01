import PropTypes from "prop-types";
import { useEffect } from "react";
// next
import { useRouter } from "next/router";
// components
import LoadingScreen from "../components/LoadingScreen";
//

import { useAppAuthContext } from "@contexts/AuthContext";

import { PATH_AUTH } from "@routes/paths";

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

// // Wrap this for all pages that require authentication

// export default function AuthGuard({ children }) {
//   const { isAuthenticated, isInitialized } = useAppAuthContext();

//   const { push } = useRouter();

//   useEffect(() => {
//     if (!isAuthenticated && isInitialized) {
//       push(PATH_AUTH.login);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isAuthenticated, isInitialized]);

//   if (!isInitialized) {
//     return <LoadingScreen />;
//   }

//   return <>{children}</>;
// }

export default function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAppAuthContext();

  const { push, pathname } = useRouter();

  useEffect(() => {
    if (!isAuthenticated && isInitialized) {
      push(PATH_AUTH.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isInitialized]);

  if (isAuthenticated === undefined) {
    return <LoadingScreen />;
  } else if (isAuthenticated === false) {
    if (pathname === PATH_AUTH.login) {
      return <>{children}</>;
    } else {
      return <LoadingScreen />;
    }
  } else {
    return <>{children}</>;
  }
}

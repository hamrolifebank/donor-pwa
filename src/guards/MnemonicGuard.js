import React from "react";
import PropTypes from "prop-types";

import { Mnemonic } from "@components/Mnemonic";
import Page from "@components/Page";

const MnemonicGuard = (children) => {
  const { isMnemonicWritten, isInitialized } = useAppAuthContext();

  if (!isInitialized) {
    return <LoadingScreen />;
  }
  if (!isMnemonicWritten) {
    const PAGE_TITLE = "Mnemonic";
    return (
      <Page title={PAGE_TITLE}>
        <Mnemonic />
      </Page>
    );
  }
  return <>{children}</>;
};

MnemonicGuard.propTypes = {
  children: PropTypes.node,
};

export default MnemonicGuard;

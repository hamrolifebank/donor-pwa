import React from "react";
import PropTypes from "prop-types";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { MnemonicPage } from "@sections/mnemonic";

const PAGE_TITLE = "Backup your mnemonic";

Mnemonic.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function Mnemonic(props) {
  return (
    <div>
      <MnemonicPage />
    </div>
  );
}
Mnemonic.propTypes = {};

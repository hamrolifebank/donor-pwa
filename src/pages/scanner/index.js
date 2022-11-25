import React from "react";
import Page from "@components/Page";
import PropTypes from "prop-types";

import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import QRScanner from "@components/QRScanner";
const PAGE_TITLE = "QR-SCANNER";

QrCodeScannerPage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);
export default function QrCodeScannerPage() {
  return (
    <Page title={PAGE_TITLE}>
      <QRScanner />
    </Page>
  );
}

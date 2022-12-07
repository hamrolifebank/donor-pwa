import Page from "@components/Page";
import { OtpApiProvider } from "@contexts/otpApiContext";
import PasscodeGuard from "@guards/PasscodeGuard";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { Confirmation } from "@sections/confirmation";

const PAGE_TITLE = "";

ConfirmationPage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function ConfirmationPage() {
  return (
    <Page title={PAGE_TITLE}>
      <PasscodeGuard>
        <Confirmation />
      </PasscodeGuard>
    </Page>
  );
}

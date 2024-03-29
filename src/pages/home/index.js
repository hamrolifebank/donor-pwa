import Page from "@components/Page";
import { OtpApiProvider } from "@contexts/otpApiContext";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { Home } from "@sections/home";

const PAGE_TITLE = "Home";

HomePage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function HomePage() {
  return (
    <Page title={PAGE_TITLE}>
      <OtpApiProvider>
        <Home />
      </OtpApiProvider>
    </Page>
  );
}

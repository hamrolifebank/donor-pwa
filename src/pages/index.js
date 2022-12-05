import Page from "@components/Page";
import { usePasscodeContext } from "@contexts/PasscodeContext";
import PasscodeGuard from "@guards/PasscodeGuard";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { Home, LockedHome } from "@sections/home";

const PAGE_TITLE = "Home";

HomePage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function HomePage() {
  const { isAppLocked } = usePasscodeContext();
  return (
    <Page title={PAGE_TITLE}>
      <PasscodeGuard>{isAppLocked ? <LockedHome /> : <Home />}</PasscodeGuard>
    </Page>
  );
}

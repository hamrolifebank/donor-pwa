import Page from "@components/Page";
import PasscodeGuard from "@guards/PasscodeGuard";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { EventPage } from "@sections/event-lists";
const PAGE_TITLE = "Events";

Events.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function Events() {
  return (
    <Page title={PAGE_TITLE}>
      <PasscodeGuard>
        <EventPage />
      </PasscodeGuard>
    </Page>
  );
}

import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { EventPage } from "@sections/event-lists";
import { EventProvider } from "@contexts/EventContext";
const PAGE_TITLE = "Events";

Events.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function Events() {
  return (
    <EventProvider>
      <Page title={PAGE_TITLE}>
        <EventPage />
      </Page>
    </EventProvider>
  );
}

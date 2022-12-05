import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { useRouter } from "next/router";
import { DisplayGraph } from "@sections/event-details";
import { EventInformation } from "@sections/events";
import { EventProvider } from "@contexts/EventContext";
import { useAppContext } from "@contexts/AppContext";

const PAGE_TITLE = "Event Details";

EventDetails.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function EventDetails() {
  const { events } = useAppContext();
  const router = useRouter();
  const { slug } = router.query;
  if (slug) {
    localStorage.setItem("slugID", JSON.stringify(slug));
  }
  let clickedEvents = events.find((event) => event.id === String(slug));

  return (
    <EventProvider>
      <Page title={PAGE_TITLE}>
        <EventInformation clickedEvents={clickedEvents} />
        <DisplayGraph />
      </Page>
    </EventProvider>
  );
}

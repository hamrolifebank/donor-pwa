import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { Profile } from "@sections/profile";

const PAGE_TITLE = "Profile";

ProfilePage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function ProfilePage() {
  return (
    <Page title={PAGE_TITLE}>
      <Profile />
    </Page>
  );
}

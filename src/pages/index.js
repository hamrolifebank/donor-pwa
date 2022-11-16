import { BottomNavigation } from "@components/bottom-navigation";
import LandingPage from "@components/LoginPage/LoginPage";
import Page from "@components/Page";
import { Register } from "@components/Register";
import AuthGuard from "@guards/AuthGuard";
import UserGuard from "@guards/UserGuard";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import Login from "./auth/login";

const PAGE_TITLE = "Home";

Home.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function Home() {
  return (
    <AuthGuard>
      <UserGuard>
        <Page title={PAGE_TITLE}>
          <h1>Home</h1>
        </Page>
      </UserGuard>
    </AuthGuard>
  );
}

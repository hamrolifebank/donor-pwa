import Page from "@components/Page";
import { useAppAuthContext } from "@contexts/AuthContext";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { UpdateProfileForm } from "@sections/profile";
import UserCard from "@sections/user-card/userCard";

const PAGE_TITLE = "Edit Profile";

EditProfilePage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function EditProfilePage() {
  const { user } = useAppAuthContext();
  return (
    <Page title={PAGE_TITLE}>
      <div style={{ marginTop: -10 }}>
        <UserCard user={user} />
        <UpdateProfileForm />
      </div>
    </Page>
  );
}

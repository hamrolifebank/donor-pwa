import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { UpdateProfileForm } from "@sections/profile";
import UserCard from "@sections/profile/card/userCard";

const PAGE_TITLE = "Edit Profile";

EditProfilePage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function EditProfilePage() {
  const user = {
    name: "Katarina Smith",
    cover: "/assets/cover/cover-1.jpg",
    role: "UI Designer",
    follower: 1.2,
    totalPosts: 1.2,
    avatarUrl: "/assets/avatar/avatar-1.jpg",
    following: 1.2,
  };
  return (
    <Page title={PAGE_TITLE}>
      <UserCard user={user} />
      <UpdateProfileForm />
    </Page>
  );
}

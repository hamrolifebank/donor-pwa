import Page from "@components/Page";
import DashboardLayout from "@layouts/dashboard";
import { Card, Container } from "@mui/material";
import { useEffect } from "react";
import { ProfileContextProvider, useProfileContext } from "./context";
import ProfileInfo from "./ProfileInfo";
import ProfileMenu from "./ProfileMenuList";

const PAGE_TITLE = "Profile";

Profile.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function Profile() {
  //Follow this pattern for all pages

  const { testFunction, intialValue } = useProfileContext();

  useEffect(() => {
    testFunction();
  }, [testFunction]);

  // console.log("intialValue", intialValue);

  return (
    <ProfileContextProvider>
      <Page title={PAGE_TITLE}>
        <Container maxWidth={"xl"}>
          <Card sx={{ p: 2 }}>
            <ProfileInfo />
            <ProfileMenu />
          </Card>
        </Container>
      </Page>
    </ProfileContextProvider>
  );
}

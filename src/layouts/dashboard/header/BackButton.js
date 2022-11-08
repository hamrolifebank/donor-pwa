import { Button } from "@mui/material";
import Iconify from "@components/iconify";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant='text'
      size='large'
      color='inherit'
      onClick={() => router.back()}>
      <Iconify icon='eva:arrow-ios-back-outline' />
    </Button>
  );
};

export default BackButton;

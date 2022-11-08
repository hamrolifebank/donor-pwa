// hooks
// import useAuth from '../hooks/useAppAuth';
// utils
//

import { Avatar } from "@mui/material";

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  //   const { user } = useAuth();

  return (
    <Avatar
      src={null}
      alt={"A"}
      color={"default" ?? createAvatar("A").color}
      {...other}>
      {"A"}
    </Avatar>
  );
}

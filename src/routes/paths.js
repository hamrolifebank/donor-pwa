// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/";
const ROOTS_ASSETS = "/assets";
const ROOTS_PROFILE = "/profile";
const ROOTS_NEW = "/new";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: "/auth/login",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  one: path(ROOTS_DASHBOARD, "/one"),
};

export const PATH_ASSETS = {
  root: ROOTS_ASSETS,
};

export const PATH_PROFILE = {
  root: ROOTS_PROFILE,
};

export const BOTTOM_NAVIGATION_OPTIONS = [
  {
    path: PATH_DASHBOARD.root,
    // label: "Home",
    icon: "eva:home-fill",
    // icon: <DashboardIcon />,
  },
  {
    path: PATH_ASSETS.root,
    label: "",
    icon: "eva:calendar-fill",
    sx: {},
  },
  {
    path: PATH_ASSETS.root,
    label: "scan",
    icon: "fluent:qr-code-24-filled",
    sx: {
      fontWeight: "fontWeightBold",
      // borderRadius: "50%",
      // backgroundColor: "primary.main",
      // color: "primary.contrastText",
    },
    iconStyle: {
      transform: "scale(2)",
    },
  },
  {
    path: PATH_ASSETS.root,
    // label: "Donations",
    icon: "eva:droplet-fill",
    sx: {},
  },
  {
    path: PATH_PROFILE.root,
    // label: "Profile",
    icon: "eva:person-fill",
  },
];

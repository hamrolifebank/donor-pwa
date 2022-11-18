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
  register: "/register",
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

export const PATH_NEW = {
  root: ROOTS_NEW,
  id: path(ROOTS_NEW, "/[id]"),
  edit: path(ROOTS_NEW, "/edit"), // '/new/edit'
};

export const BOTTOM_NAVIGATION_OPTIONS = [
  {
    path: PATH_DASHBOARD.root,
    label: "Home",
    icon: "eva:home-outline",
    // icon: <DashboardIcon />,
  },
  {
    path: PATH_ASSETS.root,
    label: "Assets",
    icon: "eva:briefcase-outline",
    sx: {},
  },
  {
    path: PATH_ASSETS.root,
    label: "",
    icon: "fluent:qr-code-24-filled",
    sx: {
      fontWeight: "fontWeightBold",
      // borderRadius: '50%',
      backgroundColor: "primary.main",
      color: "primary.contrastText",
    },
    iconStyle: {
      transform: "scale(2)",
    },
  },
  {
    path: PATH_ASSETS.root,
    label: "Vault",
    icon: "eva:file-outline",
  },
  {
    path: PATH_PROFILE.root,
    label: "Profile",
    icon: "eva:person-outline",
  },
  {
    path: PATH_NEW.root,
    label: "New",
    icon: "eva:person-outline",
  },
];

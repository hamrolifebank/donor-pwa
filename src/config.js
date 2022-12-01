// routes
import { PATH_DASHBOARD } from "@routes/paths";

// API
// ----------------------------------------------------------------------

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "";
export const HOST_API = process.env.NEXT_PUBLIC_HOST_API || "";

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.root;

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 88,
  H_DASHBOARD_DESKTOP: 92,
  H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
};

export const NAV = {
  W_BASE: 260,
  W_DASHBOARD: 280,
  W_DASHBOARD_MINI: 88,
  //
  H_DASHBOARD_ITEM: 48,
  H_DASHBOARD_ITEM_SUB: 36,
  //
  H_DASHBOARD_ITEM_HORIZONTAL: 32,
};

export const ICON = {
  NAV_ITEM: 24,
  NAV_ITEM_HORIZONTAL: 22,
  NAV_ITEM_MINI: 22,
};

//UTILS
export const STORAGE = {
  LOCAL_STORAGE: "localStorage",
  INDEX_DB: "indexDB",
};

export const OTPLENGTH = 2;

//COLORS
// export const PIECHARTCOLORS = {
//   "A+": "#FFAB00",
//   "B+": "#CF3D3C",
//   "AB+": "#00B8D9",
//   "O+": "#FF5630",
//   "Under 18": "#FFAB00",
//   "18 - 29": "#CF3D3C",
//   "30 - 39": "#00B8D9",
//   "40 - 49": "#FF5630",
//   "50 - 59": "#FF4579",
//   Male: "#FFAB00",
//   Female: "#CF3D3C",
//   Others: "#FF4579",
//   Unknown: "#00B8D9",
//   default: "#000000",
// };

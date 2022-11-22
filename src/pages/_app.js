// ----------------------------------------------------------------------

import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
// next
import Head from "next/head";
// utils
import createEmotionCache from "../utils/createEmotionCache";
// theme
import ThemeProvider from "../theme";
import { SettingsProvider } from "@components/settings";
import { AppAuthProvider } from "@contexts/AuthContext";

import AuthGuard from "@guards/AuthGuard";
import { AppProvider } from "@contexts/AppContext";

// locales
// components

// Check our docs
// https://docs.minimals.cc/authentication/js-version

// import { AuthProvider } from "../auth/JwtContext";

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache();

console.log("in main app");

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};

export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppAuthProvider>
        <AppProvider />
        <SettingsProvider>
          {/* <AuthProvider> */}
          <ThemeProvider>
            <AuthGuard>{getLayout(<Component {...pageProps} />)}</AuthGuard>
          </ThemeProvider>
          {/* </AuthProvider> */}
          <AppProvider />
        </SettingsProvider>
      </AppAuthProvider>
    </CacheProvider>
  );
}

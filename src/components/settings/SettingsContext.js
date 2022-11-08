import PropTypes from "prop-types";
import {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";
//
import { defaultSettings } from "./config";

// ----------------------------------------------------------------------

const initialState = {
  ...defaultSettings,
  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},
};

// ----------------------------------------------------------------------

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context)
    throw new Error("useSettingsContext must be use inside SettingsProvider");

  return context;
};

// ----------------------------------------------------------------------

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

export function SettingsProvider({ children }) {
  const [themeMode, setThemeMode] = useState(defaultSettings.themeMode);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mode = getCookie("themeMode") || defaultSettings.themeMode;
      setThemeMode(mode);
    }
  }, []);

  // Mode

  const onToggleMode = useCallback(() => {
    const value = themeMode === "light" ? "dark" : "light";
    setThemeMode(value);
    setCookie("themeMode", value);
  }, [themeMode]);

  const onChangeMode = useCallback((event) => {
    const value = event.target.value;
    setThemeMode(value);
    setCookie("themeMode", value);
  }, []);

  const value = useMemo(
    () => ({
      // Mode
      themeMode,
      onToggleMode,
      onChangeMode,
    }),
    [onChangeMode, themeMode, onToggleMode]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

// ----------------------------------------------------------------------

function getCookie(name) {
  if (typeof document === "undefined") {
    throw new Error(
      "getCookie() is not supported on the server. Fallback to a different value when rendering on the server."
    );
  }

  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts[1].split(";").shift();
  }

  return undefined;
}

function setCookie(name, value, exdays = 3) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function removeCookie(name) {
  document.cookie = `${name}=;path=/;max-age=0`;
}

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type AuthContextValue = {
  token: string | null;
  email: string | null;
  isSuperAdmin: boolean;
  isAuthenticated: boolean;
  login: (token: string, email: string, isSuperAdmin: boolean) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "goftus_admin_token";
const EMAIL_KEY = "goftus_admin_email";
const SUPER_KEY = "goftus_admin_super";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(STORAGE_KEY));
  const [email, setEmail] = useState<string | null>(() => localStorage.getItem(EMAIL_KEY));
  const [isSuperAdmin, setIsSuperAdmin] = useState<boolean>(() => {
    return localStorage.getItem(SUPER_KEY) === "true";
  });

  const login = useCallback((newToken: string, nextEmail: string, nextIsSuper: boolean) => {
    localStorage.setItem(STORAGE_KEY, newToken);
    setToken(newToken);
    localStorage.setItem(EMAIL_KEY, nextEmail);
    localStorage.setItem(SUPER_KEY, String(nextIsSuper));
    setEmail(nextEmail);
    setIsSuperAdmin(nextIsSuper);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
    localStorage.removeItem(EMAIL_KEY);
    localStorage.removeItem(SUPER_KEY);
    setEmail(null);
    setIsSuperAdmin(false);
  }, []);

  const value = useMemo(
    () => ({
      token,
      email,
      isSuperAdmin,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token, email, isSuperAdmin, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

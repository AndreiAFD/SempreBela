import React, { createContext, PropsWithChildren } from 'react';

const AppThemeContext = createContext({});

const AppThemeContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppThemeContext.Provider value={{}}>{children}</AppThemeContext.Provider>
  );
};

export { AppThemeContext, AppThemeContextProvider };

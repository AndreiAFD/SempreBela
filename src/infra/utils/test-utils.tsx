import React from 'react';
import { render } from '@testing-library/react-native';
import {
  AppThemeContext,
  AppThemeContextProvider,
} from '@infra/contexts/themeContext';
import { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <AppThemeContextProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </AppThemeContextProvider>
  );
};

// <TranslationProvider messages={defaultStrings}>
//   {children}
// </TranslationProvider>

const customRender = (ui: React.ReactElement, options: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };

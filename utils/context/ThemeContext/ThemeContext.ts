import React from 'react';

interface ThemeContextValues {
  theme: 'light' | 'dark';
}

const ThemeContext = React.createContext<ThemeContextValues>({
  theme: 'light',
});

export const useTheme = () => React.useContext(ThemeContext);
export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;

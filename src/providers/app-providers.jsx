import { ThemeProvider } from "./theme-provider";


export default function AppProviders({ children }) {
  return (
    <ThemeProvider>
     {children}
    </ThemeProvider>
  );
}

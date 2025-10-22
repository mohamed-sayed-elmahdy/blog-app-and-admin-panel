import { ThemeProvider } from "@/providers/ThemeProvider";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";


export default function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </ThemeProvider>
  );
}

import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata = {
  title: "Fresh Basket Hyderabad | Fresh Fruits",
  description: "Fresh fruits in Hyderabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
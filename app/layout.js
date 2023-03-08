import Header from "@/components/header/header";
import "../styles/global.css";
import "../styles/reset.css";
import { Providers } from "./provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <header>
            {/* <Header /> */}
          </header>
          {children}
        </body>
      </Providers>
    </html>
  );
}

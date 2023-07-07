import NavbarComponent from "./components/navbar/navbar";
import NotificationComponent from "./components/notification/notification";
import "./globals.css";
import { Poppins } from "next/font/google";
import ReduxProvider from "./redux/reduxProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Inicio - adoteumpet",
  description: "Pagina inicial do adoteumpet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="pt-br" className={poppins.className}>
        <body>
          <NavbarComponent />
          <NotificationComponent />
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}

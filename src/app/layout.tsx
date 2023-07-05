import NavbarComponent from "./components/navbar/navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Inicio - AdoteUmPet",
  description: "Pagina inicial do AdoteUmPet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className + ` bg-white_custom `}>
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}

import AboutComponent from "./components/about/about";
import ContactComponent from "./components/contact/contact";
import FooterComponent from "./components/footer/footer";
import HeaderComponent from "./components/header/header";
import ServicesComponent from "./components/servicesComponent/services";

export default function Home() {
  return (
    <main className=" w-full overflow-hidden">
      <div className="page w-full grid gap-5 min-h-screen px-p_page_l max-lg:px-p_page_s container mx-auto ">
        <HeaderComponent />
        <AboutComponent />
        <ServicesComponent />
        <ContactComponent />
        <FooterComponent />
      </div>
    </main>
  );
}

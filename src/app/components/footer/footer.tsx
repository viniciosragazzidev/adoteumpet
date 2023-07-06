import Logo from "../ui/logo";

const FooterComponent = () => {
  return (
    <footer className="w-full min-h-[3.5rem] justify-center items-center container">
      <div className="content flex items-center justify-between gap-1 max-sm:gap-4 max-sm:py-4 max-sm:flex-col-reverse">
        <span className="text-sm max-sm:text-xs font-semibold text-prussian_blue">
          Feito com 💌 por{" "}
          <a href="https://viniciosragazzi-htbe.vercel.app/" target="_blank">
            Vinicios Ragazzi
          </a>
        </span>
        <span className="text-sm">
          <Logo styleCustom="text-lg" />
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;

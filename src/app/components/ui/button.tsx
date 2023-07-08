import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  hrf: string;
  classe?: string; // Nova prop adicionada
}

const Button = ({ children, hrf, classe }: ButtonProps) => {
  return (
    <a
      href={hrf}
      className={`w-full px-5 py-2 bg-curious-blue-500 text-white font-medium rounded-md cursor-pointer transition-all hover:opacity-95`}
    >
      <Link href={hrf}>{children}</Link>
    </a>
  );
};

export default Button;

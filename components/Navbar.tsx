import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="w-full z-10 absolute">
      <nav className="flex mx-auto justify-between max-w-[1440px] items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            className="object-contain"
            width={118}
            height={18}
          />
        </Link>

        <CustomButton
          title="Sign in"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          btnType="button"
        />
      </nav>
    </header>
  );
};

export default Navbar;

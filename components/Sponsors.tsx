import JetbrainsLogo from "@/public/sponsors/jetbrains.svg";
import MakeInIndiaLogo from "@/public/sponsors/make-in-india.svg";
import LogoHere from "@/public/sponsors/logo-here.png";
import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
      <h2 className="text-center text-lg font-semibold leading-8 text-gray-900"></h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <Image
          src={MakeInIndiaLogo}
          alt={"make-in-india"}
          className={"col-span-2 max-h-16 w-full object-contain lg:col-span-1"}
        />
        <Image
          src={JetbrainsLogo}
          alt={"jetbrains"}
          className={"col-span-2 max-h-20 w-full object-contain lg:col-span-1"}
        />
        <Image
          src={LogoHere}
          alt={"logo-here"}
          className={"col-span-2 max-h-8 w-full object-contain lg:col-span-1"}
        />
        <Image
          src={LogoHere}
          alt={"logo-here"}
          className={"col-span-2 max-h-8 w-full object-contain lg:col-span-1"}
        />
      </div>
    </div>
  );
}

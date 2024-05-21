import {ArrowDownTrayIcon} from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl pt-28 sm:pt-32 lg:pt-28">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Checkout latest announcements.{" "}
            <a
              href="https://twitter.com/rlxos_dev"
              className="font-semibold text-indigo-600"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Securely <u>Mutable</u> Linux distribution
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            rlxos is an <u>Independent</u>, OpenSource and <u>Safe</u> Linux
            distribution with on demand mutability
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://sourceforge.net/projects/rlxos/files/releases/stable/rlxos-stable-installer.iso/download"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

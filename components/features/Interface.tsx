import {BoltIcon, CodeBracketIcon} from "@heroicons/react/20/solid";
import Image from "next/image";

import InterfaceImage from "@/public/interface.png";

const features = [
  {
    name: "Fast and responsive",
    description:
      "A beautiful, lightweight and highly customizable Xfce4 desktop environment to boost your productivity.",
    icon: BoltIcon,
  },
  {
    name: "Self Managed",
    description: "Zero to a little terminal commands used to manage rlxos",
    icon: CodeBracketIcon,
  },
];

export default function Interface() {
  return (
    <div className="overflow-hidden bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Interface
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Easy to use
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Improved user experience and interface design
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={InterfaceImage}
            alt={"interface image"}
            className={
              "w-[48rem] max-w-none ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            }
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

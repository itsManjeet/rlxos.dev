export default function Footer() {
  return (
    <footer className="border-blue-gray-50 mx-auto flex flex max-w-7xl flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t py-6 text-center md:justify-between">
      <p className="block text-sm font-semibold leading-6 text-gray-900">
        © 2023 rlxos
      </p>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
        <li>
          <a
            href="https://raw.githubusercontent.com/itsManjeet/rlxos/preview/LICENSE"
            className="block text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </a>
        </li>
        <li>
          <a
            href="https://github.com/itsManjeet/rlxos/fork"
            className="block text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </a>
        </li>
      </ul>
    </footer>
  );
}

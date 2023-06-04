import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            width={50}
            height={50}
            src="https://madanbajgai.com.np/madmax.avif"
            alt="Logo"
          />
        </Link>
        <h1>BlogX</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center "
        >
          Sign Up to the BlogX
        </Link>
      </div>
    </header>
  );
}

export default Header;

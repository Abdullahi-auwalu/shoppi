import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link href="/" className="navbar_link relative">
            HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

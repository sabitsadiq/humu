import Link from "next/link";
import { FiMenu } from "react-icons/fi";
const Navbar = ({ toggleSide }) => {
  return (
    <div className="bg-white w-[100%] fixed top-0 z-10 p-4">
      <div className="container  flex justify-between md:w-[95%] mx-auto">
        <div className="text-[24px]">HuMu</div>
        <div className="hidden md:flex gap-6 text-[18px]">
          <Link href="/">About</Link>
          <Link href="/">Features</Link>
          <Link href="/">Reviews</Link>
        </div>
        <a
          href="/"
          className="hidden md:flex px-4 py-1 border-none text-[20px] leading-[26.6px] rounded-[32px] items-center bg-[#042F88] text-[#fff] hover:bg-[#fff] hover:text-[black] hover:ring-[#042F88] ring-1"
        >
          Sign Up
        </a>
        <div className="md:hidden text-[24px]" onClick={toggleSide}>
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

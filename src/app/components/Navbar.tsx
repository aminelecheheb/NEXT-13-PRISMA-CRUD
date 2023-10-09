import Link from "next/link";
import { getServerSession } from "next-auth";
import { LogoutButton, LoginButton } from "../auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav>
      <div>logo</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div>{session ? <LogoutButton /> : <LoginButton />}</div>
    </nav>
  );
};

export default Navbar;

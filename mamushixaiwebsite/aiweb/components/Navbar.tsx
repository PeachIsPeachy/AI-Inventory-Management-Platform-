// components/Navbar.tsx
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">WasteZero</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/pricing" className="hover:underline">
              Pricing
            </a>
          </li>
          {session ? (
            <li>
              <a href="/dashboard" className="hover:underline">
                Dashboard
              </a>
            </li>
          ) : (
            <li>
              <a href="/login" className="hover:underline">
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

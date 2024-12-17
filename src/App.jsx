import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Modal from "./components/Modal";
import Footer from './components/Footer';
import AboutUs from "./views/AboutUs";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);  // Mengatur state untuk navbar
  
  return (
    <div>
      {false && false ? <Modal msg={"message"} type={"error"} /> : ''}
      
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-20">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Menu Burger Icon (untuk mobile) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}  // Toggle menu open/close
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLink end to="/about-us" className="text-sm font-semibold leading-6 text-gray-900">
              About Us
            </NavLink>
            <NavLink end to="/campaign" className="text-sm font-semibold leading-6 text-gray-900">
              Campaigns
            </NavLink>
            <NavLink end to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact
            </NavLink>
          </div>
        </nav>

        {/* Menu Mobile */}
        <div className={`lg:hidden ${navbarOpen ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 z-10 bg-white bg-opacity-75"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
              </Link>
              <button
                type="button"
                onClick={() => setNavbarOpen(false)} // Close menu on button click
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink
                    end
                    to="/about-us"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500"
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    end
                    to="/campaign"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500"
                  >
                    Campaigns
                  </NavLink>
                  <NavLink
                    end
                    to="/contact"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <hr className="mb-4" />

      <div>
        <Outlet />
      </div>

      <footer>
        <div className="mx-auto max-w-7xl mb-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-3">
          <div></div>
          <div></div>
        </div>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

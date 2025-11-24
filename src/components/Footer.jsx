import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pb-10 pt-20 text-black lg:pb-20 lg:pt-[120px]">
      <div className="max-w-7xl mx-auto px-4 container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <a href="/#" className="mb-6 inline-block max-w-[160px]">
                <img
                  src="https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/logo-dark.svg"
                  alt="logo"
                  className="max-w-full"
                />
              </a>
              <p className="mb-7 text-base text-black">
                Sed ut perspiciatis undmnis is iste natus error sit amet
                voluptatem totam rem aperiam.
              </p>
              <p className="flex items-center text-sm font-medium text-black">
                <span className="mr-3 text-primary">
                  {/* SVG icon here */}
                </span>
                <span>+012 (345) 678 99</span>
              </p>
            </div>
          </div>

          <LinkGroup header="Resources">
            <NavLink link="/#" label="SaaS Development" />
            <NavLink link="/#" label="Our Products" />
            <NavLink link="/#" label="User Flow" />
            <NavLink link="/#" label="User Strategy" />
          </LinkGroup>
          <LinkGroup header="Company">
            <NavLink link="/#" label="About TailGrids" />
            <NavLink link="/#" label="Contact & Support" />
            <NavLink link="/#" label="Success History" />
            <NavLink link="/#" label="Setting & Privacy" />
          </LinkGroup>
          <LinkGroup header="Quick Links">
            <NavLink link="/#" label="Premium Support" />
            <NavLink link="/#" label="Our Services" />
            <NavLink link="/#" label="Know Our Team" />
            <NavLink link="/#" label="Download App" />
          </LinkGroup>

          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-black">
                Follow Us On
              </h4>
              <div className="mb-6 flex items-center">
                {/* Social icons */}
                <a
                  href="#"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-black text-black hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  {/* SVG */}
                </a>
                {/* Repeat other social icons */}
              </div>
              <p className="text-base text-black">&copy; 2025 TailGrids</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SVGs */}
      <div>
        <span className="absolute bottom-0 left-0 z-[-1]">{/* SVG */}</span>
        <span className="absolute right-10 top-10 z-[-1]">{/* SVG */}</span>
      </div>
    </footer>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => (
  <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
    <div className="mb-10 w-full">
      <h4 className="mb-9 text-lg font-semibold text-black">{header}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  </div>
);

const NavLink = ({ link, label }) => (
  <li>
    <a
      href={link}
      className="inline-block text-base leading-loose text-black hover:text-primary"
    >
      {label}
    </a>
  </li>
);

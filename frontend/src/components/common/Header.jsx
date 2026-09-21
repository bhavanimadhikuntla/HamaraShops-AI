
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Menu,
  X,
  ArrowUpRight,
  Cpu,
  ChevronDown,
  Linkedin,
  ExternalLink,
  CalendarDays,
} from 'lucide-react';

const LINKEDIN_URL =
  'https://www.linkedin.com/in/madhikuntla-bhavani-7943ab1b0';

const YOUTUBE_URL =
  'https://www.youtube.com/embed/pxaMqyFmHO0?autoplay=1&rel=0';

const Header = () => {
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [companyProfileOpen, setCompanyProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  /*
   * =========================================================
   * INDUSTRIES
   * =========================================================
   */

  const industries = [
    {
      name: 'Retail',
      path: '/industries/retail',
    },
    {
      name: 'Financial Services',
      path: '/industries/financial-services',
    },
    {
      name: 'Media & Entertainment',
      path: '/industries/media-entertainment',
    },
    {
      name: 'Healthcare & Life Sciences',
      path: '/industries/healthcare-life-sciences',
    },
    {
      name: 'Manufacturing',
      path: '/industries/manufacturing',
    },
  ];

  /*
   * =========================================================
   * CLOSE MENUS
   * =========================================================
   */

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setSearchModalOpen(false);
    setCompanyProfileOpen(false);
  };

  /*
   * =========================================================
   * COMPANY PROFILE EVENT
   * =========================================================
   */

  useEffect(() => {
    const openProfile = () => {
      setCompanyProfileOpen(true);
      setMobileMenuOpen(false);
      setActiveDropdown(null);
      setSearchModalOpen(false);
    };

    window.addEventListener('open-company-profile', openProfile);

    return () => {
      window.removeEventListener(
        'open-company-profile',
        openProfile
      );
    };
  }, []);

  /*
   * =========================================================
   * CLOSE WHEN ROUTE CHANGES
   * =========================================================
   */

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setSearchModalOpen(false);
  }, [location.pathname]);

  /*
   * =========================================================
   * ESCAPE KEY
   * =========================================================
   */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setSearchModalOpen(false);
        setCompanyProfileOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  /*
   * =========================================================
   * BODY SCROLL LOCK
   * =========================================================
   */

  useEffect(() => {
    if (
      mobileMenuOpen ||
      searchModalOpen ||
      companyProfileOpen
    ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [
    mobileMenuOpen,
    searchModalOpen,
    companyProfileOpen,
  ]);

  /*
   * =========================================================
   * SEARCH
   * =========================================================
   */

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return;
    }

    setSearchModalOpen(false);
    setSearchQuery('');

    if (query.includes('about')) {
      window.location.href = '/about';
    } else if (query.includes('industry')) {
      window.location.href = '/industries';
    } else if (
      query.includes('use case') ||
      query.includes('usecase')
    ) {
      window.location.href = '/use-cases';
    } else if (query.includes('architecture')) {
      window.location.href = '/architecture';
    } else if (query.includes('business')) {
      window.location.href = '/business-value';
    } else if (query.includes('contact')) {
      window.location.href = '/contact';
    } else if (
      query.includes('appointment') ||
      query.includes('schedule')
    ) {
      window.location.href = '/schedule-appointment';
    }
  };

  /*
   * =========================================================
   * NAVIGATION STYLE
   * =========================================================
   */

  const navLinkClass = ({ isActive }) =>
    `
      relative
      rounded-full
      px-5
      py-2.5
      text-[15px]
      font-medium
      whitespace-nowrap
      transition-all
      duration-200
      ${
        isActive
          ? 'bg-gradient-to-r from-[#ff6b6b] to-[#ff8a3d] text-white shadow-md'
          : 'text-gray-300 hover:text-white'
      }
    `;

  /*
   * =========================================================
   * INDUSTRIES DROPDOWN
   * =========================================================
   */

  const toggleIndustries = () => {
    setActiveDropdown(
      activeDropdown === 'industries'
        ? null
        : 'industries'
    );
  };

  /*
   * =========================================================
   * COMPONENT
   * =========================================================
   */

  return (
    <>
      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <header className="fixed left-0 right-0 top-4 z-50 px-3 sm:px-5 lg:px-6">

        <div
          className="
            mx-auto
            flex
            h-[96px]
            max-w-[1620px]
            items-center
            justify-between
            rounded-[28px]
            border
            border-white/10
            bg-[#0b0e12]/95
            px-4
            shadow-[0_10px_40px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            sm:px-6
            lg:px-7
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={handleNavClick}
            className="flex shrink-0 items-center gap-3"
          >

            <div className="relative">
              <img
                src="/logo.png"
                alt="HamaraShops.ai Logo"
                className="
                  h-12
                  w-12
                  rounded-xl
                  object-contain
                  sm:h-[50px]
                  sm:w-[50px]
                "
              />
            </div>

            <div className="flex items-baseline">
              <span
                className="
                  text-[22px]
                  font-bold
                  tracking-[-0.8px]
                  text-white
                  sm:text-[24px]
                "
              >
                HamaraShops
              </span>

              <span
                className="
                  text-[22px]
                  font-bold
                  tracking-[-0.8px]
                  text-[#ff6262]
                  sm:text-[24px]
                "
              >
                .ai
              </span>
            </div>

          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="
              hidden
              items-center
              gap-1
              rounded-full
              border
              border-white/10
              bg-[#10141a]
              p-1
              lg:flex
            "
          >

            {/* ABOUT */}

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={handleNavClick}
            >
              About
            </NavLink>

            {/* =================================================
                INDUSTRIES DROPDOWN
            ================================================= */}

            <div className="relative">

              <button
                type="button"
                onClick={toggleIndustries}
                className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  px-5
                  py-2.5
                  text-[15px]
                  font-medium
                  whitespace-nowrap
                  text-gray-300
                  transition
                  duration-200
                  hover:text-white
                "
              >
                Industries

                <ChevronDown
                  className={`
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-200
                    ${
                      activeDropdown === 'industries'
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />
              </button>

              {/* =================================================
                  DESKTOP INDUSTRIES DROPDOWN
                  ONLY THESE 5 OPTIONS
              ================================================= */}

              {activeDropdown === 'industries' && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    absolute
                    left-0
                    top-full
                    z-[70]
                    mt-3
                    w-80
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#11151b]
                    p-2
                    shadow-2xl
                  "
                >

                  {industries.map((industry) => (
                    <Link
                      key={industry.path}
                      to={industry.path}
                      onClick={handleNavClick}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        text-gray-300
                        transition
                        hover:bg-white/5
                        hover:text-[#ff7272]
                      "
                    >
                      <span>{industry.name}</span>

                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          opacity-0
                          transition-opacity
                          group-hover:opacity-100
                        "
                      />
                    </Link>
                  ))}

                </motion.div>
              )}

            </div>

            {/* AI USE CASES */}

            <NavLink
              to="/use-cases"
              className={navLinkClass}
              onClick={handleNavClick}
            >
              AI Use Cases
            </NavLink>

            {/* AI ARCHITECTURE */}

            <NavLink
              to="/architecture"
              className={navLinkClass}
              onClick={handleNavClick}
            >
              AI Architecture
            </NavLink>

            {/* BUSINESS VALUE */}

            <NavLink
              to="/business-value"
              className={navLinkClass}
              onClick={handleNavClick}
            >
              Business Value
            </NavLink>

            {/* CONTACT */}

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={handleNavClick}
            >
              Contact
            </NavLink>

          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="hidden items-center gap-3 lg:flex">

            {/* SEARCH */}

            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-[#11151b]
                text-gray-300
                transition
                duration-200
                hover:border-white/30
                hover:bg-[#171c23]
                hover:text-white
              "
            >
              <Search className="h-[19px] w-[19px]" />
            </button>

            {/* SCHEDULE APPOINTMENT */}

            <Link
              to="/schedule-appointment"
              onClick={handleNavClick}
              className="
                group
                flex
                h-12
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-[#ff6565]
                to-[#ff8b3d]
                px-6
                text-[15px]
                font-semibold
                text-[#160b0b]
                shadow-lg
                transition-all
                duration-200
                hover:scale-[1.02]
                hover:shadow-[0_8px_30px_rgba(255,110,80,0.25)]
              "
            >
              <span>Schedule Appointment</span>

              <ArrowUpRight
                className="
                  h-[18px]
                  w-[18px]
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <div className="flex items-center lg:hidden">

            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="
                rounded-xl
                border
                border-white/10
                p-2.5
                text-gray-300
                transition
                hover:bg-white/10
                hover:text-white
              "
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

          </div>

        </div>

        {/* ===================================================
            MOBILE MENU
        =================================================== */}

        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mx-3
              mt-2
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#0b0e12]
              shadow-2xl
              lg:hidden
            "
          >

            <div className="max-h-[calc(100vh-120px)] overflow-y-auto p-4">

              <div className="flex flex-col gap-1">

                {/* ABOUT */}

                <NavLink
                  to="/about"
                  className={navLinkClass}
                  onClick={handleNavClick}
                >
                  About
                </NavLink>

                {/* =================================================
                    MOBILE INDUSTRIES
                ================================================= */}

                <button
                  type="button"
                  onClick={toggleIndustries}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-full
                    px-5
                    py-3
                    text-left
                    text-sm
                    font-medium
                    text-gray-300
                    transition
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  <span>Industries</span>

                  <ChevronDown
                    className={`
                      h-4
                      w-4
                      transition-transform
                      ${
                        activeDropdown === 'industries'
                          ? 'rotate-180'
                          : ''
                      }
                    `}
                  />
                </button>

                {/* =================================================
                    MOBILE INDUSTRIES OPTIONS
                    ONLY THESE 5
                ================================================= */}

                {activeDropdown === 'industries' && (
                  <div
                    className="
                      ml-3
                      border-l
                      border-white/10
                      pl-3
                    "
                  >

                    {industries.map((industry) => (
                      <Link
                        key={industry.path}
                        to={industry.path}
                        onClick={handleNavClick}
                        className="
                          block
                          rounded-lg
                          px-3
                          py-2.5
                          text-sm
                          text-gray-400
                          transition
                          hover:bg-white/5
                          hover:text-[#ff7272]
                        "
                      >
                        {industry.name}
                      </Link>
                    ))}

                  </div>
                )}

                {/* AI USE CASES */}

                <NavLink
                  to="/use-cases"
                  className={navLinkClass}
                  onClick={handleNavClick}
                >
                  AI Use Cases
                </NavLink>

                {/* AI ARCHITECTURE */}

                <NavLink
                  to="/architecture"
                  className={navLinkClass}
                  onClick={handleNavClick}
                >
                  AI Architecture
                </NavLink>

                {/* BUSINESS VALUE */}

                <NavLink
                  to="/business-value"
                  className={navLinkClass}
                  onClick={handleNavClick}
                >
                  Business Value
                </NavLink>

                {/* CONTACT */}

                <NavLink
                  to="/contact"
                  className={navLinkClass}
                  onClick={handleNavClick}
                >
                  Contact
                </NavLink>

                {/* SEARCH */}

                <button
                  type="button"
                  onClick={() => {
                    setSearchModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="
                    mt-3
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-gray-300
                    transition
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  <Search className="h-4 w-4" />
                  Search
                </button>

                {/* SCHEDULE APPOINTMENT */}

                <Link
                  to="/schedule-appointment"
                  onClick={handleNavClick}
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-[#ff6565]
                    to-[#ff8b3d]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#160b0b]
                  "
                >
                  <CalendarDays className="h-4 w-4" />

                  Schedule Appointment

                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                {/* LINKEDIN */}

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-gray-300
                    transition
                    hover:bg-white/5
                    hover:text-[#ff7272]
                  "
                >
                  <Linkedin className="h-4 w-4" />

                  LinkedIn

                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

              </div>

            </div>

          </motion.div>
        )}

      </header>

      {/* =====================================================
          SEARCH MODAL
      ===================================================== */}

      {searchModalOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-start
            justify-center
            bg-black/70
            px-4
            pt-28
            backdrop-blur-sm
          "
          onClick={() => setSearchModalOpen(false)}
        >

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              w-full
              max-w-2xl
              rounded-2xl
              border
              border-white/10
              bg-[#11151b]
              p-6
              shadow-2xl
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="mb-5 flex items-center justify-between">

              <div>
                <h2 className="text-xl font-semibold text-white">
                  Search HamaraShops.ai
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  Search across our website
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSearchModalOpen(false)
                }
                className="
                  rounded-lg
                  p-2
                  text-gray-400
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            <form onSubmit={handleSearchSubmit}>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-[#090c10]
                  px-4
                  py-3
                "
              >
                <Search className="h-5 w-5 text-gray-500" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Search About, Industries, AI Use Cases..."
                  autoFocus
                  className="
                    w-full
                    bg-transparent
                    text-white
                    outline-none
                    placeholder:text-gray-500
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-[#ff6565]
                  to-[#ff8b3d]
                  px-5
                  py-3
                  font-semibold
                  text-[#160b0b]
                  transition
                  hover:opacity-90
                "
              >
                <Search className="h-4 w-4" />

                Search
              </button>

            </form>

          </motion.div>

        </div>
      )}

      {/* =====================================================
          COMPANY PROFILE MODAL
      ===================================================== */}

      {companyProfileOpen && (
        <div
          className="
            fixed
            inset-0
            z-[110]
            flex
            items-center
            justify-center
            bg-black/80
            px-4
            py-8
            backdrop-blur-sm
          "
          onClick={() =>
            setCompanyProfileOpen(false)
          }
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            className="
              relative
              w-full
              max-w-5xl
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#0b0e12]
              shadow-2xl
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={() =>
                setCompanyProfileOpen(false)
              }
              className="
                absolute
                right-4
                top-4
                z-10
                rounded-full
                bg-black/60
                p-2
                text-white
                transition
                hover:bg-black/80
              "
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* YOUTUBE VIDEO */}

            <div className="aspect-video w-full bg-black">

              <iframe
                src={YOUTUBE_URL}
                title="HamaraShops.ai Company Profile"
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />

            </div>

            {/* COMPANY INFORMATION */}

            <div className="p-6 sm:p-8">

              <div
                className="
                  flex
                  flex-col
                  gap-5
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <div>

                  <div className="mb-2 flex items-center gap-2">

                    <Cpu className="h-5 w-5 text-[#ff7272]" />

                    <span
                      className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#ff7272]
                      "
                    >
                      Intelligence • Innovation
                    </span>

                  </div>

                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    HamaraShops.ai
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                    AI-powered digital solutions designed to
                    help organizations innovate, automate and
                    transform their business operations.
                  </p>

                </div>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[#ff7272]/30
                    bg-[#ff7272]/10
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#ff7272]
                    transition
                    hover:bg-[#ff7272]/20
                  "
                >
                  <Linkedin className="h-4 w-4" />

                  LinkedIn

                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

              </div>

            </div>

          </motion.div>

        </div>
      )}

    </>
  );
};

export default Header;


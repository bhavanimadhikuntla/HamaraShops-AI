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

  /* =========================================================
     INDUSTRIES
  ========================================================= */

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

  /* =========================================================
     CLOSE EVERYTHING
  ========================================================= */

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setSearchModalOpen(false);
    setCompanyProfileOpen(false);
  };

  /* =========================================================
     COMPANY PROFILE EVENT
  ========================================================= */

  useEffect(() => {
    const openProfile = () => {
      setCompanyProfileOpen(true);
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    };

    window.addEventListener(
      'open-company-profile',
      openProfile
    );

    return () => {
      window.removeEventListener(
        'open-company-profile',
        openProfile
      );
    };
  }, []);

  /* =========================================================
     CLOSE MENUS WHEN ROUTE CHANGES
  ========================================================= */

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setSearchModalOpen(false);
  }, [location.pathname]);

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

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
      document.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, []);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

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

  /* =========================================================
     SEARCH
  ========================================================= */

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
      query.includes('usecase') ||
      query.includes('ai')
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

  /* =========================================================
     NAVIGATION CLASS
  ========================================================= */

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-cyan-400'
        : 'text-gray-300 hover:text-white'
    }`;

  /* =========================================================
     INDUSTRIES CLICK
  ========================================================= */

  const toggleIndustries = () => {
    setActiveDropdown(
      activeDropdown === 'industries'
        ? null
        : 'industries'
    );
  };

  /* =========================================================
     COMPONENT
  ========================================================= */

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* =================================================
              LOGO + HAMARASHOPS.AI TEXT
          ================================================= */}

          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center gap-3 shrink-0"
          >

            {/* LOGO FROM PUBLIC FOLDER */}

            <img
              src="/logo.png"
              alt="HamaraShops.ai Logo"
              className="h-10 w-10 object-contain"
            />

            {/* COMPANY NAME */}

            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                HamaraShops
                <span className="text-cyan-400">
                  .ai
                </span>
              </span>
            </div>

          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden items-center gap-1 lg:flex">

            {/* HOME */}

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={handleNavClick}
            >
              Home
            </NavLink>

            {/* ABOUT */}

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={handleNavClick}
            >
              About
            </NavLink>

            {/* =================================================
                INDUSTRIES
            ================================================= */}

            <div className="relative">

              <button
                type="button"
                onClick={toggleIndustries}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                Industries

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === 'industries'
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </button>

              {/* DROPDOWN */}

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
                  className="absolute left-0 top-full z-[60] mt-2 w-80 overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl"
                >

                  <div className="p-2">

                    {/* ALL INDUSTRIES */}

                    <Link
                      to="/industries"
                      onClick={handleNavClick}
                      className="mb-1 flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-white/5"
                    >
                      <span>
                        All Industries
                      </span>

                      <ArrowUpRight className="h-4 w-4" />
                    </Link>

                    <div className="my-1 border-t border-white/10" />

                    {/* INDUSTRY LINKS */}

                    {industries.map((industry) => (
                      <Link
                        key={industry.path}
                        to={industry.path}
                        onClick={handleNavClick}
                        className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-cyan-400"
                      >
                        <span>
                          {industry.name}
                        </span>

                        <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    ))}

                  </div>
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
              DESKTOP ACTIONS
          ================================================= */}

          <div className="hidden items-center gap-3 lg:flex">

            {/* SEARCH */}

            <button
              type="button"
              onClick={() => {
                setSearchModalOpen(true);
              }}
              className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* LINKEDIN */}

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-cyan-400"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            {/* APPOINTMENT */}

            <Link
              to="/schedule-appointment"
              onClick={handleNavClick}
              className="group flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <CalendarDays className="h-4 w-4" />

              Schedule Appointment

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

          </div>

          {/* =================================================
              MOBILE BUTTONS
          ================================================= */}

          <div className="flex items-center gap-2 lg:hidden">

            {/* MOBILE SEARCH */}

            <button
              type="button"
              onClick={() =>
                setSearchModalOpen(true)
              }
              className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* MOBILE MENU */}

            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white"
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
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            className="border-t border-white/10 bg-slate-950 lg:hidden"
          >

            <div className="max-h-[calc(100vh-80px)] overflow-y-auto px-4 py-5">

              <div className="flex flex-col">

                {/* HOME */}

                <NavLink
                  to="/"
                  className={navLinkClass}
                  onClick={handleNavClick}
                >
                  Home
                </NavLink>

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
                  className="flex w-full items-center justify-between px-3 py-3 text-sm font-medium text-gray-300"
                >
                  <span>
                    Industries
                  </span>

                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === 'industries'
                        ? 'rotate-180'
                        : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'industries' && (
                  <div className="ml-4 border-l border-white/10 pl-3">

                    <Link
                      to="/industries"
                      onClick={handleNavClick}
                      className="block px-3 py-2.5 text-sm font-semibold text-cyan-400"
                    >
                      All Industries
                    </Link>

                    {industries.map((industry) => (
                      <Link
                        key={industry.path}
                        to={industry.path}
                        onClick={handleNavClick}
                        className="block px-3 py-2.5 text-sm text-gray-400 transition hover:text-cyan-400"
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

                {/* APPOINTMENT */}

                <Link
                  to="/schedule-appointment"
                  onClick={handleNavClick}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950"
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
                  className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-cyan-400"
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
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-sm"
          onClick={() =>
            setSearchModalOpen(false)
          }
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
            className="w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl"
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
                className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            <form onSubmit={handleSearchSubmit}>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950 px-4 py-3">

                <Search className="h-5 w-5 text-gray-500" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Search About, Industries, AI Use Cases..."
                  autoFocus
                  className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                />

              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
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
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
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
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"
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
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
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

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <div className="mb-2 flex items-center gap-2">

                    <Cpu className="h-5 w-5 text-cyan-400" />

                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
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
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400/20"
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
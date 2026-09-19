import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Search,
  Menu,
  X,
  ArrowUpRight,
  Cpu,
  ChevronDown,
  Linkedin,
  ExternalLink,
  User,
  CalendarDays,
} from 'lucide-react';
import SearchModal from './SearchModal';

const LINKEDIN_URL =
  'https://www.linkedin.com/in/madhikuntla-bhavani-7943ab1b0';

const YOUTUBE_URL =
  'https://www.youtube.com/embed/pxaMqyFmHO0?autoplay=1&rel=0';

// =====================================================
// NAVIGATION
// =====================================================

const navLinks = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Industries',
    path: '/industries',
  },
  {
    name: 'AI Use Cases',
    path: '/use-cases',
  },
  {
    name: 'AI Architecture',
    path: '/architecture',
  },
  {
    name: 'Business Value',
    path: '/business-value',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

// =====================================================
// DROPDOWN ITEMS
// =====================================================

const dropdownItems = {
  Industries: [
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
  ],
};

// =====================================================
// HEADER
// =====================================================

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [companyProfileOpen, setCompanyProfileOpen] =
    useState(false);
  const [activeDropdown, setActiveDropdown] =
    useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // ===================================================
  // SCROLL HANDLER
  // ===================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  // ===================================================
  // COMPANY PROFILE EVENT
  // ===================================================

  useEffect(() => {
    const handleOpenCompanyProfile = () => {
      setCompanyProfileOpen(true);
      setMobileMenuOpen(false);
      setSearchModalOpen(false);
      setActiveDropdown(null);
    };

    window.addEventListener(
      'open-company-profile',
      handleOpenCompanyProfile
    );

    return () => {
      window.removeEventListener(
        'open-company-profile',
        handleOpenCompanyProfile
      );
    };
  }, []);

  // ===================================================
  // ESCAPE KEY
  // ===================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setCompanyProfileOpen(false);
        setSearchModalOpen(false);
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, []);

  // ===================================================
  // BODY SCROLL LOCK
  // ===================================================

  useEffect(() => {
    const shouldLock =
      mobileMenuOpen ||
      searchModalOpen ||
      companyProfileOpen;

    document.body.style.overflow = shouldLock
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [
    mobileMenuOpen,
    searchModalOpen,
    companyProfileOpen,
  ]);

  // ===================================================
  // CLOSE MOBILE MENU
  // ===================================================

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // ===================================================
  // SEARCH
  // ===================================================

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      return;
    }

    console.log('Search:', query);

    setSearchModalOpen(false);
  };

  // ===================================================
  // CLOSE MODALS
  // ===================================================

  const closeCompanyProfile = () => {
    setCompanyProfileOpen(false);
  };

  const closeSearch = () => {
    setSearchModalOpen(false);
  };

  // ===================================================
  // APPOINTMENT NAVIGATION
  // ===================================================

  const handleAppointmentClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setSearchModalOpen(false);
    setCompanyProfileOpen(false);
  };

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <>
      {/* =================================================
          MAIN HEADER
      ================================================= */}

      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-[9999]
          w-full
          transition-all
          duration-300
          ${
            isScrolled
              ? `
                bg-[#080b11]/95
                backdrop-blur-xl
                border-b
                border-white/10
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              `
              : `
                bg-[#080b11]/90
                backdrop-blur-lg
                border-b
                border-white/10
              `
          }
        `}
      >
        <div
          className="
            w-full
            max-w-[1600px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
          "
        >
          <div
            className="
              min-h-[76px]
              flex
              items-center
              justify-between
              gap-4
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="
                group
                flex
                items-center
                gap-3
                shrink-0
              "
            >
              <div
                className="
                  relative
                  w-10
                  h-10
                  rounded-xl
                  p-[1px]
                  bg-gradient-to-br
                  from-[#ff6b6b]
                  to-[#4cd6ff]
                  shadow-[0_0_25px_rgba(76,214,255,0.2)]
                "
              >
                <div
                  className="
                    w-full
                    h-full
                    rounded-xl
                    bg-[#090c12]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Cpu
                    className="
                      w-5
                      h-5
                      text-[#4cd6ff]
                      group-hover:scale-110
                      transition-transform
                    "
                  />
                </div>
              </div>

              <div className="hidden sm:block">
                <div
                  className="
                    text-white
                    font-extrabold
                    text-lg
                    leading-none
                    tracking-tight
                  "
                >
                  HamaraShops
                  <span className="text-[#4cd6ff]">
                    .ai
                  </span>
                </div>

                <div
                  className="
                    text-[9px]
                    text-[#7f8aa3]
                    uppercase
                    tracking-[0.22em]
                    mt-1
                  "
                >
                  Intelligence • Innovation
                </div>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="
                hidden
                lg:flex
                items-center
                justify-center
                gap-1
                flex-1
              "
            >
              {navLinks.map((link) => {
                const hasDropdown = Boolean(
                  dropdownItems[link.name]
                );

                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (hasDropdown) {
                        setActiveDropdown(link.name);
                      }
                    }}
                    onMouseLeave={() => {
                      if (hasDropdown) {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `
                        flex
                        items-center
                        gap-1
                        px-3
                        py-2.5
                        rounded-lg
                        text-sm
                        font-medium
                        whitespace-nowrap
                        transition-all
                        duration-200
                        ${
                          isActive
                            ? `
                              text-white
                              bg-white/[0.08]
                            `
                            : `
                              text-[#b2bdcf]
                              hover:text-white
                              hover:bg-white/[0.06]
                            `
                        }
                      `}
                    >
                      {link.name}

                      {hasDropdown && (
                        <ChevronDown
                          className={`
                            w-3.5
                            h-3.5
                            transition-transform
                            ${
                              activeDropdown ===
                              link.name
                                ? 'rotate-180'
                                : ''
                            }
                          `}
                        />
                      )}
                    </NavLink>

                    {/* =================================================
                        DESKTOP DROPDOWN
                    ================================================= */}

                    {hasDropdown &&
                      activeDropdown === link.name && (
                        <div
                          className="
                            absolute
                            top-full
                            left-0
                            pt-2
                            min-w-[235px]
                          "
                        >
                          <div
                            className="
                              p-2
                              rounded-xl
                              border
                              border-white/10
                              bg-[#0b0f16]/98
                              backdrop-blur-xl
                              shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                            "
                          >
                            {dropdownItems[
                              link.name
                            ].map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="
                                  flex
                                  items-center
                                  justify-between
                                  px-4
                                  py-3
                                  rounded-lg
                                  text-sm
                                  text-[#aeb8cc]
                                  hover:text-white
                                  hover:bg-white/[0.06]
                                  transition-all
                                "
                              >
                                <span>
                                  {item.name}
                                </span>

                                <ArrowUpRight
                                  className="
                                    w-4
                                    h-4
                                    text-[#4cd6ff]
                                  "
                                />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                );
              })}
            </nav>

            {/* =================================================
                DESKTOP RIGHT ACTIONS
            ================================================= */}

            <div
              className="
                hidden
                lg:flex
                items-center
                gap-2
                shrink-0
              "
            >
              {/* SEARCH */}

              <button
                type="button"
                onClick={() =>
                  setSearchModalOpen(true)
                }
                className="
                  w-10
                  h-10
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.04]
                  flex
                  items-center
                  justify-center
                  text-[#aeb8cc]
                  hover:text-white
                  hover:border-[#4cd6ff]/40
                  hover:bg-[#4cd6ff]/10
                  transition-all
                "
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* =================================================
                  SCHEDULE APPOINTMENT
              ================================================= */}

              <Link
                to="/schedule-appointment"
                onClick={handleAppointmentClick}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-xl
                  bg-gradient-to-r
                  from-[#ff6b6b]
                  to-[#ff8585]
                  text-[#50000a]
                  font-bold
                  text-sm
                  whitespace-nowrap
                  shadow-[0_0_25px_rgba(255,107,107,0.2)]
                  hover:shadow-[0_0_35px_rgba(255,107,107,0.4)]
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                <CalendarDays
                  className="
                    w-4
                    h-4
                    group-hover:rotate-6
                    transition-transform
                  "
                />

                <span>
                  Schedule Appointment
                </span>

                <ArrowUpRight
                  className="
                    w-4
                    h-4
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    transition-transform
                  "
                />
              </Link>
            </div>

            {/* =================================================
                MOBILE / TABLET ACTIONS
            ================================================= */}

            <div
              className="
                flex
                lg:hidden
                items-center
                gap-2
              "
            >
              {/* MOBILE SEARCH */}

              <button
                type="button"
                onClick={() =>
                  setSearchModalOpen(true)
                }
                className="
                  w-10
                  h-10
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.04]
                  flex
                  items-center
                  justify-center
                  text-[#aeb8cc]
                  hover:text-white
                  transition-all
                "
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* MOBILE MENU */}

              <button
                type="button"
                onClick={() =>
                  setMobileMenuOpen(
                    !mobileMenuOpen
                  )
                }
                className="
                  w-10
                  h-10
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.04]
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:border-[#4cd6ff]/40
                  transition-all
                "
                aria-label={
                  mobileMenuOpen
                    ? 'Close menu'
                    : 'Open menu'
                }
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[9990]
            lg:hidden
            bg-black/70
            backdrop-blur-md
          "
          onClick={closeMobileMenu}
        >
          <div
            className="
              absolute
              top-[76px]
              left-0
              right-0
              max-h-[calc(100vh-76px)]
              overflow-y-auto
              bg-[#090c12]
              border-t
              border-white/10
              shadow-2xl
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="p-5">
              {/* MOBILE NAV */}

              <div className="space-y-1">
                {navLinks.map((link) => {
                  const hasDropdown = Boolean(
                    dropdownItems[link.name]
                  );

                  return (
                    <div key={link.name}>
                      <div className="flex gap-2">
                        <NavLink
                          to={link.path}
                          onClick={() => {
                            if (!hasDropdown) {
                              closeMobileMenu();
                            }
                          }}
                          className="
                            flex-1
                            px-4
                            py-3.5
                            rounded-xl
                            text-base
                            font-semibold
                            text-[#aeb8cc]
                            hover:text-white
                            hover:bg-white/[0.06]
                          "
                        >
                          {link.name}
                        </NavLink>

                        {hasDropdown && (
                          <button
                            type="button"
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown ===
                                  link.name
                                  ? null
                                  : link.name
                              )
                            }
                            className="
                              w-12
                              rounded-xl
                              border
                              border-white/10
                              text-[#aeb8cc]
                              hover:text-white
                            "
                            aria-label={`Toggle ${link.name} submenu`}
                          >
                            <ChevronDown
                              className={`
                                w-4
                                h-4
                                mx-auto
                                transition-transform
                                ${
                                  activeDropdown ===
                                  link.name
                                    ? 'rotate-180'
                                    : ''
                                }
                              `}
                            />
                          </button>
                        )}
                      </div>

                      {/* MOBILE DROPDOWN */}

                      {hasDropdown &&
                        activeDropdown ===
                          link.name && (
                          <div
                            className="
                              ml-4
                              pl-3
                              border-l
                              border-[#4cd6ff]/20
                              mt-1
                              mb-2
                            "
                          >
                            {dropdownItems[
                              link.name
                            ].map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={
                                  closeMobileMenu
                                }
                                className="
                                  flex
                                  items-center
                                  justify-between
                                  px-4
                                  py-3
                                  text-sm
                                  text-[#8995aa]
                                  hover:text-white
                                "
                              >
                                <span>
                                  {item.name}
                                </span>

                                <ArrowUpRight
                                  className="
                                    w-4
                                    h-4
                                    text-[#4cd6ff]
                                  "
                                />
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>

              {/* =================================================
                  MOBILE APPOINTMENT
              ================================================= */}

              <div
                className="
                  mt-6
                  pt-6
                  border-t
                  border-white/10
                "
              >
                <Link
                  to="/schedule-appointment"
                  onClick={handleAppointmentClick}
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-4
                    rounded-xl
                    bg-gradient-to-r
                    from-[#ff6b6b]
                    to-[#ff8585]
                    text-[#50000a]
                    font-bold
                    shadow-[0_0_30px_rgba(255,107,107,0.2)]
                  "
                >
                  <CalendarDays className="w-5 h-5" />

                  <span>
                    Schedule Appointment
                  </span>

                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* =================================================
                  MOBILE LINKEDIN
              ================================================= */}

              <div className="mt-5">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-[#0A66C2]/30
                    bg-[#0A66C2]/10
                    text-[#4da3ff]
                    hover:text-white
                    hover:bg-[#0A66C2]/20
                    transition-all
                  "
                >
                  <Linkedin className="w-5 h-5" />

                  <span>LinkedIn</span>

                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          SEARCH MODAL
      ===================================================== */}

      {searchModalOpen && (
        <div
          className="
            fixed
            inset-0
            z-[10000]
            bg-black/75
            backdrop-blur-md
            flex
            items-start
            justify-center
            pt-[15vh]
            px-5
          "
          onClick={closeSearch}
        >
          <div
            className="
              w-full
              max-w-2xl
              rounded-2xl
              border
              border-white/10
              bg-[#0b0f16]
              p-6
              shadow-[0_30px_100px_rgba(0,0,0,0.6)]
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* SEARCH HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                mb-5
              "
            >
              <div>
                <h2
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  Search HamaraShops.ai
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    text-[#7f8aa3]
                  "
                >
                  Search our AI solutions and
                  services.
                </p>
              </div>

              <button
                type="button"
                onClick={closeSearch}
                className="
                  w-9
                  h-9
                  rounded-lg
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-[#8b96aa]
                  hover:text-white
                  hover:bg-white/10
                  transition-all
                "
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* SEARCH FORM */}

            <form
              onSubmit={handleSearchSubmit}
              className="relative"
            >
              <Search
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  w-5
                  h-5
                  text-[#647086]
                "
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(
                    event.target.value
                  )
                }
                placeholder="Search..."
                autoFocus
                className="
                  w-full
                  h-14
                  pl-12
                  pr-28
                  rounded-xl
                  border
                  border-white/10
                  bg-[#06080d]
                  text-white
                  outline-none
                  placeholder:text-[#59657a]
                  focus:border-[#4cd6ff]/50
                "
              />

              <button
                type="submit"
                className="
                  absolute
                  right-2
                  top-2
                  bottom-2
                  px-5
                  rounded-lg
                  bg-[#ff6b6b]
                  text-[#52000b]
                  font-bold
                  hover:bg-[#ff8585]
                  transition-all
                "
              >
                Search
              </button>
            </form>
          </div>
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
            z-[10001]
            bg-black/80
            backdrop-blur-md
            flex
            items-center
            justify-center
            px-5
            py-8
          "
          onClick={closeCompanyProfile}
        >
          <div
            className="
              relative
              w-full
              max-w-5xl
              max-h-[90vh]
              overflow-y-auto
              rounded-3xl
              border
              border-white/10
              bg-[#090d14]
              shadow-[0_40px_120px_rgba(0,0,0,0.7)]
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={closeCompanyProfile}
              className="
                absolute
                top-5
                right-5
                z-20
                w-10
                h-10
                rounded-full
                border
                border-white/10
                bg-black/60
                flex
                items-center
                justify-center
                text-white
                hover:bg-white/10
                transition-all
              "
              aria-label="Close company profile"
            >
              <X className="w-5 h-5" />
            </button>

            {/* VIDEO */}

            <div
              className="
                relative
                aspect-video
                bg-black
                rounded-t-3xl
                overflow-hidden
              "
            >
              <iframe
                src={YOUTUBE_URL}
                title="HamaraShops.ai Company Profile"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                "
                allow="
                  autoplay;
                  encrypted-media;
                  picture-in-picture
                "
                allowFullScreen
              />
            </div>

            {/* CONTENT */}

            <div className="p-7 sm:p-10">
              {/* TITLE + LINKEDIN */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-5
                "
              >
                <div>
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-3
                      py-1
                      rounded-full
                      border
                      border-[#ff6b6b]/20
                      bg-[#ff6b6b]/5
                      text-[#ffb3b0]
                      text-xs
                      font-mono
                      uppercase
                      tracking-widest
                    "
                  >
                    <User className="w-3.5 h-3.5" />

                    Company Profile
                  </div>

                  <h2
                    className="
                      mt-4
                      text-3xl
                      sm:text-4xl
                      font-extrabold
                      text-white
                    "
                  >
                    HamaraShops
                    <span className="text-[#4cd6ff]">
                      .ai
                    </span>
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[#8e9ab0]
                    "
                  >
                    Intelligence • Innovation •
                    Transformation
                  </p>
                </div>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-[#0A66C2]/40
                    bg-[#0A66C2]/10
                    text-white
                    font-semibold
                    hover:bg-[#0A66C2]/20
                    transition-all
                  "
                >
                  <Linkedin
                    className="
                      w-5
                      h-5
                      text-[#4da3ff]
                    "
                  />

                  <span>
                    Connect on LinkedIn
                  </span>

                  <ExternalLink
                    className="
                      w-4
                      h-4
                      text-[#4cd6ff]
                    "
                  />
                </a>
              </div>

              {/* ABOUT */}

              <div className="mt-8">
                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                    mb-3
                  "
                >
                  About HamaraShops.ai
                </h3>

                <p
                  className="
                    text-[#aeb8cc]
                    leading-relaxed
                  "
                >
                  HamaraShops.ai is focused on
                  building intelligent digital
                  experiences using artificial
                  intelligence, automation and
                  modern technology. Our goal is to
                  help organizations adopt practical,
                  scalable and high-performance AI
                  solutions.
                </p>
              </div>

              {/* HIGHLIGHTS */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-3
                  gap-4
                  mt-8
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-5
                  "
                >
                  <div
                    className="
                      text-[#4cd6ff]
                      text-sm
                    "
                  >
                    FOCUS
                  </div>

                  <div
                    className="
                      text-white
                      font-bold
                      mt-2
                    "
                  >
                    Artificial Intelligence
                  </div>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-5
                  "
                >
                  <div
                    className="
                      text-[#ff6b6b]
                      text-sm
                    "
                  >
                    APPROACH
                  </div>

                  <div
                    className="
                      text-white
                      font-bold
                      mt-2
                    "
                  >
                    Innovation & Automation
                  </div>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-5
                  "
                >
                  <div
                    className="
                      text-[#4cd6ff]
                      text-sm
                    "
                  >
                    VISION
                  </div>

                  <div
                    className="
                      text-white
                      font-bold
                      mt-2
                    "
                  >
                    AI-Powered Future
                  </div>
                </div>
              </div>

              {/* TAGLINE */}

              <div
                className="
                  mt-8
                  p-6
                  rounded-2xl
                  border
                  border-[#4cd6ff]/20
                  text-center
                  bg-gradient-to-r
                  from-[#ff6b6b]/5
                  via-transparent
                  to-[#4cd6ff]/5
                "
              >
                <p
                  className="
                    text-lg
                    sm:text-xl
                    font-extrabold
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-[#ff6b6b]
                    via-white
                    to-[#4cd6ff]
                  "
                >
                  HamaraShops.ai is an Application
                  Player in the Race of AI
                </p>
              </div>

              {/* FOOTER */}

              <div
                className="
                  mt-8
                  pt-6
                  border-t
                  border-white/10
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  justify-between
                  gap-4
                "
              >
                <span
                  className="
                    text-xs
                    text-[#667188]
                  "
                >
                  © {new Date().getFullYear()}{' '}
                  HamaraShops.ai. All rights
                  reserved.
                </span>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#4da3ff]
                    hover:text-white
                    transition-colors
                  "
                >
                  <Linkedin className="w-4 h-4" />

                  <span>LinkedIn</span>

                  <ExternalLink
                    className="w-3.5 h-3.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
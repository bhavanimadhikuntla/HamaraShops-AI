import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import {
  PlayCircle,
  ArrowDown,
  User,
  ArrowUpRight,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'framer-motion';

// Lazy load Three.js component to keep initial entry bundle lightweight
const Hero3DCanvas = lazy(() => import('./Hero3DCanvas'));

// LinkedIn Profile
const LINKEDIN_URL =
  'https://www.linkedin.com/in/madhikuntla-bhavani-7943ab1b0';

export default function HeroSection() {
  // Open Company Profile modal from Header.jsx
  const openCompanyProfile = () => {
    window.dispatchEvent(
      new CustomEvent('open-company-profile')
    );
  };

  return (
    <section
      className="
        relative
        w-full
        min-h-[100vh]
        flex
        flex-col
        items-center
        justify-center
        px-6
        overflow-hidden
        pt-20
      "
      style={{ perspective: 1000 }}
    >
      {/* 3D Background */}
      <Suspense
        fallback={
          <div
            className="
              absolute
              inset-0
              bg-[#0c0e12]/80
              opacity-50
              z-0
            "
          />
        }
      >
        <Hero3DCanvas />
      </Suspense>

      {/* Main Hero Content */}
      <div
        className="
          relative
          z-10
          text-center
          max-w-4xl
          mt-[-4vh]
          w-full
        "
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(40px)',
        }}
      >
        {/* Small Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            inline-block
            py-1
            px-4
            rounded-full
            border
            border-[#ff6b6b]/30
            bg-[#ff6b6b]/10
            text-[#ffb3b0]
            font-mono
            text-xs
            mb-6
            uppercase
            tracking-widest
          "
          style={{ transform: 'translateZ(10px)' }}
        >
          Next-Gen Intelligence
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            text-white
            mb-6
            leading-[1.1]
            font-headline-xl
            drop-shadow-2xl
          "
          style={{ transform: 'translateZ(25px)' }}
        >
          Transform Digital <br />

          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[#ff6b6b]
              to-[#4cd6ff]
            "
          >
            Experiences
          </span>{' '}
          with AI
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: 'easeOut',
          }}
          className="
            relative
            inline-flex
            items-center
            justify-center
            mb-5
            px-6
            py-3
            rounded-full
            border
            border-[#4cd6ff]/40
            bg-[#0a1628]/70
            backdrop-blur-md
            shadow-[0_0_25px_rgba(76,214,255,0.18)]
            max-w-full
          "
          style={{ transform: 'translateZ(18px)' }}
        >
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-r
              from-[#ff6b6b]/10
              via-transparent
              to-[#4cd6ff]/10
              blur-md
              pointer-events-none
            "
          />

          <span
            className="
              relative
              z-10
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              font-extrabold
              tracking-wide
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[#ff6b6b]
              via-white
              to-[#4cd6ff]
              drop-shadow-[0_0_12px_rgba(76,214,255,0.35)]
            "
          >
            HamaraShops.ai is an Application Player in the Race of AI
          </span>
        </motion.div>

        {/* Company Profile + LinkedIn + Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            mb-7
          "
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Company Profile */}
          <button
            onClick={openCompanyProfile}
            type="button"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              px-5
              py-2.5
              rounded-full
              border
              border-[#ff6b6b]/40
              bg-[#0a1628]/70
              backdrop-blur-md
              text-white
              text-sm
              font-semibold
              shadow-[0_0_20px_rgba(255,107,107,0.10)]
              hover:border-[#ff6b6b]
              hover:bg-[#ff6b6b]/10
              hover:shadow-[0_0_25px_rgba(255,107,107,0.25)]
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <User
              className="
                w-4 h-4
                text-[#ff6b6b]
                group-hover:scale-110
                transition-transform
              "
            />

            <span>Company Profile</span>

            <ArrowUpRight
              className="
                w-4 h-4
                text-[#4cd6ff]
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                transition-transform
              "
            />
          </button>

          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              px-5
              py-2.5
              rounded-full
              border
              border-[#0A66C2]/50
              bg-[#0A66C2]/10
              backdrop-blur-md
              text-white
              text-sm
              font-semibold
              shadow-[0_0_20px_rgba(10,102,194,0.10)]
              hover:border-[#0A66C2]
              hover:bg-[#0A66C2]/20
              hover:shadow-[0_0_25px_rgba(10,102,194,0.25)]
              transition-all
              duration-300
            "
          >
            <Linkedin
              className="
                w-4 h-4
                text-[#4da3ff]
                group-hover:scale-110
                transition-transform
              "
            />

            <span>LinkedIn</span>

            <ExternalLink
              className="
                w-3.5 h-3.5
                text-[#4cd6ff]
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                transition-transform
              "
            />
          </a>

          {/* Profile Picture */}
          <div
            className="
              relative
              flex
              items-center
              justify-center
              p-1
              rounded-full
              border
              border-[#4cd6ff]/40
              bg-[#0a1628]/70
              backdrop-blur-md
              shadow-[0_0_25px_rgba(76,214,255,0.18)]
              hover:border-[#4cd6ff]
              hover:shadow-[0_0_30px_rgba(76,214,255,0.30)]
              transition-all
              duration-300
            "
          >
            <img
              src="/profile.jpeg"
              alt="Bhavani"
              className="
                w-10
                h-10
                sm:w-11
                sm:h-11
                rounded-full
                object-cover
                border-2
                border-[#4cd6ff]/50
                shadow-[0_0_15px_rgba(76,214,255,0.18)]
              "
            />

            {/* Small Online/Active Indicator */}
            <span
              className="
                absolute
                bottom-0
                right-0
                w-3
                h-3
                rounded-full
                bg-[#4cd6ff]
                border-2
                border-[#0a1628]
                shadow-[0_0_10px_rgba(76,214,255,0.7)]
              "
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="
            text-base
            sm:text-lg
            text-[#bcc7dd]
            mb-10
            max-w-2xl
            mx-auto
            opacity-90
            leading-relaxed
            font-body-lg
          "
          style={{ transform: 'translateZ(15px)' }}
        >
          Empowering modern enterprises with sophisticated, high-performance
          artificial intelligence solutions designed for scale.
        </motion.p>

        {/* Main Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            items-center
          "
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Explore Use Cases */}
          <Link
            to="/industries"
            className="
              pulse-btn
              bg-[#ff6b6b]
              text-[#68000f]
              font-bold
              text-base
              px-10
              py-4
              rounded-xl
              hover:bg-[#ffb3b0]
              transition-all
              duration-300
              w-full
              sm:w-auto
              shadow-lg
              shadow-[#ff6b6b]/30
              text-center
              cursor-pointer
            "
          >
            Explore Use Cases
          </Link>

          {/* Explore Videos */}
          <Link
            to="/our-journey"
            className="
              bg-[#282a2e]/50
              backdrop-blur-md
              border
              border-[#584140]/50
              text-white
              font-semibold
              text-base
              px-10
              py-4
              rounded-xl
              hover:bg-[#333539]
              transition-all
              duration-300
              w-full
              sm:w-auto
              flex
              items-center
              justify-center
              gap-2
              text-center
              cursor-pointer
            "
          >
            <PlayCircle className="w-5 h-5 text-[#ff6b6b]" />
            <span>Explore Videos</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          animate-bounce
          opacity-60
          z-10
        "
        style={{ transform: 'translateZ(5px)' }}
      >
        <span
          className="
            font-mono
            text-[10px]
            text-[#bcc7dd]
            mb-2
            uppercase
            tracking-widest
          "
        >
          Scroll
        </span>

        <ArrowDown className="w-4 h-4 text-[#bcc7dd]" />
      </div>
    </section>
  );
}
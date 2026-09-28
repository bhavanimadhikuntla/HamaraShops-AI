
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Card3D from '../common/Card3D';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const glowColors = ['#ff6b6b', '#4cd6ff', '#ff6b6b'];

export default function LocationsSection() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCompanyLocations = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/company`);

        if (!response.ok) {
          throw new Error('Failed to load company information');
        }

        const company = await response.json();

        setLocations(company.locations || []);
      } catch (err) {
        console.error('Failed to load company locations:', err);
        setError('Unable to load office locations.');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyLocations();
  }, []);

  return (
    <section className="py-20 px-6 relative bg-radial-depth z-20 overflow-hidden border-t border-b border-[#3c475a]/20">

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff6b6b]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b6b]/10 border border-[#ff6b6b]/30 text-[#ffb3b0] text-xs font-mono mb-3 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Global Operations</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
            Locations
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mt-2 font-normal">
            Connecting intelligence across borders. Reach out to our global
            offices for enterprise solutions, customer support, or technical
            integration inquiries.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center text-slate-300 py-10 font-mono">
            Loading locations...
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="text-center text-red-300 py-10 font-mono">
            {error}
          </div>
        )}

        {/* Locations */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {locations.map((loc, idx) => (
              <motion.div
                key={`${loc.country}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex"
              >
                <Card3D
                  glowColor={glowColors[idx % glowColors.length]}
                  className="bg-[#0a1628]/60 border border-[#3c475a]/50 h-full flex flex-col justify-between p-6 sm:p-8 min-h-[320px] w-full"
                >
                  <div className="flex flex-col h-full justify-between">

                    <div>

                      {/* Location Title & Icon */}
                      <div className="flex items-center gap-2.5 mb-4">

                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.5,
                            ease: 'easeInOut'
                          }}
                          style={{
                            transformStyle: 'preserve-3d',
                            transform: 'translateZ(10px)'
                          }}
                        >
                          <MapPin className="w-5 h-5 text-[#ff6b6b] flex-shrink-0" />
                        </motion.div>

                        <h3 className="font-headline text-lg sm:text-xl text-white font-bold flex items-center gap-2 flex-wrap">

                          {loc.country}

                          {loc.type && (
                            <span className="font-mono text-[9px] bg-[#ff6b6b]/10 border border-[#ff6b6b]/30 text-[#ffb3b0] px-1.5 py-0.5 rounded tracking-wider uppercase font-semibold">
                              {loc.type}
                            </span>
                          )}

                        </h3>
                      </div>

                      {/* Address */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                        {loc.address}
                      </p>

                    </div>

                    {/* Contact Links */}
                    <div className="space-y-3 pt-4 border-t border-[#3c475a]/30 mt-auto">

                      {loc.phone && (
                        <a
                          href={`tel:${loc.phone}`}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4cd6ff] hover:text-white hover:underline transition-all group font-mono"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#4cd6ff] group-hover:scale-110 transition-transform" />
                          <span>{loc.phone}</span>
                        </a>
                      )}

                      {loc.email && (
                        <a
                          href={`mailto:${loc.email}`}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#ffb3b0] hover:text-[#ff6b6b] hover:underline transition-all group font-mono"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#ffb3b0] group-hover:scale-110 transition-transform" />
                          <span>{loc.email}</span>
                        </a>
                      )}

                      {loc.website && (
                        <a
                          href={
                            loc.website.startsWith('http')
                              ? loc.website
                              : `https://${loc.website}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#bcc7dd] hover:text-white hover:underline transition-all group font-mono"
                        >
                          <Globe className="w-3.5 h-3.5 text-[#bcc7dd] group-hover:rotate-12 transition-transform" />
                          <span>
                            {loc.website.replace(/^https?:\/\//, '')}
                          </span>
                        </a>
                      )}

                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}


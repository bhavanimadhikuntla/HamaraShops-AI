import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  ArrowLeft,
  Mail,
  Phone,
} from 'lucide-react';

export default function ScheduleAppointment() {
  return (
    <div className="min-h-screen bg-[#0c0e12] text-[#e2e2e8] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#8f9bb0] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4cd6ff]/20 bg-[#4cd6ff]/5 text-[#4cd6ff] text-sm">
            <CalendarDays className="w-4 h-4" />
            Schedule an Appointment
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white">
            Let's Talk About
            <span className="text-[#4cd6ff]"> AI</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-[#8f9bb0] text-lg leading-relaxed">
            Connect with HamaraShops.ai to discuss your business
            requirements, AI solutions, automation opportunities,
            and digital transformation goals.
          </p>
        </div>

        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Appointment Info */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-white mb-4">
              Book a Conversation
            </h2>

            <p className="text-[#8f9bb0] leading-relaxed mb-8">
              Tell us what you're looking to build or improve.
              Our team can help you explore practical AI
              solutions tailored to your business.
            </p>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#4cd6ff]/10 border border-[#4cd6ff]/20 flex items-center justify-center shrink-0">
                  <CalendarDays className="w-5 h-5 text-[#4cd6ff]" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Flexible Scheduling
                  </h3>

                  <p className="text-sm text-[#7f8aa3] mt-1">
                    Choose a convenient time to discuss your
                    requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#ff6b6b]/10 border border-[#ff6b6b]/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#ff8585]" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Business Discussion
                  </h3>

                  <p className="text-sm text-[#7f8aa3] mt-1">
                    Discuss AI adoption, automation, agents,
                    and digital transformation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Direct Conversation
                  </h3>

                  <p className="text-sm text-[#7f8aa3] mt-1">
                    Get in touch with our team to discuss your
                    specific business needs.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Appointment Form */}
          <div className="rounded-3xl border border-white/10 bg-[#090d14] p-7 sm:p-9">

            <h2 className="text-2xl font-bold text-white mb-6">
              Request an Appointment
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  'Thank you! Your appointment request has been submitted.'
                );
              }}
              className="space-y-5"
            >

              <div>
                <label className="block text-sm font-medium text-[#b8c1d1] mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/[0.03] text-white outline-none placeholder:text-[#59657a] focus:border-[#4cd6ff]/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#b8c1d1] mb-2">
                  Email
                </label>

                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/[0.03] text-white outline-none placeholder:text-[#59657a] focus:border-[#4cd6ff]/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#b8c1d1] mb-2">
                  Company
                </label>

                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/[0.03] text-white outline-none placeholder:text-[#59657a] focus:border-[#4cd6ff]/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#b8c1d1] mb-2">
                  Preferred Date
                </label>

                <input
                  type="date"
                  required
                  className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/[0.03] text-white outline-none focus:border-[#4cd6ff]/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#b8c1d1] mb-2">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell us briefly about your requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white outline-none placeholder:text-[#59657a] focus:border-[#4cd6ff]/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-13 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b6b] to-[#ff8585] text-[#50000a] font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(255,107,107,0.3)] hover:scale-[1.01] transition-all"
              >
                <CalendarDays className="w-5 h-5" />
                Request Appointment
              </button>

            </form>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center">
          <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] via-white to-[#4cd6ff]">
            HamaraShops.ai is an Application Player in the Race of AI
          </p>
        </div>

      </div>
    </div>
  );
}
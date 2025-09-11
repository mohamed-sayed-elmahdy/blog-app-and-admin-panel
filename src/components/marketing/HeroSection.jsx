"use client"
import { useState } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import BlurText from '@/components/ui/BlurText';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const [secondLineVisible, setSecondLineVisible] = useState(false);
  const t = useTranslations("home");

  const titleClass = "text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text)] leading-tight";

  return (
    <div className="relative overflow-hidden z-10 w-full">
      <div className="relative px-4 py-20 max-w-[var(--max-width)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="text-center">
                <BlurText
                  text="Predictable Growth"
                  delay={300}
                  animateBy="words"
                  direction="top"
                  className={titleClass}
                  onAnimationComplete={() => { setSecondLineVisible(true) }}
                />

         {secondLineVisible ? (
           <BlurText
             text="Starts Here."
             delay={100}
             animateBy="words"
             direction="top"
             className={titleClass}
           />
         ) : <h1 className={`${titleClass} invisible`}>Starts Here.</h1>}

              </div>

            </div>



            <p className="text-base md:text-lg text-[var(--text-muted)] max-w-lg leading-relaxed">
              {t("hero-description")}
            </p>
            <ButtonLink
              href={"#"}
              className="block w-fit bg-[var(--bg-blur)] hover:bg-[var(--btn-bg-hover)] border-[var(--border-blur)] hover:border-[var(--btn-border-hover)] backdrop-blur-3xl border text-[var(--text)] px-8 py-3  shadow-md shadow-white/10 rounded-lg font-semibold transition-all duration-300"
            >
              Get Started
            </ButtonLink>
          </div>

          {/* Right Dashboard Mockup */}
          <div>
            <div className="bg-[var(--bg-blur)] dark:border-[1.69px] border-[1px] border-[var(--border-blur)] backdrop-blur-[25px] rounded-3xl p-6  shadow-md shadow-white/10 max-w-[550px] sm:mx-auto lg:ms-auto lg:me-[initial] transform rotate-2 hover:rotate-0 transition-all duration-300">
              {/* Header */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[var(--text)] rounded-sm" />
                  <span className="font-semibold text-[var(--text)]">
                    Company Co.
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[var(--text-muted)]">
                  <span>Live preview</span>
                  <div className="w-2 h-2 bg-[var(--bg-green)] rounded-full animate-[pulse_1.8s_ease-in-out_infinite]" />
                </div>
              </div>

              {/* Stats Cards */}
              <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
                <div className=" border-[1.89px] bg-[var(--bg-card)] border-[var(--border-soft)] rounded-lg p-4 ">
                  <div className="text-sm text-[var(--text-muted)] mb-1">
                    Total Audience
                  </div>
                  <div className="text-2xl font-bold text-[var(--text)]">
                    1.2M
                  </div>
                  <div className="text-xs text-[var(--text-green)]">
                    +12% from last month
                  </div>
                </div>
                <div className=" border-[1.89px] bg-[var(--bg-card)] border-[var(--border-soft)] rounded-lg p-4">
                  <div className="text-sm text-[var(--text-muted)] mb-1">
                    Active Engagements
                  </div>
                  <div className="text-2xl font-bold text-[var(--text)]">
                    45K
                  </div>
                  <div className="text-xs text-[var(--text-green)]">
                    +8% from last month
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="relative  z-10  pb-0 mb-4 border-[1.89px] bg-[var(--bg-card)] border-[var(--border-soft)] rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-[var(--text-muted)]">
                    Recent Activity
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    Last 7 days
                  </span>
                </div>
                <div className="h-24 flex items-end space-x-1">
                  {[40, 65, 45, 80, 55, 70, 85].map((height, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-blue-400 to-purple-400 rounded-t flex-1"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* User List */}
              <div className="relative z-10 space-y-2">
                {[
                  {
                    name: "John",
                    status: "Active now",
                    time: "2 min ago",
                    gradient: "from-purple-400 to-blue-400",
                    initial: "J",
                  },
                  {
                    name: "Sarah",
                    status: "Online",
                    time: "5 min ago",
                    gradient: "from-green-400 to-blue-400",
                    initial: "S",
                  },
                ].map(({ name, status, time, gradient, initial }, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-2 rounded-lg border-[1.89px] bg-[var(--bg-card)] border-[var(--border-soft)]"
                  >
                    <div
                      className={`w-8 h-8 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center text-[var(--text)] text-sm font-semibold`}
                    >
                      {initial}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-[var(--text)]">
                        {name}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        {status}
                      </div>
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      {time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="mt-20 text-center">
          <p className="text-[var(--text-muted)] mb-8 text-sm">
            Clearbit is behind the world&apos;s fastest-growing companies
          </p>
          <div className="flex justify-center items-center flex-wrap space-x-12 opacity-60">
            <div className="text-[var(--text-muted)] font-semibold text-lg">
              Segment
            </div>
            <div className="text-[var(--text-muted)] font-semibold text-lg">
              asana
            </div>
            <div className="text-[var(--text-muted)] font-semibold text-lg">
              INTERCOM
            </div>
            <div className="text-[var(--text-muted)] font-semibold text-lg">
              GONG
            </div>
            <div className="text-[var(--text-muted)] font-semibold text-lg">
              HubSpot
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

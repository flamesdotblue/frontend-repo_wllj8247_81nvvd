import Spline from "@splinetool/react-spline";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[520px] w-full overflow-hidden sm:h-[600px] md:h-[680px]">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />

        {/* Gradient overlays for depth - don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/0 to-white/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm">
              <Sparkles className="text-blue-600" size={14} />
              <span>Intelligent placement management</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Connect students, recruiters, and admins in one powerful hub
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Discover jobs, manage applications, schedule interviews, and unlock insights with a modern, accessible platform designed for career success.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Get started
                <ArrowRight size={16} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
              >
                Explore features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

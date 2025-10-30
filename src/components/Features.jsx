import { Briefcase, Building2, Users, Shield, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Job Discovery",
    description:
      "Browse curated roles with powerful filters, saved searches, and instant alerts.",
    icon: Briefcase,
    color: "text-blue-600",
  },
  {
    title: "Recruiter Workspace",
    description:
      "Post openings, review candidates, and schedule interviews seamlessly.",
    icon: Building2,
    color: "text-emerald-600",
  },
  {
    title: "Student Profiles",
    description:
      "Rich profiles, resume parsing, and application tracking in one place.",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Secure & Compliant",
    description:
      "Enterprise-grade security, role-based access, and audit-ready logs.",
    icon: Shield,
    color: "text-amber-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Built for students, recruiters, and admins
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            A modern toolkit that brings your placement operations under one roof.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon, color }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className={`inline-flex items-center justify-center rounded-lg bg-gray-50 p-2.5 ${color}`}>
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle2 className="text-emerald-500" size={14} />
                <span>Ready for teams</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

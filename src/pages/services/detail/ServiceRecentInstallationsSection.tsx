import { motion } from "motion/react";
import { MapPin, Sparkles, ArrowRight, ShieldCheck, Phone, Zap } from "lucide-react";
import type { ServiceItem } from "../data/servicesData";
import { useInquiryModal, useNavigation } from "../../../context";
import { CONTACT_INFO } from "../../../constants";
import { MagicCard } from "@/components/ui";

interface ServiceRecentInstallationsSectionProps {
  service: ServiceItem;
}

export function ServiceRecentInstallationsSection({
  service,
}: ServiceRecentInstallationsSectionProps) {
  const { openInquiryModal } = useInquiryModal();
  const { navigate } = useNavigation();

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200/80 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <div className="absolute top-1/4 -left-28 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-28 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-14 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Recent Installations &amp; <br />
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-900 leading-relaxed font-normal">
            Take a look at real-world {service.title.toLowerCase()} projects recently commissioned
            by our licensed master electricians in WA, NSW, and QLD.
          </p>
        </motion.div>

        {/* ================= 3 EDITORIAL INSTALLATION CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {service.recentInstallations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative cursor-pointer"
              onClick={() => openInquiryModal(`${service.title} - Similar to ${item.title}`)}
            >
              <MagicCard
                gradientColor="rgba(245, 158, 11, 0.14)"
                gradientSize={340}
                className="h-full rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo with Overlay & State Tag */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                      <span className="font-mono text-amber-300 font-bold bg-slate-950/70 px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                        {item.capacity}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-200 font-semibold bg-slate-950/60 px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                        <MapPin className="h-3 w-3 text-orange-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black text-slate-950 group-hover:text-orange-600 transition-colors mb-2.5 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.details}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>CEC Commissioned</span>
                  </span>
                  <span className="text-amber-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Inquire for Similar Setup</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>

        {/* ================= FINAL ACTION BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 p-8 sm:p-10 lg:p-12 text-slate-950 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/10 text-slate-950 text-xs font-black uppercase tracking-wider mb-3">
              <Zap className="h-3.5 w-3.5" />
              <span>Tailored Australian Electrical Engineering</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-2">
              Ready to Upgrade Your Home or Business?
            </h3>
            <p className="text-slate-950/80 text-sm sm:text-base font-medium">
              Get an instant upfront calculation of government rebates, equipment sizing, and return
              on investment with our master electricians.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => openInquiryModal(service.title)}
              className="px-7 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-black text-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>Request Custom Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
              className="px-6 py-4 rounded-xl bg-white/20 hover:bg-white/30 text-slate-950 font-black text-sm backdrop-blur-md transition-colors flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span>{CONTACT_INFO.phone1}</span>
            </a>
          </div>
        </motion.div>

        {/* Back to All Services Navigation Link */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-amber-600 transition-colors cursor-pointer"
          >
            <span>← Explore All 6 Core Electrical &amp; Solar Services</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceRecentInstallationsSection;

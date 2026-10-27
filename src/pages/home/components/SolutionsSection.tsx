import { RotatingCards } from '../../../components/common/RotatingCards'

export function SolutionsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ================= LEFT SIDE: 3D Animated Cards (Fully Visible, No Box/Container) ================= */}
          <div className="lg:col-span-5 w-full flex items-center justify-center overflow-visible">
            <RotatingCards />
          </div>

          {/* ================= RIGHT SIDE: Normal Content ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-slate-900 leading-[1.15]">
              Smart Power,{' '}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Brighter Future.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Founded in 2019, Sky Electrical & Solar has grown into a trusted name for both electrical services and solar energy solutions. From the very beginning, our mission has been to deliver high-quality, reliable, and sustainable services that meet the needs of both residential and commercial clients.
              </p>

              <p>
                We specialize in a wide range of services, including general electrical work, solar panel installation, battery storage solutions, and energy efficiency upgrades. Our team consists of skilled and certified professionals who are committed to ensuring every project is completed to the highest standards, using only quality materials and advanced technology.
              </p>

              

              <p className="font-semibold text-slate-800">
                With nearly a decade of experience, Sky Electrical & Solar is your trusted partner for safe, efficient, and sustainable energy solutions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SolutionsSection

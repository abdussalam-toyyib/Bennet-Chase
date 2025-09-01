import { Container } from "../shared/Container"
import business from "../../assets/business.svg"
import tax from "../../assets/task.svg"
import audit from "../../assets/audit.svg"
import payroll from "../../assets/payroll.svg"
import financial from "../../assets/finance.svg"
import estate from "../../assets/estate.svg"
import serviceImage from "../../assets/hero2.png"

export const Services = () => {
  const expertItems = [
    {
      title: 'Business Accounting',
      text: 'From daily transaction recording to financial statement preparation, we ensure your business accounting is accurate, compliant, and provides a clear picture of your financial health.',
      icon: business,
    },
    {
      title: 'Tax Planning & Compliance',
      text: 'Navigate complex tax laws with our expert guidance. We offer comprehensive tax planning for individuals and corporations, preparation of all federal and state tax returns, and representation during tax audits.',
      icon: tax,
    },
    {
      title: 'Audit & Assurance',
      text: 'Gain stakeholder confidence with our independent audit and assurance services. We provide thorough financial statement audits, reviews, and compilations, adhering to the highest professional standards.',
      icon: audit,
    },
    {
         title: 'Payroll & Bookkeeping',
         text: 'Focus on your core business while we handle your essential financial operations. Our services include accurate payroll processing, comprehensive bookkeeping, bank reconciliations, and custom financial reporting tailored to your operational needs.',
         icon: payroll,
     },
     {
         title: 'Financial Advisory',
         text: 'Unlock your financial potential with our strategic advisory services. We assist with business valuations, mergers and acquisitions, financial forecasting, cash flow management, and capital raising strategies, providing critical insights for informed decisions.',
         icon: financial
     },
     {
         title: 'Estate Planning',
         text: 'Beyond traditional accounting, we offer strategic consulting to help businesses optimize performance, identify growth opportunities, and implement effective operational improvements. Our insights drive efficiency and sustainable development.',
         icon: estate,
     },
  ]

  return (
    <section id="services" className="relative py-12 bg-white">
      <Container>
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900">
            Services
          </h2>
        </div>

        {/* Grid: cards left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Cards */}
          <div className="flex flex-col gap-4">
            {expertItems.map((item, key) => (
              <div
                key={key}
                className="bg-[#FAFAFB] rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-base text-gray-600">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden h-full shadow-md bg-[#FAFAFB] p-2">
              <img
                src={serviceImage}
                alt="Services illustration"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

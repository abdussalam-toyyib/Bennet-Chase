import { Container } from "../shared/Container"
import { ExpertCard } from "../shared/ExpertCard"
import business from "../../assets/business.svg"
import tax from "../../assets/task.svg"
import audit from "../../assets/audit.svg"
import payroll from "../../assets/payroll.svg"
import financial from "../../assets/finance.svg"
import estate from "../../assets/estate.svg"


export const Expertise = () => {

    const expertItems = [
    {
        title: 'Business Accounting',
        text: 'Streamlined financial operations and meticulous record-keeping to support your business growth.',
        icon: business,
    },
    {
        title: 'Tax Planning & Compliance',
        text: 'Strategic tax planning and accurate compliance to minimize liabilities and maximize savings.',
        icon: tax,
    },
    {
        title: 'Audit & Assurance',
        text: 'Independent and thorough audit services providing credibility and transparency to your financial statements.',
        icon: audit,
    },
    {
        title: 'Payroll & Bookkeeping',
        text: 'Efficient and accurate management of your payroll and daily financial transactions.',
        icon: payroll,
    },
    {
        title: 'Financial Advisory',
        text: 'Personalized financial strategies and expert advice to guide your future investments and wealth management.',
        icon: financial
    },
    {
        title: 'Estate Planning',
        text: 'Comprehensive estate planning services ensuring your legacy and assets are managed according to your wishes.',
        icon: estate,
    },
]

    return (
  <section className="relative pt-4 lg:pt-5">
    <Container className="pr-64px text-[#19191F]">
      <div className="w-auto h-auto bg-[#FFFFFFFF] pb-8">
        <h2 className="w-full font-montserrat font-bold text-[36px] leading-[44px] py-10 text-center">
          Our Expertise
        </h2>
        
        {/* Grid container for ExpertCard components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertItems.map((item, key) => (
            <ExpertCard 
              key={key}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
        
      </div>
    </Container>
  </section>
);

}
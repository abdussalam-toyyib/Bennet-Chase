import { Container } from "../shared/Container"
import { ExpertCard } from "../shared/ExpertCard"
import industryImage from "../../assets/hero6.png"



export const Industries = () => {

    const expertItems = [
    {
        title: 'SMEs & Start-ups',
        text: 'Tailored accounting solutions to foster growth from inception to scaling.',
    },
    {
        title: 'Professional Services',
        text: 'Expert financial management for consulting firms, legal practices, and agencies.',
    },
    {
        title: 'Hospitality & Care Homes',
        text: 'Specialized accounting to navigate the unique financial aspects of these sectors.',
    },
    {
        title: 'Retail & E-Commerce',
        text: 'Optimizing inventory, sales, and online transaction accounting.',
    },
    {
        title: 'Non-profits & Charities',
        text: 'Ensuring compliance and maximizing impact for mission-driven organizations.',
    },
    {
        title: 'Real Estate',
        text: 'Comprehensive financial services for property investors, developers, and real estate agencies.',
    },
]
    return (
    <section id="industries" className="relative py-12  bg-[#F3FBFC] text-[#19191F]">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Industries</h2>
        </div>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center p-5 ">
          {/* Left cards */}
          <div className="flex flex-col gap-6">
            {expertItems.slice(0, 3).map((item, i) => (
              <ExpertCard
                key={i}
                title={item.title}
                text={item.text}
                className="bg-white text-black rounded-lg shadow-md"
              />
            ))}
          </div>

          {/* Center image */}
          <div className="flex justify-center h-full">
            <img
              src={industryImage}
              alt="Industry engineer"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-6">
            {expertItems.slice(3, 6).map((item, i) => (
              <ExpertCard
                key={i}
                title={item.title}
                text={item.text}
                className="bg-white text-black rounded-lg p-4 shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Bottom single card
        {expertItems.length > 0 && (
        <div className="mt-4 flex justify-center pb-10">
            <ExpertCard
            title={expertItems[expertItems.length - 1].title}
            text={expertItems[expertItems.length - 1].text}
            className="bg-white text-black rounded-lg p-4 shadow-md max-w-sm"
            />
        </div>
        )} */}
      </Container>
    </section>
  );
}
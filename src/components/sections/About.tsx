import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import hero from "../../assets/hero6.png";
import mission from "../../assets/mission.svg"
import vision from "../../assets/vision.svg"
import partner from "../../assets/partner.svg"
import excellence from "../../assets/excellence.svg"
import integrity from "../../assets/integrity.svg"
import { ExpertCard } from "../shared/ExpertCard";
import { Mission } from "../shared/Mission";

export const About = () => {

   const expertItems = [
      {
          title: 'Our Vision',
          text: 'To be the leading accounting firm recognised for integrity, innovation, and exceptional client service.',
          icon: vision,
      },
      {
          title: 'Our Mission',
          text: 'To simplify finance, empower businesses, and deliver solutions that inspire confidence and growth',
          icon: mission,
      },
  ]

  const valueItems = [
      {
          title: 'Integrity',
          text: 'Acting with honesty and transparency in all we do.',
          icon: integrity,
      },
      {
          title: 'Excellence',
          text: 'Strategic tax planning and accurate compliance toCommitted to the highest professional standards.',
          icon: excellence,
      },
      {
          title: 'Partnership',
          text: 'Building long-term relationships with clients.',
          icon: partner,
      },
  ]
  
  return (
    <section id="about" className="relative pt-10 sm:pt-15 lg:pt-20 bg-[#E8F5E9]">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900">
            About Us
          </h2>
        </div>
        <div className="w-full pb-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          
          {/* Text Section */}
          <div className="flex flex-col px-6 sm:px-10 lg:pl-16 lg:pt-20 gap-6 max-w-xl text-center lg:text-left">
            
            <h2 className="font-montserrat font-semibold text-xl sm:text-3xl lg:text-4xl leading-tight text-[#19191F]">
              Your Trusted Accounting Partner
            </h2>

            <Paragraph className="font-montserrat text-base sm:text-lg lg:text-xl leading-relaxed text-[#19191F]">
             Bennett & Chase was established with a vision to make accounting more than just numbers 
              — we believe it’s about people, progress, and partnership. Our team of qualified accountants 
              and advisors bring years of experience across diverse industries, offering insights that help 
              clients make informed decisions. 
            </Paragraph>

          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <img
              src={hero}
              alt="Hero"
              className="max-w-full lg:max-w-md xl:max-w-lg h-auto object-cover object-center pt-6 lg:pt-20 pr-0 lg:pr-14"
            />
          </div>
        </div>
        <div className="w-auto h-auto pb-8">
          <h3 className="w-full font-montserrat font-bold text-[30px] leading-[44px] py-10 text-center">
            Our Mission and Vision
          </h3>
                
                {/* Grid container for ExpertCard components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-5">
            {expertItems.map((item, key) => (
              <Mission 
                key={key}
                title={item.title}
                text={item.text}
                icon={item.icon}
                className="justify-start items-start"
              />
            ))}
          </div>
                
        </div>
        <div className="w-auto h-auto pb-8">
          <h3 className="w-full font-montserrat font-bold text-[30px] leading-[44px] py-10 text-center">
            Our Core Values 
          </h3>
                
                {/* Grid container for ExpertCard components */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-5">
            {valueItems.map((item, key) => (
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
};

import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

import addressIcon from "../../assets/office.svg";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/mail.svg";
import { ContactForm } from "../../utils/ContactForm";

export const Contact = () => {
  const valueItems = [
    {
      title: "Office Address",
      text: "123 Financial Avenue, Suite 400, Metropolis, State 12345",
      icon: addressIcon,
    },
    {
      title: "Phone Number",
      text: "+1 (555) 123-4567",
      icon: phoneIcon,
    },
    {
      title: "Email Us",
      text: "info@bennettandchase.com",
      icon: emailIcon,
    },
  ];

  return (
    <section
      id="contact"
      className="relative pt-6 sm:pt-14 lg:pt-16 pb-10"
    >
      <Container>
        <h2 className="w-full font-montserrat font-bold text-[36px] leading-[44px] py-10 text-center">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-start gap-12 mb-12">
          {valueItems.map((item, key) => (
            <div
              key={key}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <img
                src={item.icon}
                alt={item.title || "icon"}
                className="w-10 h-10 mb-3 object-contain"
              />
              <h3 className="font-semibold text-base text-neutral-900 mb-1">
                {item.title}
              </h3>
              <Paragraph className="text-xs text-neutral-700">
                {item.text}
              </Paragraph>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full  py-8">
          <h2 className="text-center font-montserrat font-bold text-2xl sm:text-3xl mb-6">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

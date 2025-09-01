
export const ContactForm = () => {
  return (
    <form id="cta" className="w-full max-w-lg mx-auto flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-2 border  border-[#2BA0A6FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2BA0A6FF]"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 border border-[#2BA0A6FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2BA0A6FF]"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full px-4 py-2 border border-[#2BA0A6FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2BA0A6FF]"
      />
      <textarea
        placeholder="Your Message"
        rows={5}
        className="w-full px-4 py-2 border border-[#2BA0A6FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2BA0A6FF]"
      ></textarea>
      <button
        type="submit"
        className="w-full  h-[52px] sm:h-[60px] bg-[#2BA0A6FF] text-white font-semibold py-2 rounded-lg hover:bg-[#53aeb3] hover:cursor-pointer transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

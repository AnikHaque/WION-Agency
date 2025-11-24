import React from "react";

export const Testimonial = () => {
  const cardsData = [
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
      date: "April 20, 2025",
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
    },
    {
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
      date: "June 5, 2025",
    },
    {
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
    },
  ];

  const Card = ({ card }) => (
    <div className="p-5 rounded-xl mx-4 shadow-md hover:shadow-xl transition-all duration-300 w-72 shrink-0 bg-white/80 backdrop-blur">
      <div className="flex gap-2">
        <img className="h-11 w-11 rounded-full" src={card.image} alt={card.name} />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-normal text-gray-900">{card.name}</p>
          </div>
          <span className="text-xs text-gray-500">{card.handle}</span>
        </div>
      </div>

      <p className="text-sm py-4 text-gray-700 leading-relaxed">
        Radiant made undercutting all of our competitors an absolute breeze.
      </p>

      <div className="flex items-center justify-between text-gray-500 text-xs">
        <span>Posted on</span>
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-gray-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-14">

        {/* Heading & Description (now use global font) */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Trusted by startups, businesses, and global brands. Our work speaks
          through the words of our valued clients.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <style>{`
          @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-inner {
            animation: marqueeScroll 25s linear infinite;
          }
          .marquee-reverse {
            animation-direction: reverse;
          }
        `}</style>

        {[0, 1].map((row, idx) => (
          <div key={idx} className="marquee-row w-full overflow-hidden relative my-7">

            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-gray-50 to-transparent"></div>

            {/* Auto-scrolling row */}
            <div
              className={`marquee-inner ${idx === 1 ? "marquee-reverse" : ""} flex min-w-[200%]`}
            >
              {[...cardsData, ...cardsData].map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </div>

            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-gray-50 to-transparent"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

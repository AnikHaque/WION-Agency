export default function Services() {
  const items = [
    {
      img: "https://c8.alamy.com/comp/HYCGNY/web-development-icon-web-development-website-button-on-white-background-HYCGNY.jpg",
      title: "Web Development",
      desc: "Your brand is more than a logo — it’s how people feel about your business. At our agency, we craft brand identities that connect emotionally, tell a story, and resonate across every touchpoint."
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/020/712/514/non_2x/ui-ux-designer-icon-design-free-vector.jpg",
      title: "UI / UX Development",
      desc: "Your brand is more than a logo — it’s how people feel about your business. At our agency, we craft brand identities that connect emotionally, tell a story, and resonate across every touchpoint."
    },
    {
      img: "https://madewithgoodness.com/wp-content/uploads/2024/08/wall-and-main-logo-visual-identity-by-goodness-4.jpg",
      title: "Brand & Identity",
      desc: "Your brand is more than a logo — it’s how people feel about your business. At our agency, we craft brand identities that connect emotionally, tell a story, and resonate across every touchpoint."
    },
    {
      img: "https://t4.ftcdn.net/jpg/03/89/91/47/360_F_389914764_ZGT4ZJ0VBRFutqbLNX36v6wdZqFw2HXS.jpg",
      title: "Graphics Design",
      desc: "Your brand is more than a logo — it’s how people feel about your business. At our agency, we craft brand identities that connect emotionally, tell a story, and resonate across every touchpoint."
    },
    {
      img: "https://e7.pngegg.com/pngimages/855/25/png-clipart-digital-marketing-online-advertising-computer-icons-taekwondo-elements-service-logo.png",
      title: "Digital Marketing",
      desc: "Your brand is more than a logo — it’s how people feel about your business. At our agency, we craft brand identities that connect emotionally, tell a story, and resonate across every touchpoint."
    },
    {
      img: "https://thumbs.dreamstime.com/b/infrastructure-icon-vector-illustration-infrastructure-icon-vector-135597214.jpg",
      title: "IT Infrastructure",
      desc: "Your brand is more than a logo — it’s how people feel about your business. At our agency, we craft brand identities that connect emotionally, tell a story, and resonate across every touchpoint."
    }
  ];

  return (
    <div className="py-20">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        About our Services
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        A visual collection of our most recent works — each piece crafted with
        intention, emotion and style.
      </p>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 md:px-4 pt-16">
        {/* Glow background */}
        <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>

        {/* Dynamic Items */}
        {items.map((item, index) => (
          <div key={index}>
            <div className="size-20 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <img src={item.img} alt="emoji" />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-xl font-semibold text-slate-600">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



const teamMembers = [
  {
    name: "John Doe",
    role: "Content Marketing",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
  },
  {
    name: "Jane Smith",
    role: "Content Marketing",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
  },
  {
    name: "Alice Johnson",
    role: "Content Marketing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop",
  },
];

const AboutTeamSection = () => {
  return (
    <>
    <div className="mt-20 ">
 <h1 className="text-3xl font-semibold text-slate-800 text-center">
        Meet Our Team
      </h1>
      <p className="text-slate-500 text-center">
        The people behind the product, passionate about what they do.
      </p>

      <div className=" flex flex-wrap items-center justify-center gap-28 mt-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="max-w-80 bg-black text-white rounded-2xl">
            <div className="relative -mt-px overflow-hidden rounded-2xl">
              <img
                src={member.image}
                alt={member.name}
                className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
              />
              <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
            </div>
            <div className="px-4 pb-6 text-center">
              <p className="mt-4 text-lg">{member.name}</p>
              <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
     
    </>
  );
};

export default AboutTeamSection;

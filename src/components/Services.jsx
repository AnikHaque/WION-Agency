export function Services() {
const items = [
{ title: "Web Development", desc: "High‑performance, scalable digital solutions.",img:"https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-services-thumb3.png" },
{ title: "Digital Marketing", desc: "High‑performance, scalable digital solutions.",img:"https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-services-thumb5.png" },
{ title: "UI/UX Design", desc: "Beautiful and intuitive designs for your brand.",img:"https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-services-thumb2.png" },
{ title: "Brand Identity", desc: "Professional branding to make your business stand out.",img:"https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-services-thumb1.png" }
];


return (
<section id="services" className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 text-center">
<h2 className="text-4xl font-bold mb-10 text-black">Our Services</h2>
<div className="grid md:grid-cols-3 gap-8">
{items.map((s, i) => (
<div>
    <div className="card  lg:max-w-lg shadow-sm p-6">
  <figure>
    <img
      src={s.img}
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">{s.title}</h2>
    <p>{s.desc}</p>
    
  </div>
</div>
    </div>
))}
</div>
</div>
</section>
);
}
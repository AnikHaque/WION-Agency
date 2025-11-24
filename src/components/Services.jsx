export function Services() {
const items = [
{ title: "Web Development", desc: "High‑performance, scalable digital solutions." },
{ title: "UI/UX Design", desc: "Beautiful and intuitive designs for your brand." },
{ title: "Brand Identity", desc: "Professional branding to make your business stand out." }
];


return (
<section id="services" className="py-20">
<div className="max-w-7xl mx-auto px-4 text-center">
<h2 className="text-4xl font-bold mb-10">Our Services</h2>
<div className="grid md:grid-cols-3 gap-8">
{items.map((s, i) => (
<div key={i} className="p-8 shadow rounded-xl bg-white hover:shadow-lg transition">
<h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
<p className="text-gray-600">{s.desc}</p>
</div>
))}
</div>
</div>
</section>
);
}
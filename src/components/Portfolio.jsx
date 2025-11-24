export function PortfolioPreview() {
const items = [
{ img: "/p1.jpg", title: "App Design" },
{ img: "/p2.jpg", title: "Website Redesign" },
{ img: "/p3.jpg", title: "Dashboard UI" }
];


return (
<section id="portfolio" className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 text-center">
<h2 className="text-4xl font-bold mb-10">Our Portfolio</h2>
<div className="grid md:grid-cols-3 gap-8">
{items.map((p, i) => (
<div key={i} className="rounded-xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer">
<img src={p.img} alt={p.title} className="w-full" />
<div className="p-5">
<h3 className="text-xl font-semibold">{p.title}</h3>
</div>
</div>
))}
</div>
</div>
</section>
);
}
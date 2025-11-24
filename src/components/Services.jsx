export function Services() {
const items = [
{ title: "Web Development", desc: "High‑performance, scalable digital solutions." },
{ title: "UI/UX Design", desc: "Beautiful and intuitive designs for your brand." },
{ title: "Brand Identity", desc: "Professional branding to make your business stand out." }
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
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
))}
</div>
</div>
</section>
);
}
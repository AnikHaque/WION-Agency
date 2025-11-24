export function Hero() {
return (
<section id="home" className="pt-32 pb-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-5xl font-bold leading-tight text-black mb-5">We Build Modern Digital Experiences</h1>
<p className="text-gray-600 mb-6 text-lg">A full‑service creative agency focused on delivering high‑quality design, development, and branding for businesses worldwide.</p>
<button className="px-6 py-6 btn btn-primary text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition">Get Started</button>
</div>
<div>
<img src="https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/h1-hero-thumb1.png" alt="hero" className="w-full h-[700px]" />
</div>
</div>
</section>
);
}
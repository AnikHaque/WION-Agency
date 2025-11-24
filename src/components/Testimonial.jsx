export function Testimonials() {
return (
<section id="testimonials" className="py-20">
<div className="max-w-7xl mx-auto px-4 text-center">
<h2 className="text-4xl font-bold mb-10">What Clients Say</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 shadow-lg rounded-xl bg-white">
<p className="text-gray-600">“Amazing work! The team delivered exactly what we needed.”</p>
<h4 className="mt-4 font-semibold">— John Smith</h4>
</div>
<div className="p-6 shadow-lg rounded-xl bg-white">
<p className="text-gray-600">“Highly professional and always on time. Recommended!”</p>
<h4 className="mt-4 font-semibold">— Sarah Lee</h4>
</div>
<div className="p-6 shadow-lg rounded-xl bg-white">
<p className="text-gray-600">“Best agency experience I have ever had.”</p>
<h4 className="mt-4 font-semibold">— Michael Brown</h4>
</div>
</div>
</div>
</section>
);
}
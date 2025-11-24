export default function Header() {
return (
<header className="w-full py-5 bg-white shadow-sm fixed top-0 left-0 z-50">
<div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
<img src="https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/logo-dark.svg"></img>
<nav className="hidden md:flex gap-8 text-gray-700 font-medium">
<a href="#home">Home</a>
<a href="#services">Services</a>
<a href="#portfolio">Portfolio</a>
<a href="#testimonials">Testimonials</a>
<a href="#contact">Contact</a>
</nav>
<button className="md:hidden p-2 border rounded">Menu</button>
</div>
</header>
);
}
import { Link } from "react-router-dom";
import featuresData from "./data/featuresData";


export default function Features() {
  return (
    <div className="pt-20 pb-20">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Powerful Features
      </h1>

      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        Everything you need to manage, track, and grow your finances, securely and efficiently.
      </p>

      <div className="flex flex-wrap items-center gap-5 mt-16 max-w-7xl mx-auto px-4">

        {featuresData.map(feature => (
          <Link
            to={`/features/${feature.id}`}
            key={feature.id}
            className="max-w-100 hover:-translate-y-0.5 transition duration-300 block"
          >
            <img className="rounded-xl" src={feature.image} alt={feature.title} />
            <h3 className="text-xl font-semibold text-slate-700 mt-4">{feature.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

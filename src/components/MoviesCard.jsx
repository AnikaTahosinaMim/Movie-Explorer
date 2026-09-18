import { Star, Calendar, ArrowRight } from 'lucide-react';

const MoviesCard = ({ movie, onSeeDetails }) => {
  const { name, image, rating, premiered, id } = movie;

//   const releaseYear = premiered ? premiered.split('-')[0] : 'N/A';

  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#2a2d34] bg-[#171a1f] p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3a3e47] hover:shadow-xl hover:shadow-red-500/10">
      <div>
        <div className="relative overflow-hidden rounded-xl">
          {image?.medium ? (
            <img
              src={image.medium}
              alt={name}
              className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="flex h-72 w-full items-center justify-center bg-[#2a2d34] text-gray-500">
              No Image Available
            </div>
          )}

          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-amber-400 backdrop-blur-md">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span>{rating?.average ? rating.average : 'N/A'}</span>
          </div>
        </div>

        {/* Title & Release Date */}
        <div className="mt-4 space-y-2">
          <h2 className="line-clamp-1 text-xl font-bold text-[#f4f2ee]" title={name}>
            {name}
          </h2>

          <div className="flex items-center gap-2 text-xs font-medium text-[#8c9099]">
            <Calendar className="h-3.5 w-3.5" />
            <span>{premiered ? premiered : 'Release date unknown'}</span>
          </div>
        </div>
      </div>

      {/* See Details Button */}
      <div className="mt-5 pt-3 border-t border-[#2a2d34]/60">
        <button
          onClick={() => onSeeDetails(id)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600/10 py-2.5 text-sm font-semibold text-red-500 transition-all duration-200 hover:bg-red-600 hover:text-white active:scale-95"
        >
          <span>See Details</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MoviesCard;
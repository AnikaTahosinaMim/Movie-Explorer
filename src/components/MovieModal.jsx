import { X, Star, Calendar, Film, Tag } from "lucide-react";
import { useEffect, useState } from "react";

const MovieModal = ({ movieId, onClose }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.tvmaze.com/shows/${movieId}`);
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching modal details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  // Modal এর বাইরের ব্যাকড্রপে ক্লিক করলে ক্লোজ হওয়ার জন্য
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#2a2d34] bg-[#171a1f] text-[#e8e6e1] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-2 text-gray-300 transition-colors hover:bg-black hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {loading ? (
          <div className="flex h-96 items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />
          </div>
        ) : movie ? (
          <div>
            {/* 1. Large Poster / Backdrop Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              {movie.image?.original ? (
                <img
                  src={movie.image.original}
                  alt={movie.name}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#2a2d34] text-gray-500">
                  No Backdrop Available
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171a1f] via-[#171a1f]/40 to-transparent" />
            </div>

            <div className="p-6 pt-0">
              {/* 2. Movie Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f4f2ee]">
                {movie.name}
              </h2>

              {/* 3. Rating & Release Date */}
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium text-[#8c9099]">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span>
                    {movie.rating?.average ? movie.rating.average : "N/A"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{movie.premiered || "Unknown"}</span>
                </div>

                {movie.language && (
                  <div className="flex items-center gap-1.5">
                    <Film className="h-4 w-4" />
                    <span>{movie.language}</span>
                  </div>
                )}
              </div>

              {/* Genres */}
              {movie.genres?.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-[#8c9099]" />
                  {movie.genres.map((genre, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-[#2a2d34] px-2.5 py-1 text-xs text-[#b0b4be]"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}

              {/* 4. Overview / Summary */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#f4f2ee]">
                  Overview
                </h3>
                {movie.summary ? (
                  <div
                    className="mt-2 text-sm leading-relaxed text-[#b0b4be] space-y-2"
                    dangerouslySetInnerHTML={{ __html: movie.summary }}
                  />
                ) : (
                  <p className="mt-2 text-sm text-[#8c9099]">
                    No overview available for this show.
                  </p>
                )}
              </div>

              {/* Additional API Info */}
              <div className="mt-6 border-t border-[#2a2d34] pt-4 text-xs text-[#8c9099] flex justify-between">
                <span>Status: {movie.status || "N/A"}</span>
                <span>
                  Runtime: {movie.runtime ? `${movie.runtime} mins` : "N/A"}
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MovieModal;

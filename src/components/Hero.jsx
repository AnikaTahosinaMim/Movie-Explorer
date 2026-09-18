import { Play, Sparkles } from 'lucide-react';
 
 const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden min-h-[85vh] flex items-center">
      
      {/* 1. Movie-related Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1920&auto=format&fit=crop')`,
        }}
      >
        {/* Dark Overlays for smooth text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full z-10">
        <div className="max-w-2xl space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-medium backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            <span>Unlimited Movies, TV Shows & More</span>
          </div>

          {/* 2. Application Title / Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Discover Your Next <br />
            <span className="bg-gradient-to-r from-red-500 via-amber-500 to-red-600 bg-clip-text text-transparent">
              Favorite Cinema
            </span>
          </h1>

          {/* 3. Short, Engaging Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            Explore thousands of blockbuster movies, exclusive TV series, and trending shows. 
            Immerse yourself in cinematic stories anytime, anywhere with high quality streaming.
          </p>

          {/* 4. Call-To-Action (CTA) Button & Extra Action */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Primary CTA Button -> Navigates to Movie Listing */}
            <a
              href="/movies"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-600/40 hover:shadow-red-600/60 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <Play className="w-5 h-5 fill-current group-hover:translate-x-0.5 transition-transform" />
              <span>Browse All Movies</span>
            </a>

            {/* Secondary Option (Optional Feature Highlight) */}
            <a
              href="/trending"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-gray-200 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Watch Trailer
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;
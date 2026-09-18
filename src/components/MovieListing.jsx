import { useEffect, useState } from "react";

const MovieListing = () => {
  const [apps, setApps] = useState([]);
  const [submit, setSubmit] = useState("");
  const [items, setItems] = useState("batman");

  useEffect(() => {
    const fetchData = async () => {
      if (!items.trim()) {
        return;
      }
      try {
        const res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${items}`,
        );
        const data = await res.json();

        setApps(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [items]);
  console.log(apps, "data");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.trim() !== "") {
      setItems(submit);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1115] px-6 py-10 text-[#e8e6e1]">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-[#f4f2ee]">
          Find a show
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-3" action="">
          <input
            onChange={(e) => setSubmit(e.target.value)}
            className="h-12 flex-1 rounded-xl border border-[#2a2d34] bg-[#171a1f] px-4 text-[#e8e6e1] placeholder-[#6b6f78] outline-none transition-colors focus:border-[#5b8def]"
            type="text"
            placeholder="Enter your movie title"
          />
          <button
            className="h-12 rounded-xl bg-[#5b8def] px-6 font-medium text-[#0f1115] transition-colors hover:bg-[#7ba3f2]"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {apps.map((app) => (
            <div
              key={app.show.id}
              className="flex items-center gap-4 rounded-xl border border-[#2a2d34] bg-[#171a1f] p-4 transition-colors hover:border-[#3a3e47]"
            >
              {app.show.image ? (
                <img
                  src={app.show.image.medium}
                  alt={app.show.name}
                  className="h-20 w-14 flex-shrink-0 rounded-md object-cover"
                />
              ) : (
                <div className="h-20 w-14 flex-shrink-0 rounded-md bg-[#2a2d34]" />
              )}
              <h2 className="text-lg font-medium text-[#f4f2ee]">
                {app.show.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;

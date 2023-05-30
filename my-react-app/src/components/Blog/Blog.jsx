import blogData from "./BlogData";

const Blog = () => {
  return (
    <section>
      <div className="section grid place-items-center">
        <div className="md:w-3/5 lg:4/5 text-center m-auto">
          <h6 className="text-sm py-2 px-4 bg-blue-50 text-secondary block w-fit m-auto rounded-2xl">
            Blog
          </h6>
          <h3 className="my-2 lg:my-3">Our fresh news</h3>
          <p>
            Our blog is more than just a collection of articles - it's a hub of
            ideas, inspiration, and thought-provoking discussions.
          </p>
        </div>

        <div className="grid place-items-center lg:items-start lg:grid-cols-3 my-10 gap-6">
          {blogData.map((item) => {
            return (
              <div className="w-full sm:w-3/4 lg:w-full border border-gray-300 rounded-lg overflow-hidden">
                <img src={item.image} alt="" className="w-full" />
                <div className="p-5">
                  <div className="flex items-center">
                    <img src={item.avatar} alt="" className="w-10 h-10" />
                    <span className="ml-3">
                      <h6>{item.name}</h6>
                      <p className="text-sm">{item.date}</p>
                    </span>
                  </div>
                  <h5 className="my-3">{item.heading}</h5>
                  <p>{item.description}</p>
                  <div className="mt-3 flex items-center gap-1">
                    <span className="text-xs text-primary px-3 py-1 bg-blue-100 rounded-xl">
                      UIUX
                    </span>
                    <span className="text-xs text-primary px-3 py-1 bg-blue-100 rounded-xl">
                      Studio
                    </span>
                    <span className="text-xs text-primary px-3 py-1 bg-blue-100 rounded-xl">
                      Web Design
                    </span>
                    <span className="text-xs text-gray-700 px-3 py-1 bg-gray-100 rounded-xl">
                      +2
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <a
          href="/"
          className="w-full sm:w-fit px-6 py-2 bg-primary transition-colors hover:bg-hoverColor text-white text-center rounded-md flex items-center justify-center">
          <span className="ml-2">Load More</span>
        </a>
      </div>
    </section>
  );
};

export default Blog;

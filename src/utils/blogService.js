const API = import.meta.env.VITE_API_URL;

//  All blogs cache
let blogsCache = null;

export const getBlogs = async () => {
     if (blogsCache) return blogsCache;

     blogsCache = fetch(`${API}/blogs`)
          .then(res => res.json())
          .catch(err => {
               console.error(err);
               blogsCache = null;
               return [];
          });

     return blogsCache;
};

//  Per-slug cache
const blogBySlugCache = new Map();

export const getBlogBySlug = async (slug) => {
     if (blogBySlugCache.has(slug)) return blogBySlugCache.get(slug);

     const promise = fetch(`${API}/blogs/${slug}`)
          .then(res => {
               if (!res.ok) throw new Error("Blog not found");
               return res.json();
          })
          .catch(err => {
               console.error(err);
               blogBySlugCache.delete(slug);
               return null;
          });

     blogBySlugCache.set(slug, promise);
     return promise;
};
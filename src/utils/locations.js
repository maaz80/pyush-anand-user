const API = import.meta.env.VITE_API_URL;

// Module level cache — app lifetime mein sirf ek baar fetch hoga
let cache = null;

export const getLocations = async () => {
     if (cache) return cache; // ✅ already fetched hai, wahi return karo

     cache = fetch(`${API}/locations`)
          .then(res => res.json())
          .catch(err => {
               console.error(err);
               cache = null; // error pe reset karo taaki retry ho sake
               return [];
          });

     return cache;
};

// Force refresh karna ho to (optional)
export const clearLocationsCache = () => { cache = null; };
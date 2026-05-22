const API = import.meta.env.VITE_API_URL;

let cache = null;

export const getServices = async () => {
     if (cache) return cache;

     cache = fetch(`${API}/services`)
          .then(res => res.json())
          .catch(err => {
               console.error(err);
               cache = null;
               return [];
          });

     return cache;
};

export const clearServicesCache = () => { cache = null; };
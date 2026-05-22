const API = import.meta.env.VITE_API_URL;

export const getTestimonials = async () => {

     try {

          const res = await fetch(`${API}/testimonials`);
          return await res.json();

     } catch (err) {

          console.error(err);
          return [];

     }

};
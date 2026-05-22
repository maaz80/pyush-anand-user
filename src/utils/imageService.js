const API = import.meta.env.VITE_API_URL;

export const getImages = async () => {
     try {

          const res = await fetch(`${API}/images`);
          const data = await res.json();

          return data;

     } catch (error) {

          console.error("Image fetch error:", error);
          return [];

     }
};
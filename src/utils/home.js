const API = import.meta.env.VITE_API_URL;

export const getHomeData = async () => {
     try {

          const res = await fetch(`${API}/home`);
          const data = await res.json();

          return data;

     } catch (error) {

          console.error("Home Data fetch error:", error);
          return [];

     }
};
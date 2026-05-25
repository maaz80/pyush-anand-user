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

/**
 * Dynamically optimizes Cloudinary image URLs by adding modern format (f_auto),
 * visual quality auto-adjustment (q_auto), and accurate scaling dimensions.
 * Gracefully strips any existing manual transformation tags.
 *
 * @param {string} url - Original image URL
 * @param {number} [width] - Desired width dimension
 * @param {object} [options] - Additional parameters (height, quality, crop)
 */
export const optimizeCloudinaryUrl = (url, width, options = {}) => {
     if (!url || typeof url !== "string") return url || "";
     
     // Only perform transformations on Cloudinary hosted images
     if (!url.includes("res.cloudinary.com")) return url;

     const uploadIndex = url.indexOf("/upload/");
     if (uploadIndex === -1) return url;

     const beforeUpload = url.substring(0, uploadIndex + 8); // includes "/upload/"
     let afterUpload = url.substring(uploadIndex + 8);

     // Check and strip any existing transformation segment immediately after /upload/
     const segments = afterUpload.split("/");
     let versionIndex = -1;
     for (let i = 0; i < segments.length; i++) {
          if (/^v\d+$/.test(segments[i])) {
               versionIndex = i;
               break;
          }
     }

     if (versionIndex > 0) {
          segments.splice(0, versionIndex);
          afterUpload = segments.join("/");
     } else if (segments[0] && (segments[0].includes(",") || /^[a-z]_[a-z0-9]+/.test(segments[0]))) {
          // If the first segment is not a file name/folder but a transformation chunk, strip it
          if (!segments[0].endsWith(".webp") && !segments[0].endsWith(".jpg") && !segments[0].endsWith(".png")) {
               segments.shift();
               afterUpload = segments.join("/");
          }
     }

     // Build custom optimized dynamic transformations
     const crop = options.crop || "fill";
     const quality = options.quality || "auto";
     let transform = `f_auto,q_${quality}`;

     if (width) {
          transform += `,w_${width},c_${crop}`;
     }
     if (options.height) {
          transform += `,h_${options.height}`;
     }

     return `${beforeUpload}${transform}/${afterUpload}`;
};
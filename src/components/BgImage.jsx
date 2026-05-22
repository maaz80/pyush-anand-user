// components/BgImage.jsx
const BgImage = ({ className = "w-full h-full object-fill" }) => (
     <picture>
          <source media="(max-width: 768px)" srcSet="/bg-mobile.webp" />
          <source media="(min-width: 769px)" srcSet="/bg.webp" />
          <img src="/bg.webp" alt="" className={className} />
     </picture>
);

export default BgImage;
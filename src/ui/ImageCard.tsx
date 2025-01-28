interface ImageCardProps {
  src?: string;
  alt: string;
}

// Reusable ImageCard component with props type
const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => (
  <div className="h-60 md:h-[250px]">
    <img
      src={
        src ||
        "https://res.cloudinary.com/dbrub0d6r/image/upload/v1737916239/kitchen4_ajvx0s.png"
      }
      alt={alt}
      className="w-full h-full object-cover rounded-3xl"
    />
  </div>
);
export default ImageCard;

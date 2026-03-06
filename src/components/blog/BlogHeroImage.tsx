interface BlogHeroImageProps {
  src: string;
  alt: string;
}

export const BlogHeroImage = ({ src, alt }: BlogHeroImageProps) => {
  return (
    <div className="mb-10 rounded-xl overflow-hidden border border-border/50">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover max-h-[480px]"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        width="1920"
        height="1088"
      />
    </div>
  );
};

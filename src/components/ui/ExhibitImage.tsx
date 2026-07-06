interface ExhibitImageProps {
  src?: string;
  alt: string;
  monogram?: string;
  className?: string;
}

/**
 * A museum-plate image: real screenshots receive a duotone + film-grain
 * treatment so they sit within the palette; entries without a photo fall back
 * to an engraved brass monogram tile.
 */
export default function ExhibitImage({
  src,
  alt,
  monogram,
  className = "",
}: ExhibitImageProps) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-taupe ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="duotone h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-espresso to-[#2c2019]">
          <span className="font-display text-4xl tracking-[0.25em] text-brass md:text-5xl">
            {monogram}
          </span>
        </div>
      )}
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-20" />
    </div>
  );
}

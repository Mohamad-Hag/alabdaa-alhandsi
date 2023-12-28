interface ImageProps {
  src: string;
  onClick: () => void;
  caption: string;
  className: string;
}

export default function Image({
  src,
  onClick,
  caption,
  className,
}: ImageProps) {
  return (
    <figure>
      <img
        loading="lazy"
        src={src}
        onClick={onClick}
        alt=""
        className={className}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

type PresentationStaticFrameProps = {
  src: string;
  title: string;
};

export function PresentationStaticFrame({
  src,
  title,
}: PresentationStaticFrameProps) {
  return (
    <iframe
      src={src}
      title={title}
      className="presentation-static-frame"
      allowFullScreen
    />
  );
}

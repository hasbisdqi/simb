export default function Segment({ children, bg_image }: { children: React.ReactNode, bg_image?: string }) {
  return (
    <div
      className="block w-full py-10 px-20 bg-cover"
      style={bg_image ? { backgroundImage: `url(${bg_image})` } : {}
      }>
      {children}
    </div>
  );
}

function SegmentTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="flex flex-row gap-8 items-center scroll-pt-64">
        <h2 className="text-3xl font-bold">
          {children}
        </h2>
        <hr className="grow border-t-5 border-primary py-auto" />
      </span>
    </>
  );
}

function SegmentSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-light mb-4 text-primary text-left">
      {children}
    </h3>
  );
}

Segment.Title = SegmentTitle;
Segment.Subtitle = SegmentSubtitle;

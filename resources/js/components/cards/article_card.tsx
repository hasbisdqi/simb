export default function ArticleCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      px-4 py-5 inline-block rounded-2xl w-full h-auto 
      bg-radial-[50%_50%_at_50%_50%] from-[rgba(84,128,242,0.5)] from-0% to-[rgba(148,173,235,0.50)] to-100% opacity-75
      transition-all duration-300
      hover:scale-115 hover:opacity-100 active:scale-95
      ">
      {children}
    </div>
  );
}

function ArticleCardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="max-w-[70%] w-full text-lg font-bold mb-2 text-left">
      {children}
    </h3>
  );
}

function ArticleCardSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="w-full text-md font-medium mb-2 text-left text-gray-600">
      {children}
    </h4>
  );
}

function ArticleCardImage({ src, alt }: { src: string; alt: string }) {
  if (src === '' || src === '#') {
    return (
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-gray-400">{alt ? alt : "no image available"}</span>
      </div>
    )
  }

  return (
    <img src={src} alt={alt} className="w-full h-auto rounded-lg mb-4" />
  );
}

function ArticleCardMeta({ tag, date }: { tag: string; date: string }) {
  return (
    <div className="text-sm font-light flex justify-between pb-5">
      <span>{tag}</span>
      <span>{date}</span>
    </div>
  );
}

ArticleCard.Title = ArticleCardTitle;
ArticleCard.Subtitle = ArticleCardSubtitle;
ArticleCard.Meta = ArticleCardMeta;
ArticleCard.Image = ArticleCardImage;

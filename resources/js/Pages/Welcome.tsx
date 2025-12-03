import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ClassNames from "embla-carousel-class-names"

function App({posts}: { posts: any[] }) {
  return (
    <div className="max-w-5xl container mx-auto py-16">
      <h1>Welcome to the App!</h1>

      <Carousel opts={{
        loop: true
      }}
      plugins={[ClassNames()]}
      >
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem key={post.id} className="bg-background">
              <div className="p-4 border rounded-lg">
                <img src={post.cover_image ? '/storage/' + post.cover_image : undefined} alt={post.title} className="object-cover aspect-video mb-4 rounded" />
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="mb-4 line-clamp-2 text-sm">{post.excerpt}</p>
                <Button>Read More</Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default App
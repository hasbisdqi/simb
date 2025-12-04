import Navbar from "@/components/layout/navbar"

function Show({ post }: { post: any }) {
    return (
        <div>
            <Navbar>
                <Navbar.Identity>
                    <img src="/logo.png" alt="logo" width={55} height={55} />
                    <span className="text-lg font-bold text-white">SIM Tsunami</span>
                </Navbar.Identity>
            </Navbar>
            <div className="prose mx-auto py-16 pt-32">
                <h1>{post.title}</h1>
                <p className="text-muted-foreground">{new Date(post.created_at).toLocaleTimeString()}</p>
                <img src={post.cover_image ? '/storage/' + post.cover_image : undefined} alt={post.title} className="object-cover rounded-lg aspect-video mb-4 " />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

        </div>
    )
}

export default Show
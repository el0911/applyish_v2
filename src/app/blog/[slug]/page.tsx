import Image from "next/image";
import blogPosts from '@/posts.json';
import '../blog.css';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const paramsResolved = await params;
  const post = blogPosts.find((p) => p.slug === paramsResolved.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative h-96 w-full mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
        <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="mt-8 blogContent" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}

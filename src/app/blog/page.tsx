import { getBlogPosts } from '@/db/blog';
import Link from 'next/link';
import { Suspense } from 'react';
export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function Page() {
  let allBlogs = getBlogPosts();
  return (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">blog</h1>

      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            // hover effect: round the text box and add a shadow

            className="flex  flex-col hover:bg-primary-content  space-y-1 mb-4 prose prose-neutral dark:prose-invert"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="font-semibold">{post.metadata.title}</p>
              <Suspense fallback={<p className="h-6" />}>
                {/* <Views slug={post.slug} /> */}
              </Suspense>
            </div>
          </Link>
        ))}
    </>
  );
}

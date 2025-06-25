
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogData from "../../blogdata";



export async function generateStaticParams() {
  return blogData.map((blog) => ({ slug: blog.slug }));
}

const BlogPage = ({ params }) => {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  const relatedBlogs = blogData.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 md:px-20 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Blog Content */}
        <div className="lg:col-span-3 space-y-6">
          <h1 className="text-3xl font-bold text-purple-400">{blog.title}</h1>
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className="rounded-lg"
          />
          <div className="prose prose-invert max-w-none text-[#dcdcdc]">
            <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ node, ...props }) => <h2 className="text-2xl text-purple-300 font-bold my-4" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl text-purple-200 font-semibold my-3" {...props} />,
          p: ({ node, ...props }) => <p className="text-[#ADB7BE] leading-7 my-2" {...props} />,
          li: ({ node, ...props }) => <li className="ml-6 list-disc text-[#ADB7BE] my-1" {...props} />,
          strong: ({ node, ...props }) => <strong className="text-white font-semibold" {...props} />,
          hr: () => <hr className="my-6 border-purple-800" />,
        }}
      >
        {blog.content}
      </ReactMarkdown>
          </div>
        </div>

        {/* Sidebar - Related Blogs */}
        <aside className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-300 mb-2">
            Related Posts
          </h3>
          {relatedBlogs.map((b, idx) => (
            <Link
              key={idx}
              href={`/blogs/${b.slug}`}
              className="block bg-[#1f1f1f] p-4 rounded-lg hover:bg-[#2a2a2a] transition"
            >
              <p className="font-medium text-white">{b.title}</p>
              <p className="text-sm text-[#ADB7BE] mt-1">
                {b.description.slice(0, 60)}...
              </p>
            </Link>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;

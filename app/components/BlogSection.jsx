"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import blogData from "@/app/blogdata";

const BlogSection = () => {
  return (
    <section id="blogs" className="py-24 px-6 md:px-20 bg-[#0f0f0f] text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">
        Blogs & Articles
      </h2>

      <div className="space-y-16">
        {blogData.map((blog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Animated Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-[45%]"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="rounded-lg h-64 object-cover shadow-lg w-full"
              />
            </motion.div>

            {/* Text Content */}
            <div className="md:w-[55%]">
              <h3 className="text-2xl font-semibold text-purple-300 mb-2">
                {blog.title}
              </h3>
              <p className="text-[#ADB7BE] text-sm mb-4">{blog.description}</p>
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-purple-400 underline hover:text-purple-200 text-sm"
              >
                Read full article →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

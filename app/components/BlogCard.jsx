import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-[#18191E] rounded-xl overflow-hidden shadow-md hover:shadow-purple-700 transition duration-300">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-purple-300 mb-2">{title}</h3>
        <p className="text-[#ADB7BE] text-sm mb-4">{description}</p>
        <Link
          href={link}
          target="_blank"
          className="text-purple-400 hover:text-purple-300 underline text-sm"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Post = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
};

const PopularProduct = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://versa-test-admin-596u.vercel.app/api/post"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-semibold mb-2">
          Popular Product By Categories
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative group overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <figure className="relative w-full h-56 overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </figure>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent ${
                hoveredPost === post.id ? "opacity-60" : "opacity-0"
              } transition-opacity duration-300 ease-in-out`}
            />
            <div
              className="card-body p-6 relative z-10"
              style={{
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform:
                  hoveredPost === post.id
                    ? "translateY(-20px)"
                    : "translateY(0)",
                opacity: hoveredPost === post.id ? 1 : 0.8,
              }}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {post.content}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  Published: {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full py-2 px-4 transition-all duration-200">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;

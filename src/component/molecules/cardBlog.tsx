"use client";
import React from "react";

type CardBlogProps = {
  date: string;
  category: string;
  categoryHref: string;
  title: string;
  titleHref: string;
  description: string;
  author: {
    name: string;
    role: string;
    imageUrl: string;
    profileHref: string;
  };
};

export default function CardBlog({
  date,
  category,
  categoryHref,
  title,
  titleHref,
  description,
  author,
}: CardBlogProps) {
  return (
    <div className="bg-[#222222] hover:bg-[#181818] p-5 rounded-2xl cursor-pointer">
      <article className="flex flex-col justify-between items-start max-w-xl">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={date} className="text-white">
            {date}
          </time>
          <a href={categoryHref} className="z-10 relative bg-primary hover:bg-gray-100 px-3 py-1.5 rounded-full font-medium text-gray-900">
            {category}
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 font-semibold text-white text-lg/6">
            <a href={titleHref}>
              <span className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="mt-5 text-gray-400 text-sm/6 line-clamp-3">{description}</p>
        </div>
        <div className="relative flex items-center gap-x-4 mt-8">
          <img src={author.imageUrl} alt={author.name} className="bg-gray-50 rounded-full size-10" />
          <div className="text-sm/5">
            <p className="font-semibold text-white">
              <a href={author.profileHref}>
                <span className="absolute inset-0" />
                {author.name}
              </a>
            </p>
            <p className="text-gray-500">{author.role}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

import CardBlog from "@/component/molecules/cardBlog";
import React from "react";

export default function NovedadesPage() {
  return (
    <div className="my-5">
      <div className="mb-7">
        <h1 className="font-black text-4xl">Novedades</h1>
        <p className="text-primary">Descripción</p>
      </div>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <CardBlog
          date="2020-03-16"
          category="Marketing"
          categoryHref="#"
          title="Boost your conversion rate"
          titleHref="#"
          description="Illo sint voluptas. Error voluptates culpa eligendi..."
          author={{
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            imageUrl: "/profileCourse.jpg",
            profileHref: "#",
          }}
        />
        <CardBlog
          date="2020-03-16"
          category="Marketing"
          categoryHref="#"
          title="Boost your conversion rate"
          titleHref="#"
          description="Illo sint voluptas. Error voluptates culpa eligendi..."
          author={{
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            imageUrl: "/profileCourse.jpg",
            profileHref: "#",
          }}
        />
      </div>
    </div>
  );
}

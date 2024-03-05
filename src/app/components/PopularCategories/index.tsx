import React from "react";

const PopularCategories = () => {
  const categoryImages: string[] = [
    "https://floimages.mncdn.com/media/catalog/product/img/banners/24-02/22/540x840-sneaker-love-kadin-eng-1708585783.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-09/07/global-brands-2-1694079325.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-09/07/licensed-brands-2-1694084490.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-09/07/elegance-with-heels-2-1694085518.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-09/07/boots-2-1694083933.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-09/07/athletic-shoes-2-1694074234.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-09/07/comfort-style-2-1694085315.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-09/07/high-fashion-2-1694076345.jpg.webp",
  ];

  return (
    <div className={"py-6"}>
      <div className={"max-w-[1180px] my-0 mx-auto snap-mandatory snap-x"}>
        <div className={"text-3xl font-semibold"}>Popular Categories</div>
        <div className={"flex gap-4 overflow-x-auto py-5"}>
          {categoryImages.map((categoryImage: string) => (
            <img
              src={categoryImage}
              key={categoryImage}
              width={225}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;

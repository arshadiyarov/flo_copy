import React from "react";

const PopularBrands = () => {
  const brandImages: string[] = [
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-08/23/nike-540x840-1692791333.jpg",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-08/23/adidas-540x840-1692791248.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-08/23/puma-540x840-1692791452.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-08/23/reebok-540x840-1692791584.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-08/23/uspolo-540x840-1692792707.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-08/23/ninewest-540x840-1692792288.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-08/23/polaris-540x840-1692792507.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-08/23/lumberjack-540x840-1692792179.jpg.webp",
    "https://floimages.mncdn.com/media/catalog/product/img/banners/23-08/23/kinetix-540x840-1692791737.jpg.webp",
  ];

  return (
    <div className={"py-6"}>
      <div className={"max-w-[1180px] my-0 mx-auto snap-mandatory snap-x"}>
        <div className={"text-3xl font-semibold"}>Popular Brands</div>
        <div className={"flex gap-4 overflow-x-auto"}>
          {brandImages.map((brandImage: string) => (
            <img
              src={brandImage}
              key={brandImage}
              width={225}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;

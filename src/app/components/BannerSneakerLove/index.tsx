import React from "react";
import Link from "next/link";

const BannerSneakerLove = () => {
  return (
    <div className={"bg-primary-orange"}>
      <div className={"max-w-[1180px] my-0 mx-auto py-8"}>
        <div className={"flex justify-between text-white"}>
          <div>
            <div className={"text-3xl pb-4"}>SNEAKER LOVE</div>
            <div className={"text-xl"}>Where do you want to shop?</div>
            <div
              className={"flex items-center justify-between text-black gap-8"}
            >
              <Link
                href={""}
                className={
                  "bg-white w-[135px] h-14 text-xl flex items-center justify-center"
                }
              >
                Women
              </Link>
              <Link
                href={""}
                className={
                  "bg-white w-[135px] h-14 text-xl flex items-center justify-center"
                }
              >
                Men
              </Link>
              <Link
                href={""}
                className={
                  "bg-white w-[135px] h-14 text-xl flex items-center justify-center"
                }
              >
                Kids
              </Link>
            </div>
          </div>
          <div className={"flex w-[675px] overflow-auto snap-mandatory snap-x"}>
            <img
              src="https://floimages.mncdn.com/media/catalog/product/img/banners/24-02/21/1400x1000-kadin-1708507650.jpg"
              alt="girl"
              width={675}
              className={"snap-center"}
              draggable={false}
            />
            <img
              src="https://floimages.mncdn.com/media/catalog/product/img/banners/24-02/21/1400x1000-erkek-1708507885.jpg"
              alt="girl"
              width={675}
              className={"snap-center"}
              draggable={false}
            />
            <img
              src="https://floimages.mncdn.com/media/catalog/product/img/banners/24-02/21/1400x1000-c-ocuk-1708507121.jpg"
              alt="girl"
              width={675}
              className={"snap-center"}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSneakerLove;

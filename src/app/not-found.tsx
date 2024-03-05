import React from "react";
import Link from "next/link";

const NotFound = () => {
  const categories = [
    "WOMEN",
    "MEN",
    "BOY",
    "GIRL",
    "SPORT",
    "SNEAKERS",
    "CLOTHING",
    "NEW",
    "DISCOUNT",
    "OUTLET",
  ];

  return (
    <div>
      <div className={"py-10 max-w-[1180px] my-0 mx-auto"}>
        <div className={"flex justify-between"}>
          <div>
            <div
              className={
                "text-primary-dark-gray text-3xl font-medium w-[700px]"
              }
            >
              Sorry, we couldn&apos;t find the page you were looking for.
            </div>
            <div className={"text-primary-dark-gray text-xl mb-14 w-[700px]"}>
              If you want to review thousands of products, you can browse the
              categories below.
            </div>
            <Link
              href={"/"}
              className={"text-center bg-primary-orange text-white px-7 py-3.5"}
            >
              BACK TO HOMEPAGE
            </Link>
          </div>
          <div>
            <img src="https://www.flo.com.kz/pub/assets/flo/img/404_01.jpg" />
            <img src="https://www.flo.com.kz/pub/assets/flo/img/404_02.gif" />
            <img src="https://www.flo.com.kz/pub/assets/flo/img/404_03.jpg" />
          </div>
        </div>
        <div className={"grid grid-cols-4 gap-8 mt-24"}>
          {categories.map((category: string) => (
            <Link
              key={category}
              href={""}
              className={
                "shadow text-center py-3 rounded border-2 border-white hover:border-primary-orange"
              }
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;

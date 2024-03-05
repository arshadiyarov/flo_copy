import React from "react";
import Link from "next/link";
import { IProps } from "./props";
const ShoesExpanded = (props: IProps) => {
  const { data } = props;
  return (
    <div className={"absolute bg-secondary-bg w-full left-0"}>
      <div
        className={
          "flex justify-between px-4 py-10 max-w-[1180px] my-0 mx-auto"
        }
      >
        <div>
          <div className={"text-primary-orange font-medium pb-2"}>
            Categories
          </div>
          <div className={"flex justify-between gap-20"}>
            <ul className={"flex flex-col gap-1"}>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  All Shoes
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Sneakers
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Boots
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Knee High Boots
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Loafers & Flats
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Casual Shoes
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Smart Shoes
                </Link>
              </li>
            </ul>

            <ul className={"flex flex-col gap-1"}>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Running
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Walking
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Football
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Basketball
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Tennis
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Hiking & Outdoor
                </Link>
              </li>
            </ul>

            <ul className={"flex flex-col gap-1"}>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Heels
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Ballerinas
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Sandals
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className={"font-light hover:text-primary-orange"}
                >
                  Slippers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={"flex justify-between gap-8"}>
            <div>
              <div className={"text-primary-orange font-medium pb-2"}>
                Popular Brands
              </div>
              <div className={"grid grid-cols-2 gap-2"}>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  Adidas
                </button>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  Nike
                </button>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  Puma
                </button>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  Reebok
                </button>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  Lumberjack
                </button>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  U.S. Polo Assn.
                </button>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  Lotto
                </button>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  Nine West
                </button>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  Inci
                </button>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  Butigo
                </button>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  Polaris
                </button>
                <button
                  className={
                    "bg-white border border-secondary-border py-2 px-4"
                  }
                >
                  Kinetix
                </button>
              </div>
            </div>
            <div>
              <div className={"text-primary-orange font-medium pb-2"}>
                Shoes
              </div>
              <img
                src="https://floimages.mncdn.com/media/catalog/product/img/content/24-01/11/anasayfa-1-1681905979.jpg"
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesExpanded;

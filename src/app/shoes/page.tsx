import React from "react";

import { HiOutlineHome } from "react-icons/hi2";
import Link from "next/link"; // Home icon
import { TbArrowsSort } from "react-icons/tb"; // Sort icon

const Shoes = () => {
  return (
    <div>
      <div className={"max-w-[1180px] my-0 mx-auto"}>
        <div className={"flex items-center justify-between border-b py-2"}>
          <div className={"flex items-center gap-2"}>
            <div>
              <Link href={"/"} className={"hover:text-primary-orange"}>
                <HiOutlineHome />
              </Link>
            </div>
            <div className={"text-primary-orange"}>/</div>
            <div className={"font-semibold"}>Shoes</div>
          </div>
          <div className={"flex items-center gap-5"}>
            <div className={"flex gap-3 font-light"}>
              <div>Other</div>
              <div className={"border-r border-black"}></div>
              <div className={"text-primary-orange"}>1720 Product</div>
            </div>
            <form
              action=""
              className={
                "flex items-center gap-2 border border-primary-gray text-primary-gray rounded p-2"
              }
            >
              <TbArrowsSort />
              <select>
                <option value="suggested" selected>
                  Suggested
                </option>
                <option value="lowest-price">Lowest Price</option>
                <option value="highest-price">Highest Price</option>
                <option value="new-arrivals">New Arrivals</option>
                <option value="best-sellers">Best Sellers</option>
                <option value="top-favorites">Top Favorites</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoes;

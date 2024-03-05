import React from "react";
import Link from "next/link";

import NavBar from "@/app/components/NavBar";

import { RiSearchLine } from "react-icons/ri"; // Search icon
import { PiUserLight } from "react-icons/pi"; // User icon
import { PiShoppingCartLight } from "react-icons/pi"; // Cart icon

const Header = () => {
  return (
    <header className={"bg-white"}>
      <div className={"bg-secondary-bg"}>
        <div
          className={
            "text-sm flex items-center justify-end gap-2 font-light py-2 max-w-[1180px] my-0 mx-auto"
          }
        >
          <Link href={""}>Order Status</Link>
          <Link href={""} className={"border-x border-black px-2"}>
            Help
          </Link>
          <Link
            href={""}
            className={"font-normal text-xs flex items-center gap-1"}
          >
            <img
              src={
                "https://floimages.mncdn.com/media/catalog/product/22-02/28/en.png"
              }
              alt={"en"}
              width={20}
              height={20}
              className={"rounded-full"}
            />
            EN
          </Link>
        </div>
      </div>

      <div className={"max-w-[1180px] my-0 mx-auto py-5"}>
        <div className={"flex items-center justify-between"}>
          <Link href={"/"}>
            <img
              src={
                "https://www.flo.com.kz/pub/assets/flo-v2/images/flo-logo.svg"
              }
              alt={"FLO"}
              width={135}
            />
          </Link>

          <div>
            <ul className={"flex items-center justify-between gap-8 text-xl"}>
              <li>
                <Link href={""} className={"hover:text-primary-orange"}>
                  Women
                </Link>
              </li>
              <li>
                <Link href={""} className={"hover:text-primary-orange"}>
                  Men
                </Link>
              </li>
              <li>
                <Link href={""} className={"hover:text-primary-orange"}>
                  Kids
                </Link>
              </li>
            </ul>
          </div>

          <div className={"w-5/12"}>
            <form
              className={
                "flex text-center justify-between bg-secondary-bg rounded-xl border-2 border-secondary-gray"
              }
            >
              <input
                placeholder={"Search..."}
                className={"outline-0 bg-secondary-bg px-5 rounded-xl w-full"}
              />
              <button
                className={
                  "text-secondary-gray active:bg-primary-orange active:text-white p-3 rounded-xl"
                }
              >
                <RiSearchLine className={"text-2xl"} />
              </button>
            </form>
          </div>

          <div className={"flex items-center justify-between gap-5"}>
            <Link href={""} className={"flex flex-col items-center"}>
              <PiUserLight className={"text-3xl"} />
              <span className={"text-sm font-light"}>Login</span>
            </Link>
            <Link href={""} className={"flex flex-col items-center"}>
              <PiShoppingCartLight className={"text-3xl"} />
              <span className={"text-sm font-light"}>My Bag</span>
            </Link>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;

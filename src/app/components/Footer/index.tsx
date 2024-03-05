import React from "react";
import Link from "next/link";

import { RiFacebookFill } from "react-icons/ri"; // Facebook icon
import { RiInstagramLine } from "react-icons/ri"; // Instagram icon
import { RiRefundFill } from "react-icons/ri"; // Return icon
import { FaTruck } from "react-icons/fa"; // Truck icon
import { IoChatboxEllipses } from "react-icons/io5"; // Chat icon
import { TbLockCheck } from "react-icons/tb"; // Lock With Check icon

const Footer = () => {
  return (
    <footer>
      <div className={"max-w-[1180px] mt-10 mx-auto left-0 bottom-0"}>
        <div className={"flex justify-between gap-20 items-top"}>
          <div>
            <div
              className={
                "text-lg border-b-2 border-secondary-border py-2 w-[407px]"
              }
            >
              Customer Services
            </div>
            <div
              className={
                "flex justify-between gap-7 items-top justify-between pt-6 font-light"
              }
            >
              <ul>
                <li className={"border-b-2 border-secondary-border py-2 mb-2"}>
                  <Link href={""}>Frequently Asked Question</Link>
                </li>
                <li className={"border-b-2 border-secondary-border py-2 mb-2"}>
                  <Link href={"/policy-and-cookies"}>
                    Policy and Cookie Policy
                  </Link>
                </li>
                <li className={"border-b-2 border-secondary-border py-2 mb-2"}>
                  <Link href={""}>Stores</Link>
                </li>
                <li className={"border-b-2 border-secondary-border py-2 mb-2"}>
                  <Link href={"/contact-us"}>Contact</Link>
                </li>
              </ul>
              <ul>
                <li className={"border-b-2 border-secondary-border py-2 mb-2"}>
                  <Link href={""}>Return and Change</Link>
                </li>
                <li className={"border-b-2 border-secondary-border py-2 mb-2"}>
                  <Link href={"/protection-of-personal-data"}>
                    Protection of Personal Data
                  </Link>
                </li>
                <li className={"border-b-2 border-secondary-border py-2 mb-2"}>
                  <Link href={"/hr-policy"}>About Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div
              className={
                "text-lg border-b-2 border-secondary-border py-2 w-[145px]"
              }
            >
              Follow
            </div>
            <ul className={"pt-6"}>
              <li className={"mb-3"}>
                <Link
                  href={"https://www.facebook.com/FLOShoesKazakhstan"}
                  target={"_blank"}
                  className={"flex items-center justify-between gap-2"}
                >
                  <div className={"bg-primary-gray p-2.5 rounded-full"}>
                    <RiFacebookFill className={"text-white text-xl"} />
                  </div>
                  <span className={"font-light"}>Flo Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.instagram.com/floshoes.kz/"}
                  target={"_blank"}
                  className={"flex items-center justify-between gap-2"}
                >
                  <div className={"bg-primary-gray p-2.5 rounded-full"}>
                    <RiInstagramLine className={"text-white text-xl"} />
                  </div>
                  <span className={"font-light"}>Flo Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={"w-[500px]"}>
            <div
              className={
                "flex items-start justify-between text-primary-gray border-b-2 border-secondary-border pb-4 mb-4"
              }
            >
              <RiRefundFill className={"text-3xl mx-5"} />
              <div className={"flex flex-col font-medium w-3/4"}>
                <div className={"text-lg"}>Easy Return</div>
                <div className={"text-black font-light"}>
                  You can return your unused products withing the return period.
                </div>
              </div>
            </div>

            <div
              className={
                "flex items-start justify-between text-primary-gray border-b-2 border-secondary-border pb-4 mb-3"
              }
            >
              <FaTruck className={"text-3xl mx-5"} />
              <div className={"flex flex-col font-medium w-3/4"}>
                <div className={"text-lg"}>Free Shipping</div>
                <div className={"text-black font-light"}>
                  Free Shipping for FLO sellers above 50000 KZT and according to
                  the different basket amounts of our sellers
                </div>
              </div>
            </div>

            <div
              className={
                "flex items-start justify-between text-primary-gray border-b-2 border-secondary-border pb-4 mb-3"
              }
            >
              <IoChatboxEllipses className={"text-3xl mx-5"} />
              <div className={"flex flex-col font-medium w-3/4"}>
                <div className={"text-lg"}>Help Center</div>
                <div className={"text-black font-light"}>
                  Our customer services provides service to your calls 5
                  business days a week, between the hours of 9:00 and 18:00
                </div>
              </div>
            </div>

            <div
              className={
                "flex items-start justify-between text-primary-gray border-b-2 border-secondary-border pb-4"
              }
            >
              <TbLockCheck className={"text-3xl mx-5"} />
              <div className={"flex flex-col font-medium w-3/4"}>
                <div className={"text-lg"}>Safe Shopping</div>
                <div className={"text-black font-light"}>
                  Pay with the most popular and reliable methods in the world.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"font-medium text-primary-gray mt-12 mb-3"}>
          &copy; 2022 FLO.COM.TR. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

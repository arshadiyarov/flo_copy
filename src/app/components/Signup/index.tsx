import React from "react";
import Link from "next/link";

import { FaRegSquare } from "react-icons/fa6"; // Empty Checkbox icon
import { FaRegSquareCheck } from "react-icons/fa6"; // Checkbox icon
import { RiCloseFill } from "react-icons/ri"; // Close icon

const Signup = () => {
  return (
    <div
      className={
        "py-2 bg-black bg-opacity-70 w-full h-full fixed overflow-auto"
      }
    >
      <div
        className={
          "my-auto mx-auto bg-white p-11 rounded-md w-[450px] relative"
        }
      >
        <RiCloseFill
          className={"cursor-pointer absolute text-3xl right-3 top-4"}
        />
        <div className={"text-center font-light text-xl mb-10"}>
          Sign Up / CREATE AN ACCOUNT
        </div>
        <form className={"flex flex-col gap-5"}>
          <div className={"flex flex-col"}>
            <input
              required
              type="text"
              placeholder={"Name"}
              className={
                "outline-0 p-2 border border-secondary-gray font-light rounded-sm"
              }
            />
            <div className={"text-error-text"}>Please fill this field</div>
          </div>
          <div className={"flex flex-col"}>
            <input
              required
              type="text"
              placeholder={"Surname"}
              className={
                "outline-0 p-2 border border-secondary-gray font-light rounded-sm"
              }
            />
            <div className={"text-error-text"}>Please fill this field</div>
          </div>

          <div className={"flex flex-col"}>
            <input
              required
              type="email"
              placeholder={"E-mail Address"}
              className={
                "outline-0 p-2 border border-secondary-gray font-light rounded-sm"
              }
            />
            <div className={"text-error-text"}>Please fill this field</div>
          </div>
          <div className={"flex items-start justify-between gap-5"}>
            <select
              required
              name="phone-code"
              className={
                "outline-0 p-[0.6rem] border border-secondary-gray font-light rounded-sm"
              }
            >
              <option value="+7" selected>
                +7
              </option>
              <option value="+90">+90</option>
            </select>
            <div className={"flex flex-col w-full"}>
              <input
                required
                type="number"
                placeholder={"Phone Number"}
                className={
                  "outline-0 p-2 border border-secondary-gray font-light rounded-sm"
                }
              />
              <div className={"text-error-text"}>Please fill this field</div>
            </div>
          </div>
          <div className={"flex flex-col gap-1"}>
            <input
              required
              type="password"
              placeholder={"Password"}
              className={
                "outline-0 p-2 border border-secondary-gray font-light rounded-sm"
              }
            />
            <div className={"text-xs px-2 w-5/6 text-primary-gray"}>
              Please enter at least 8 characters, 1 capital letter and 1 number.
            </div>
            <div className={"text-error-text leading-5"}>
              * Please enter at least 8 characters, 1 uppercase letter and a
              number
            </div>
          </div>
          <div className={"flex items-center justify-between gap-5"}>
            <button
              className={"py-3 w-1/2 border border-secondary-gray rounded-sm"}
            >
              Women
            </button>
            <button
              className={"py-3 w-1/2 border border-secondary-gray rounded-sm"}
            >
              Men
            </button>
          </div>
          <div className={"flex items-center gap-3 cursor-pointer"}>
            <FaRegSquare className={"text-3xl cursor-pointer"} />
            <div className={"text-xs font-light"}>
              I would like to be informed about the campaigns by e-mail.
            </div>
          </div>
          <div className={"flex items-center gap-3 cursor-pointer"}>
            <FaRegSquare className={"text-3xl cursor-pointer"} />
            <div className={"text-xs font-light"}>
              I want to be informed about the campaigns by sms and call.
            </div>
          </div>
          <div className={"flex flex-col"}>
            <div className={"flex items-center gap-3 cursor-pointer"}>
              <FaRegSquareCheck
                className={"text-3xl cursor-pointer text-primary-orange"}
              />
              <div className={"text-xs font-light"}>
                I&apos;ve read and accept the{" "}
                <Link href={""} className={"underline"}>
                  Membership Agreement
                </Link>
                .
              </div>
            </div>
            <div className={"text-error-text"}>Please fill this field</div>
          </div>
          <div className={"flex flex-col"}>
            <div className={"flex gap-3 cursor-pointer"}>
              <FaRegSquareCheck
                className={"text-3xl cursor-pointer text-primary-orange"}
              />
              <div className={"text-xs font-light w-5/6"}>
                I&apos;ve read and accept the{" "}
                <Link href={""} className={"underline"}>
                  Flo Terms and Conditions of Use
                </Link>{" "}
                and within this scope, my personal data, depending on my
                shopping habits, sales and marketing of products and services,
                conducting market research activities, planning and / or
                performing customer satisfaction activities, direct or indirect
                marketing to be processed for the purpose of carrying out its
                activities and to send advertisements, promotions, campaigns and
                similar commercial electronic messages to my contact
                information.
              </div>
            </div>
            <div className={"text-error-text"}>Please fill this field</div>
          </div>

          <button
            type={"submit"}
            className={"bg-primary-orange py-3 rounded-sm text-white text-xl"}
          >
            Sign Up
          </button>
        </form>
        <div className={"text-center pt-6 font-light"}>
          Do you have an account?{" "}
          <Link
            href={""}
            className={"text-primary-orange underline font-normal"}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

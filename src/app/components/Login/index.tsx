import React from "react";
import Link from "next/link";

import { RiCloseFill } from "react-icons/ri"; // Close icon

const Login = () => {
  return (
    <div
      className={
        "bg-black bg-opacity-70 w-full h-full fixed flex items-center justify-center"
      }
    >
      <div className={"bg-white p-10 rounded-md w-[450px] relative"}>
        <RiCloseFill
          className={"cursor-pointer absolute text-3xl right-3 top-4"}
        />
        <div
          className={
            "flex items-center justify-center gap-1 text-lg font-light mb-8"
          }
        >
          <img
            src="https://www.flo.com.kz/pub/assets/flo-v2/images/flo-logo.svg"
            alt="flo"
            width={55}
          />
          LOGIN
        </div>
        <form className={"flex flex-col gap-5 w-[350px] mx-auto"}>
          <div
            className={
              "bg-error-bg text-error-text font-light text-sm mx-auto text-center w-[350px] py-2 rounded-sm"
            }
          >
            Username or password is wrong
          </div>
          <div className={"flex flex-col"}>
            <input
              type="text"
              placeholder={"E-mail Address"}
              className={
                "outline-0 p-2 border border-secondary-gray font-light rounded-sm"
              }
            />
            <div className={"text-error-text"}>
              Please write a valid email address
            </div>
          </div>
          <input
            type="password"
            placeholder={"Password"}
            className={
              "outline-0 p-2 border border-secondary-gray font-light rounded-sm"
            }
          />
          <div
            className={
              "text-primary-gray underline text-right font-light text-sm"
            }
          >
            <Link href={""}>Forgot Password</Link>
          </div>
          <button
            type={"submit"}
            className={"bg-primary-orange p-3 rounded-sm text-white text-xl"}
          >
            LOGIN
          </button>
        </form>
        <div className={"mt-8 text-center font-light"}>
          If you don't have an account{" "}
          <Link
            href={""}
            className={"text-primary-orange underline font-medium"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

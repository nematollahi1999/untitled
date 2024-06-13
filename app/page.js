"use client";
import Head from "next/head";
import Navbar from "@/components/molecules/nav/Navbar";
import ExpandingGlassButtonWhite from "@/components/atoms/buttons/ExpandingGlassButtonWhite";
import Arrow from "@/public/icons/Arrow";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden ">
      <Navbar />
      <Head>
        <title>UNTITLED Clothing</title>
      </Head>
      <div className="absolute inset-0 overflow-x-auto sm:overflow-hidden">
        {/* make it responsive for ipad */}
        <div className="relative min-w-[100vw] sm:min-w-full h-full">
          <div
            className="relative w-[480vw] h-[100%] sm:w-full sm:h-full"
            style={{
              backgroundImage: "url('/images/02v01.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="fixed top-0 z-50 w-full block sm:hidden p-4">
              <a
                href="#"
                className="flex items-center justify-center space-x-3 rtl:space-x-reverse "
              >
                <img
                  src="./images/logo.svg"
                  className="h-8"
                  alt="Flowbite Logo"
                />
              </a>
            </div>
            <div className="absolute w-full h-full">
              <ExpandingGlassButtonWhite
                text="ایده بگیر"
                color={"white"}
                className=" p-2"
                style={{ top: "37%", left: "6%" }}
              />

              <ExpandingGlassButtonWhite
                text="مارکت پلیس"
                color={"white"}
                className=" p-2"
                style={{ top: "26%", left: "39%" }}
              />

              <ExpandingGlassButtonWhite
                text="ساخت لباس"
                color={"white"}
                className=" p-2"
                style={{ top: "72%", left: "62%" }}
              />

              <ExpandingGlassButtonWhite
                text="بسته بندی"
                color={"white"}
                className=" p-2"
                style={{ top: "16%", left: "64%" }}
              />

              <ExpandingGlassButtonWhite
                text="سایزبندی"
                color={"white"}
                className=" p-2"
                style={{ top: "36%", left: "82.5%" }}
              />
              {/* <AnimatedButton
                className="absolute p-2"
                style={{ top: "28%", left: "89%" }}
                tooltip={"راهنمای سایزبندی"}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

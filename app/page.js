"use client";
import Head from "next/head";
import Navbar from "@/components/molecules/nav/Navbar";
import ArrowButton from "@/components/atoms/buttons/ArrowButton";
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
            <div className="relative w-full h-full">
              <ArrowButton
                text="ایده بگیر"
                className="absolute p-2"
                style={{ top: "37%", left: "6%" }}
              />

              <ArrowButton
                text="مارکت پلیس"
                className="absolute p-2"
                style={{ top: "30%", left: "36%" }}
              />

              <ArrowButton
                text="ساخت لباس"
                className="absolute p-2"
                style={{ top: "72%", left: "62%" }}
              />

              <ArrowButton
                text="بسته بندی"
                className="absolute p-2"
                style={{ top: "16%", left: "64%" }}
              />

              <ArrowButton
                text="سایزبندی"
                className="absolute p-2"
                style={{ top: "40%", left: "82.5%" }}
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

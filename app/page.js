"use client";
import Head from "next/head";
import AnimatedButton from "@/components/atoms/buttons/AnimatedButton";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Head>
        <title>UNTITLED Clothing</title>
      </Head>
      <div className="absolute inset-0 overflow-x-auto sm:overflow-hidden">
        <div className="relative min-w-[100vw] sm:min-w-full h-full">
          <div
            className="relative w-[400vw] sm:w-full h-full"
            style={{
              backgroundImage: "url('/images/0104v02.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative w-full h-full">
              <AnimatedButton
                className="absolute p-2"
                style={{ top: "38%", left: "4%" }}
                tooltip={"ایده بگیر"}
              />
              <AnimatedButton
                className="absolute p-2"
                style={{ top: "0%", left: "43%" }}
                tooltip={"مارکت پلیس"}
              />
              <AnimatedButton
                className="absolute p-2"
                style={{ top: "24%", left: "65%" }}
                tooltip={"ساخت لباس"}
              />
              <AnimatedButton
                className="absolute p-2"
                style={{ top: "-20%", left: "67%" }}
                tooltip={"بسته بندی"}
              />
              <AnimatedButton
                className="absolute p-2"
                style={{ top: "-28%", left: "87%" }}
                tooltip={"راهنمای سایزبندی"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

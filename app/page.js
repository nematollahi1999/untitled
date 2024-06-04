"use client";
import Head from "next/head";
import AnimatedButton from "@/components/atoms/buttons/AnimatedButton";
import CircularButton from "@/components/atoms/buttons/CircularButton";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden ">
      <Head>
        <title>UNTITLED Clothing</title>
      </Head>
      <div className="absolute inset-0 overflow-x-auto sm:overflow-hidden">
        {/* make it responsive for ipad */}
        <div className="relative min-w-[100vw] sm:min-w-full h-full">
          <div
            className="relative w-[480vw] h-[100%] sm:w-full sm:h-full"
            style={{
              backgroundImage: "url('/images/0104v02.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative w-full h-full">
              <CircularButton
                text="مارکت پلیس"
                className="absolute p-2"
                style={{ top: "40%", left: "8%" }}
              />
              {/* <AnimatedButton
                className="absolute p-2"
                style={{ top: "40%", left: "8%" }}
                tooltip={"ایده بگیر"}
              /> */}
              <AnimatedButton
                className="absolute p-2"
                style={{ top: "16%", left: "40%" }}
                tooltip={"مارکت پلیس"}
              />
              <AnimatedButton
                className="absolute p-2"
                style={{ top: "57%", left: "68%" }}
                tooltip={"ساخت لباس"}
              />
              <AnimatedButton
                className="absolute p-2"
                style={{ top: "20%", left: "70%" }}
                tooltip={"بسته بندی"}
              />
              <AnimatedButton
                className="absolute p-2"
                style={{ top: "28%", left: "89%" }}
                tooltip={"راهنمای سایزبندی"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
              {/* Button 1 */}
              <AnimatedButton
                className="absolute p-2"
                style={{ top: "36%", left: "3%" }}
                tooltip={"ساخت لباس"}
              />
              {/* Button 2 */}
              <AnimatedButton
                className="absolute p-2"
                style={{ top: "40%", left: "50%" }}
                tooltip={"ساخت لباس"}
              />
              {/* Add more buttons as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

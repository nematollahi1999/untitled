import Navbar from "@/components/molecules/nav/Navbar";
import ToggleMenu from "@/components/organisms/ToggleMenu";
import "@/styles/globals.css";

export const metadata = {
  title: "UNTITLED",
  description: "Create your own style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <ToggleMenu />
      </body>
    </html>
  );
}

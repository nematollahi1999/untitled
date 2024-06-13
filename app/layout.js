import ToggleMenu from "@/components/molecules/nav/ToggleMenu";
import "@/styles/globals.css";

export const metadata = {
  title: "UNTITLED",
  description: "Create your own style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-numerals">
        
        {children}
        <ToggleMenu />
      </body>
    </html>
  );
}

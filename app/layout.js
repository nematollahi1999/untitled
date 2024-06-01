import "@/styles/globals.css";


export const metadata = {
  title: "UNTITLED",
  description: "Create your own style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

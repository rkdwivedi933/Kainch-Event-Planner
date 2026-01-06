import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="  antialiased"
      >
        {/* <Navbar/> */}

        <main className=" min-h-full">{children}</main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}

import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "aseCar Garage",
  description: "Discover world's best car showcase application",
  icons: {
    icon: {
      url: "/logo.svg",
    },
    shortcut: { url: "/logo.svg" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

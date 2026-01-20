import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";



const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const fontBangla = localFont({
  src: "../app/fonts/mayaboti-Italic.ttf",
  // weight:""
});

export const metadata = {
  metadataBase: new URL("https://hero-kids-sepia.vercel.app"),

  title: {
    default: "Hero Kidz – Premium Educational Toys for Kids",
    template: "%s | Hero Kidz",
  },

  description:
    "Hero Kidz offers premium, safe and educational toys designed to inspire creativity, learning and fun for children.",

  keywords: [
    "kids toys",
    "educational toys",
    "learning toys for kids",
    "children toys Bangladesh",
    "safe toys for kids",
    "Hero Kidz",
  ],

  authors: [{ name: "Hero Kidz Team" }],
  creator: "Hero Kidz",

  openGraph: {
    title: "Hero Kidz – Premium Educational Toys for Kids",
    description:
      "Discover premium educational toys that help kids learn, play and grow safely.",
    url: "https://herokidz.com",
    siteName: "Hero Kidz",
    images: [
      {
        url: "https://ibb.co.com/7J8VHG59", // homepage preview
        width: 1200,
        height: 630,
        alt: "Hero Kidz Homepage Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz – Premium Educational Toys",
    description:
      "Safe, fun and educational toys designed for modern kids.",
    images: ["https://ibb.co.com/7J8VHG59"],
  },

  icons: {
    icon: "https://ibb.co.com/0yTm5zWb",
    shortcut: "https://ibb.co.com/0yTm5zWb",
    apple: "https://ibb.co.com/0yTm5zWb",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar></Navbar>
          </header>
          <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
            {children}
          </main>

          <footer>
            <Footer></Footer>
          </footer>
        </body>
    </html>
  );
}

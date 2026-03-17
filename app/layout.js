import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Dental Website",
  description: "Modern dental appointment booking website",
  authors: [{ name: "Vatsal Kachhadiya" }],
  creator: "Vatsal Kachhadiya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="md:px-20">
            <Header />
            <main className="app-shell">{children}</main>
            <Toaster />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

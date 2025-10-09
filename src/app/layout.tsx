import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - Este é um blog com Next.js",
  description: "Essa seria a descrição do meu blog",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
        <header><h1>Header</h1></header>
        <div className="bg-red-500">{children}</div>
        <footer>Footer</footer>
      </body>
    </html>
  );
}

import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";

export const metadata = {
  title: "BlogX",
  description: "A Blog app created by madan bazgai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}

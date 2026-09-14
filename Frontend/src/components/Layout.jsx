import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
      <Header />
      <main className="w-full pt-16 bg-surface flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

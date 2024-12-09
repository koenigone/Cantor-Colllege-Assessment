import "./globals.css";
import "./scrollbar.css";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/header/mobile-header";
import ScrollUp from "./components/scrollUp/scrollUp";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <aside>
            <Sidebar />
          </aside>

          <div className="content">
            <header>
              <div className="mobile-header">
                <MobileHeader />
              </div>
            </header>
            <main className="main-container">{children}</main>
            <ScrollUp />
          </div>
        </div>
      </body>
    </html>
  );
}

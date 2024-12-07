import './globals.css';
import './scrollbar.css';
import Sidebar from "./components/Sidebar";
import Header from './components/header/header';

export default function RootLayout({ children }) {
  
  return (
    <html lang='en'>
      <body>
        <div className="container">
          <aside>
            <Sidebar />
          </aside>

          <div className="content">
            <Header />
            <main className="main-container">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
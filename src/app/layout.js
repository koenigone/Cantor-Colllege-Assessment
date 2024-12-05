import './globals.css';
import './scrollbar.css';
import Sidebar from "./components/Sidebar";
import Searchbar from './components/Searchbar';

export default function RootLayout({ children }) {
  
  return (
    <html lang='en'>
      <body>
        <div className="container">
          <aside>
            <Sidebar />
          </aside>

          <div className="content">
            <header>
              <Searchbar />
            </header>
            <main className="main-container">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
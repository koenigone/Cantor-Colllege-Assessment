import './globals.css';
import './scrollbar.css';
import Sidebar from "./components/Sidebar";
import Header from './components/header/header';
import Head from 'next/head';

export default function RootLayout({ children }) {
  
  return (
    <html lang='en'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
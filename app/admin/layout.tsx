import { Inter } from 'next/font/google'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../app.css';
import DashboardSidebar from '@/components/Sidebar/DashboardSidebar';
import DashboardNavbar from '@/components/Navbar/DashboardNavbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <div className='flex '>
          <div className="min-h-screen relative lg:static">
            <DashboardSidebar />
          </div>
          <div className="min-h-screen relative lg:static">
            <div className="min-h-screen flex-column relative flex-auto">
              <DashboardNavbar />
              <div className="flex flex-column flex-auto">
                <div className="p-3 surface-gray flex-auto">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>

      </body>
    </html>
  )
}
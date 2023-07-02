import './globals.css'
import Navbar from '@/srcs/components/navbar/Navbar'
import Footer from '@/srcs/components/footer/Footer'
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>
        <div className='container'>
        <Navbar / >
        {children}
        <Footer / >
        </div>
      </body>
    </html>
  )
}

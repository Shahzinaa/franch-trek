import Header from './Components/Header'
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-neutral-900 text-white font-outfit mx-28 overflow-x-hidden'>
        <Header/>
        {children}
        </body>
    </html>
  )
}

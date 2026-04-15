import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="max-w-5xl mx-auto px-12 pb-24 max-sm:px-6">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

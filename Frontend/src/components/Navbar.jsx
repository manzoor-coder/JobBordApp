import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Scrolling down & past 100px
      } else {
        setIsVisible(true) // Scrolling up
      }

      // Add blur effect after scrolling 50px
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const fadeDownStyle = `
  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeDown {
    animation: fadeDown 0.5s ease-out;
  }`

  return (
    <>
      <style>{fadeDownStyle}</style>
      <header
        className={`w-full top-0 left-0 z-50 transition-all duration-500 ${
          isScrolled ? "fixed backdrop-blur-md bg-white/60 shadow-md animate-fadeDown" : "relative bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">JobBoard</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <Link to="#jobs" className="hover:text-blue-500 transition">
              Jobs
            </Link>
            <Link to="#companies" className="hover:text-blue-500 transition">
              Companies
            </Link>
            <Link to="#about" className="hover:text-blue-500 transition">
              About
            </Link>
            <Link to="#contact" className="hover:text-blue-500 transition">
              Contact
            </Link>
            <Link to="/jobpost" className="hover:text-blue-500 transition">
              Post Job
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-500 transition"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Drawer - RIGHT SIDE */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-blue-600">JobBoard</h1>
            <button
              className="p-2 text-gray-700 hover:text-blue-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex flex-col p-6 space-y-4">
            <Link
              to="#jobs"
              className="text-lg text-gray-700 hover:text-blue-500 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link
              to="#companies"
              className="text-lg text-gray-700 hover:text-blue-500 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Companies
            </Link>
            <Link
              to="#about"
              className="text-lg text-gray-700 hover:text-blue-500 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="#contact"
              className="text-lg text-gray-700 hover:text-blue-500 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/jobpost"
              className="text-lg text-gray-700 hover:text-blue-500 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Post Job
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
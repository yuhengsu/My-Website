import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-8 border-b border-gray-100 dark:border-gray-800 mb-16">
      <Link
        to="/"
        className="text-sm font-semibold tracking-tight text-black dark:text-white no-underline"
      >
        Yu Heng Su
      </Link>
      <div className="flex items-center gap-6">
        <ul className="flex gap-8 list-none m-0 p-0">
          <li>
            <Link
              to="/"
              className="text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 no-underline"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 no-underline"
            >
              About Me
            </Link>
          </li>
          <li>
            <a
              href="/Benson Su - CS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 no-underline"
            >
              Resume
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  )
}

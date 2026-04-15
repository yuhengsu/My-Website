export default function Footer() {
  return (
    <footer className="mt-24 pt-10 border-t border-gray-100 dark:border-gray-800 text-center">
      <a href="mailto:yuhengsu.tw@gmail.com" className="inline-block mx-2.5">
        <img
          src="/pictures/email-icon.png"
          alt="email"
          className="h-5 w-5 opacity-40 hover:opacity-100 transition-opacity duration-200"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/yu-heng-su-25ba9a170/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mx-2.5"
      >
        <img
          src="/pictures/linkedin-icon.png"
          alt="linkedin"
          className="h-5 w-5 opacity-40 hover:opacity-100 transition-opacity duration-200"
        />
      </a>
      <a
        href="https://github.com/yuhengsu"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mx-2.5"
      >
        <img
          src="/pictures/github-icon.png"
          alt="github"
          className="h-5 w-5 opacity-40 hover:opacity-100 transition-opacity duration-200"
        />
      </a>
    </footer>
  )
}

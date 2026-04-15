import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { projectDetails } from '../data/projectDetails'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectDetails[slug]

  if (!project) {
    return (
      <Layout>
        <div className="text-center py-24">
          <p className="text-gray-400 text-sm mb-4">Project not found.</p>
          <Link
            to="/"
            className="text-sm text-black dark:text-white border-b border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors pb-px no-underline"
          >
            ← Back to projects
          </Link>
        </div>
      </Layout>
    )
  }

  const [heroImage, ...galleryImages] = project.images
  const techList = project.tech.split(',').map((t) => t.trim())
  const externalLinks = project.links.filter((l) => l.href)
  const infoLinks = project.links.filter((l) => !l.href)

  return (
    <Layout>
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 no-underline mb-10 tracking-wide"
      >
        ← Projects
      </Link>

      {/* Header: info left, hero image right */}
      <div className="grid grid-cols-[1fr_1fr] gap-16 mb-16 items-start max-[800px]:grid-cols-1 max-[800px]:gap-10">
        {/* Left: title, tech, description, links */}
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold tracking-tight leading-[1.05] mb-5 max-[800px]:text-4xl">
            {project.title}
          </h1>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {techList.map((tech, i) => (
              <span
                key={i}
                className="text-xs border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 text-gray-400 dark:text-gray-500 tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 font-light mb-10 flex-1">
            {project.description}
          </p>

          {/* Links */}
          {(externalLinks.length > 0 || infoLinks.length > 0) && (
            <div className="flex flex-col gap-3">
              {externalLinks.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {externalLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs font-medium border border-black dark:border-white text-black dark:text-white px-4 py-2 rounded no-underline hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 tracking-wide"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
              {infoLinks.map((link, i) => (
                <p key={i} className="text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase m-0">
                  {link.label}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Right: hero image */}
        <div className="w-full">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full aspect-video object-cover rounded-md border border-gray-100 dark:border-gray-800 block"
          />
        </div>
      </div>

      {/* Gallery: remaining images in 2-col grid */}
      {galleryImages.length > 0 && (
        <>
          <div className="border-t border-gray-100 dark:border-gray-800 mb-10" />
          <div
            className={
              galleryImages.length === 1
                ? 'grid grid-cols-1 gap-4 max-w-2xl'
                : 'grid grid-cols-2 gap-4 max-[600px]:grid-cols-1'
            }
          >
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="w-full aspect-video object-cover rounded-md border border-gray-100 dark:border-gray-800 block"
              />
            ))}
          </div>
        </>
      )}
    </Layout>
  )
}

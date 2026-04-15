import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <Layout>
      <main>
        <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-8">
          Projects
        </p>
        <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

function ProjectCard({ project }) {
  const cardClass =
    'border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden hover:border-black dark:hover:border-white transition-colors duration-200 block no-underline text-black dark:text-white'

  const inner = (
    <>
      <img
        src={project.img}
        alt={project.alt}
        className="w-full aspect-square object-cover block"
      />
      <p className="text-xs font-medium px-3 py-3 m-0 border-t border-gray-100 dark:border-gray-800 tracking-tight">
        {project.name}
      </p>
    </>
  )

  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {inner}
      </a>
    )
  }

  return (
    <Link to={`/projects/${project.slug}`} className={cardClass}>
      {inner}
    </Link>
  )
}

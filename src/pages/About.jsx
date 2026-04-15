import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <article>
        <div className="grid grid-cols-[1fr_320px] gap-20 items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight mb-8 leading-tight">Hello</h1>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 font-light mb-5">
              My name is Yu Heng Su, but people usually just call me Benson. I am currently a
              fourth year undergraduate student at the University of Toronto majoring in computer
              science and mathematics. I've always been fascinated by the possibilities of computer
              technologies as a child and have developed a particular interest in software
              development.
            </p>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 font-light mb-5">
              Throughout my studies, I've enjoyed developing software that either assists or
              entertains users, focusing on games as my preferred specialty and primary interest.
            </p>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 font-light mb-5">
              In my time off I enjoy going for a hike, cooking, eating good food and of course,
              playing video games. One of my all time favorite games is Ori and the Blind Forest. I
              fell in love with the story telling, artwork, and soundtrack during my first
              playthrough. It is my goal to make a game just as enjoyable and elegant one day.
            </p>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 font-light">
              Programming is always fun for me and I never see it as just work. I'm always looking
              to take on new challenges and adapting to different styles and languages.
            </p>
          </div>
          <div className="sticky top-10 max-[900px]:static max-[900px]:max-w-xs">
            <img
              src="/pictures/me-and-dog.png"
              alt="Me and my puppy on a good hike"
              className="w-full rounded-md border border-gray-100 dark:border-gray-800 block"
            />
          </div>
        </div>
      </article>
    </Layout>
  )
}

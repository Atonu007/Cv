import Link from "next/link";


export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      {/* background image in this div*/}
      <div className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Atonu Proshad Shaha
          </h1>
          <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white-500">
            Web Developer
          </span>
          <p className="text-gray-200 hidden md:block">
          An energetic engineer with a passion for innovation and
          technology, majoring in computer science and engineering. I
          appreciate working in various environments since it allows me
          to gather knowledge and get to know different people's
          characteristics. Always willing to take on new tasks. Passionate
          about sharing experiences and encouraging others.
          </p>
          {/* links learn more/ my projects/Contact Me */}
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              About Me
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-blue-500  hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact Me
            </Link>
          </div>
        </div>
      </div>


      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

       {/* Horse image */}
      <div className="absolute bottom-0 right-0 z-[10]">
        <img
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        {/* clif image */}
        <img src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

       {/* tress image */}
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <img
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
       


      <img
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      /> 

     

    </main>

  );
}

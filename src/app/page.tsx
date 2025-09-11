
export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <>
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 border-b-2 border-gray-700 ">
      <header className="row-start-1 w-full flex justify-between items-center t ">
        <h1 className="text-3xl font-bold tracking-wider">MPLutanywa</h1>
        <nav className="flex gap-4 text-sm">
          <a href="about">About</a>
          <a href="projects">Projects</a>
          <a href="contact">Contact</a>
        </nav>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <h2 className="text-3xl font-bold tracking-wide text-center sm:text-left">
    From backend logic to frontend magic ✨
  </h2>
  <p className="text-lg text-gray-600 max-w-xl text-center sm:text-left">
    I’m a full-stack developer with a passion for building scalable web applications, 
    optimizing performance, and creating smooth user experiences. 
    Skilled in Django, Next.js, and networking — I connect ideas to execution.
  </p>

      </main>
      <footer className="row-start-3  text-sm text-gray-500">
        @ {currentYear} MPLutanywa

      </footer>
      
    </div>
    </>
  );
}

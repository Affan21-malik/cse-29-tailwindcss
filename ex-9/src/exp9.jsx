function Exp9() {
  return (
    <>

      {/* Header */}
      <header className="bg-blue-500 text-white p-4">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <h1 className="text-2xl font-bold">
            FitLife
          </h1>

          <ul className="flex flex-col md:flex-row gap-4 mt-3 md:mt-0">

            <li>Home</li>
            <li>Programs</li>
            <li>Trainers</li>
            <li>Contact</li>

          </ul>

        </div>

      </header>

      {/* Hero Section */}
      <section className="bg-gray-200 p-10 text-center">

        <h2 className="text-3xl font-bold">
          Fitness Training Program
        </h2>

        <p className="mt-4">
          Start your fitness journey today.
        </p>

        <button className="bg-blue-500 text-white px-4 py-2 mt-4">
          Join Now
        </button>

      </section>

      {/* Services */}
      <section className="p-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="border p-4 text-center">
            <h3 className="font-bold">
              Weight Training
            </h3>
          </div>

          <div className="border p-4 text-center">
            <h3 className="font-bold">
              Yoga Classes
            </h3>
          </div>

          <div className="border p-4 text-center">
            <h3 className="font-bold">
              Diet Plans
            </h3>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4">

        <p>Contact Info</p>

        <p>Copyright © 2026</p>

      </footer>

    </>
  )
}

export default Exp9
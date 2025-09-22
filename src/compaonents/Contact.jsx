const Contact = () => (
  <div className="min-h-[100vh] flex flex-col items-center justify-center bg-zinc-900 py-12 px-4">
    <h2 className="text-4xl font-extrabold text-amber-400 mb-8 tracking-wide">
      Contact Us 🍽️
    </h2>

    <form className="bg-black bg-opacity-70 rounded-3xl shadow-2xl p-8 flex flex-col gap-6 w-full max-w-lg border border-amber-500">
      <input
        type="text"
        className="border-b-2 border-amber-500 bg-transparent px-4 py-3 text-xl text-zinc-100 placeholder-zinc-400 outline-none focus:border-amber-300 transition"
        placeholder="Your Name"
      />
      <input
        type="email"
        className="border-b-2 border-amber-500 bg-transparent px-4 py-3 text-xl text-zinc-100 placeholder-zinc-400 outline-none focus:border-amber-300 transition"
        placeholder="Email"
      />
      <input
        type="tel"
        pattern="[0-9]{10}"
        className="border-b-2 border-amber-500 bg-transparent px-4 py-3 text-xl text-zinc-100 placeholder-zinc-400 outline-none focus:border-amber-300 transition"
        placeholder="Phone (10 digits)"
      />
      <button
        type="submit"
        className="bg-amber-500 text-black rounded-2xl py-3 text-lg font-bold hover:bg-amber-600 transition"
      >
        Send Message
      </button>
    </form>

    <p className="text-amber-300 mt-10 text-xl">
      Thank you for visiting! We can’t wait to serve you the best dishes. 🍕✨
    </p>
  </div>
);

export default Contact;

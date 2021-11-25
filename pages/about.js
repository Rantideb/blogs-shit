import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaLaptop, FaTwitter } from "react-icons/fa";

function about() {
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
        <div className="h-64 w-full justify-center flex">
          <img src="/about.png" className="h-64" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
          Hi,{" "}
          <span className="bg-indigo-400 text-white rounded px-1 dark:bg-indigo-500">
            I’m Rantideb
          </span>{" "}
           {/* Nice to meet you. */}
        </h2>
        <p className="text-gray-600 mt-4 dark:text-indigo-200">
        Talent is a vague term, everything is hardworking . Don't think positively. Negativity is the mother of success. Positivity gives hope and makes hopeless. I'm totally useless and high-functioning psychopathic. 
At some point I wanted to quit but I didn't. Life is too short to give up. I don't even know when I'm going to die. So why be a quitter? You can brake me, destroy me but till the day I'm alive it's my fight. My responsibilities are mine, my duties are mine, my dreams are mine and it's all about me. There will be friends, there will be enemies, there will be lovers, there will be haters. But at the end of the day all that matters is "me". What I'm doing, how I'm doing. Simple as that. Peoples judgement doesn't even matter.
        </p>

        <div className="text-center pt-8">
          <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-indigo-600">
            <FaLaptop />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://ranti.dev/"
            >
              See My Works
            </a>
          </button>

          <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded ml-3 dark:bg-indigo-600">
            <FaTwitter />
            <a
              className="twitter-follow-button"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/r4ntide3"
            >
              Follow Me
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;

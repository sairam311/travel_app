import aboutImg from "../assets/images/priya.jpeg";
import aboutImg1 from "../assets/images/gita.jpeg";
import aboutImg2 from "../assets/images/sairam.jpeg";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full flex justify-center">
    <div className="w-[90%] max-w-4xl rounded-xl bg-gray-100 shadow-xl p-6 flex flex-col gap-10">
      <h1 className="text-4xl text-center font-semibold">About</h1>

      {/* Profiles Container */}
      <div className="w-full flex flex-col gap-6">
        {/* Profile 1 */}
        <div className="flex flex-row items-center gap-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={aboutImg2} className="w-32 h-32 rounded-full" alt="Sai Ram" />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">K.Sai Ram Chowdary</h1>
            <p className="text-gray-600">BACKEND DEVELOPER</p>
            <ul className="list-none space-y-2 mt-2">
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                <a className="flex items-center gap-2" href="https://github.com/sairam311" target="_blank" rel="noopener noreferrer">
                  GitHub <FaExternalLinkAlt />
                </a>
              </li>
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                <a className="flex items-center gap-2" href="https://www.linkedin.com/in/sai-ram-kamineni-4827b6290/" target="_blank" rel="noopener noreferrer">
                  LinkedIn <FaExternalLinkAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Profile 2 */}
        <div className="flex flex-row items-center gap-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={aboutImg} className="w-32 h-32 rounded-full" alt="Lakshmi Priya" />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Lakshmi Priya</h1>
            <p className="text-gray-600">DATABASE ADMIN</p>
            <ul className="list-none space-y-2 mt-2">
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                <a className="flex items-center gap-2" href="https://github.com/Lakshmipriyachegondi" target="_blank" rel="noopener noreferrer">
                  GitHub <FaExternalLinkAlt />
                </a>
              </li>
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                <a className="flex items-center gap-2" href="https://www.linkedin.com/in/lakshmipriya-chegondi/" target="_blank" rel="noopener noreferrer">
                  LinkedIn <FaExternalLinkAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Profile 3 */}
        <div className="flex flex-row items-center gap-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={aboutImg1} className="w-32 h-32 rounded-full" alt="Gitanjani" />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Gitanjani</h1>
            <p className="text-gray-600">FRONTEND DEVELOPER</p>
            <ul className="list-none space-y-2 mt-2">
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                <a className="flex items-center gap-2" href="https://github.com/Gita-08" target="_blank" rel="noopener noreferrer">
                  GitHub <FaExternalLinkAlt />
                </a>
              </li>
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                <a className="flex items-center gap-2" href="https://linkedin.com/in/sanjay-ng-41b64922a" target="_blank" rel="noopener noreferrer">
                  LinkedIn <FaExternalLinkAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
);
};

export default About;
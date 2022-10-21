import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="icons">
      <Link href="https://github.com/Miky2606">
        <a target="_blank">
          <FaGithub className=" m-2" color="black" />
        </a>
      </Link>

      <Link href="https://www.linkedin.com/in/jonathan-garcia-2509771b3/">
        <a target="_blank">
          <FaLinkedin className=" m-2" color="blue" />
        </a>
      </Link>
      <Link href="https://www.twitch.tv/mikynoob">
        <a target="_blank">
          <FaTwitch className=" m-2" color="purple" />
        </a>
      </Link>
    </div>
  );
};

export default Icons;

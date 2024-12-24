import { config } from "@/utils/config";
import { Link } from "react-scroll";

const SidebarNav = () => {

  return (
    <div className='sidebar-position'>
      {config.navLinks.slice(0,4).map((item, idx) => (
        <div key={idx} className='mr-6 cursor-pointer my-5 text-sm'>
          <Link activeClass="active" to={item.label} spy={true} smooth={true} offset={-150} duration={50} delay={0}>{item.name}</Link>
        </div>
      ))}
      <a className='mr-6 cursor-pointer my-5 text-sm border-2 border-origin-color px-1 py-2 rounded-lg' href="https://bit.ly/3BKsdXy" target="_blank" rel="noreferrer">
        Resume
      </a>
    </div>
  )
};

export default SidebarNav;
import { config } from "@/utils/config";
import { Link } from "react-scroll";

const SidebarNav = () => {

  return (
    <div className='sidebar-position'>
      {config.navLinks.map((item, idx) => (
        <div key={idx} className='mr-6 cursor-pointer my-5 text-sm'>
          <Link activeClass="active" to={item.label} spy={true} smooth={true} offset={-150} duration={50} delay={0}>{item.name}</Link>
        </div>
      ))}
    </div>
  )
};

export default SidebarNav;
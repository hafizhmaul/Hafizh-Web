import { Link } from "react-scroll";
import { config } from "../../utils/config";

const SidebarNav = () => {
  return (
    <div className='sidebar-position'>
      {config.navLinks.map((item, idx) => (
        <div key={idx} className='my-10 mr-10 cursor-pointer'>
          <Link activeClass="active" to={item.label} spy={true} smooth={true} offset={0} duration={50} delay={0}>{item.name}</Link>
        </div>
      ))}
    </div>
  )
};

export default SidebarNav;
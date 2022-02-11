import { config } from '@/utils/config';
import { Link } from 'react-scroll';


const BurgerMenu = ({ openDrawer, handleDrawer }) => {
  return (
    <>
      <div className='fixed top-0 right-0 z-50'>
        <div className={`hamburger hamburger--squeeze ${openDrawer ? 'is-active' : ''} mt-4`} type="button" onClick={handleDrawer}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>
      <aside className={`my-drawer drawer-dimension ${openDrawer ? "is-open shadow-xl" : ""}`}>
        <div className="block text-center text-2xl font-semibold">
          {config.navLinks.map((item, idx) => (
            <div key={idx} id={item.name !== "Resume" ? 'sidebar' : 'sidebar-resume'} className='cursor-pointer m-20'>
              {item.name !== "Resume" ? (
                <Link onClick={handleDrawer} activeClass="active" to={item.label} spy={true} smooth={true} offset={0} duration={50} delay={0}>{item.name}</Link>
              ) : (
                <a href={item.url} target="_blank" rel="noreferrer">{item.name}</a>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>

  )
}

export default BurgerMenu;

import React from 'react';
import { SidebarNav, BurgerMenu } from "@/components";
import { useWindowSize } from "@/hooks/useWindowSize";


const HomeLayout = ({ children }) => {
  const size = useWindowSize();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  const handleClick = () => {
    setCloseDrawer(false)
    console.log(closeDrawer)
  }

  return (
    <main>
      <div className='container-home-layout' onClick={openDrawer ? handleDrawer : undefined}>{children}</div>
      {size.width >= 769 ? <SidebarNav /> : <BurgerMenu handleDrawer={handleDrawer} openDrawer={openDrawer} />}
    </main>
  )
};

export default HomeLayout;
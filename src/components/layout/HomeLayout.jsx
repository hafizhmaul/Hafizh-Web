import { SidebarNav } from "..";

const HomeLayout = ({ children }) => {
  return (
    <main>
      <div className='px-24'>{children}</div>
      <SidebarNav />
    </main>
  )
};

export default HomeLayout;
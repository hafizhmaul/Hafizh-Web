const Layout = ({ children, id }) => {
  return (
    <div className='h-screen flex justify-start items-center' id={id}>
      <section className='py-16'>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
const Layout = ({ children, id, margin }) => {
  return (
    <div className='h-screen' id={id}>
      <section style={{ margin: `${margin}` }}>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
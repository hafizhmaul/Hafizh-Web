const Divider = ({ color = "#ffffff", width = "220px" }) => {
  return (
    <div style={{ height: 2, background: `${color}`, width: `${width}`, borderRadius: 15}}></div>
  )
};

export default Divider;
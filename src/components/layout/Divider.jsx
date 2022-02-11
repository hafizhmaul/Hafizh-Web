const Divider = ({ height = "2px", color = "#ffffff", width = "220px" }) => {
  return (
    <div style={{ height: `${height}`, background: `${color}`, width: `${width}`, borderRadius: 15, opacity: 0.2}}></div>
  )
};

export default Divider;
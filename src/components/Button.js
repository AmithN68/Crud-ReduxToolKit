
const Button = ({ onClick, children }) => {
  return (
    <button className="bg-orange-600 text-white py-2 px-6 my-10 rounded hover:bg-orange-700"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
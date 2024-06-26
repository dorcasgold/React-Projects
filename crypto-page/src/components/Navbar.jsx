import { Link } from "react-router-dom"

function Navbar() {
  return (
    <Link to="/">
      <div className="w-full justify-center items-center">
        <p className=" text-purple-600 font-medium text-xl">LOGO</p>
      </div>
    </Link>
  )
}

export default Navbar
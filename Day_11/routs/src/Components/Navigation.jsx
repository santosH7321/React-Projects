

const Navigation = (props) => {
  return (
    <div>
        <div className="flex justify-around items-center p-3 ">
            <div className="text-4xl font-semibold text-sky-500">{props.Logo}</div>
            <nav className="flex justify-around gap-10 list-none font-semibold text-xl">
                <li className="hover:text-red-800"><a href="/">{props.Home}</a></li>
                <li className="hover:text-red-800"><a href="/About">{props.About}</a></li>
                <li className="hover:text-red-800"><a href="/Service">{props.Service}</a></li>
                <li className="hover:text-red-800"><a href="/Contact">{props.Contact}</a></li>
            </nav>
            <div className="text-xl text-white px-8 py-2 bg-sky-700 rounded font-semibold">
                <button>{props.Login}</button>
            </div>
        </div>
    </div>
  )
}

export default Navigation

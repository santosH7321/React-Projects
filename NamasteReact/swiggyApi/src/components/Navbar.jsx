
const Navbar = () => {
    const navlist = [
        {
            id: 1,
            title: "Home"
        },
        {
            id: 2,
            title: "About"
        },
        {
            id: 3,
            title: "Contact"
        },
        {
            id: 4,
            title: "Signin"
        }
    ]
    return (
        <nav className="flex justify-between items-center p-5 bg-zinc-200">
            <div className="text-2xl font-bold text-sky-500 ">
                LOGO
            </div>
            <div className="list-none flex justify-center items-center font-semibold gap-10">
                {navlist.map((items)=> {
                   return <li key={items.id}>{items.title}</li>
                })}
            </div>
        </nav>
    )
}
export default Navbar;
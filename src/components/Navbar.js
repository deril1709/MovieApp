const Navbar = () =>{
    let Links = [
        {name:"Home", link:"/"},
        {name:"About", link:"/"},
        {name:"Creator", link:"/"},
        {name:"Login", link:"/"}
    ];

    return(
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="bg-white opacity-50 md:flex items-center justify-between py-4 md:px-10 px-7">
                <div className="cursor-pointer flex items-center">
                    test
                </div>
                <ul className="md:flex md:items-center ">
                    {
                        Links.map((Link)=>(
                            <li>
                                <a href={Link.link}>{Link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
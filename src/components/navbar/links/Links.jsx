import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
const Links = () => {

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",   
        },
        {
            title: "Blog",
            path: "/blog",            
        },
    ];

    //TEMPORARY
    const session = true;
    const isAdmin = true;


    return (
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink item={link} key={link.title}/>
            )))}{
                session ? (
                    <>
                    {
                        isAdmin && (
                            <NavLink item={{title: "login", path:"/Admin"}}/>
                        )
                    }
                    <button className="logout">Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: "login", path:"/login"}}/>
                )
            }
        </div>
    )
}

export default Links;


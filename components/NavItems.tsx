import {Link, NavLink, useLoaderData, useNavigate} from "react-router";
import {sidebarItems} from "app/constants";
import {cn} from "app/lib/utils";
// import {logoutUser} from "~/appwrite/auth";

const NavItems = ({ handleClick }: { handleClick?: () => void}) => {

    const user = {
        name: 'jonsnow',
        email: 'jon@winterfell.com',
        imageUrl: '/assets/images/david.webp'
    }

    // const user = useLoaderData();
    const navigate = useNavigate();

    // const handleLogout = async () => {
    //     await logoutUser();
    //     navigate('/sign-in')
    // }

    return (
        <section className="nav-items">
            <Link to='/' className="link-logo">
                <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
                <h1>PlanIT</h1>
            </Link>

            <div className="container">
                <nav>
                    {sidebarItems.map(({ id, href, icon, label }) => (
                        <NavLink to={href} key={id}>
                            {({ isActive }: { isActive: boolean }) => (
                                <div className={cn('group nav-item', {
                                    'bg-primary-100 !text-white': isActive
                                })} onClick={handleClick}>
                                    <img
                                        src={icon}
                                        alt={label}
                                        className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}
                                    />
                                    {label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <footer className="nav-footer">
                    <img src={user?.imageUrl || '.assets/images.david.webp'} alt={user?.name || 'David'} />
                    <article>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>

                    <button onClick={() => {
                        console.log('logout')
                    }}className="cursor-pointer"
                    >
                        <img 
                            src = "/assets/icons/logout.svg"
                            alt="logout"
                            className="size-6"
                        />

                    </button>
                </footer>

      </div>
    </section>
  )
}

export default NavItems 

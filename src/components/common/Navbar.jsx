import React, { useState, useEffect } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RebootLogo from '../../assets/Logo/reboot.png'
import { fetchCourseCategories } from '../../sevices/operations/courseDetailsAPI';


const Navbar = () => {
    
    // required hooks
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart)
    const location = useLocation();

    const [subLinks, setSubLinks] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSublinks = async () => {
        try {
            setLoading(true)
            const res = await fetchCourseCategories();
            setSubLinks(res);
        }
        catch (error) {
            console.log("Could not fetch the category list", error);
            console.log(error);
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchSublinks();
    }, [])

    // when user click Navbar link then it will hold yellow color
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    }

    // when user scroll down , we will hide navbar , and if suddenly scroll up , we will show navbar 
    const [showNavbar, setShowNavbar] = useState('top');
    const [lastScrollY, setLastScrollY] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    },)

    // control Navbar
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY)
                setShowNavbar('hide')

            else setShowNavbar('show')
        }

        else setShowNavbar('top')

        setLastScrollY(window.scrollY);
    }

    return (
        <nav className={`z-[10] flex h-14 w-full items-center justify-center border-b-[1px] border-b-richblack-700 text-white translate-y-0 transition-all ${showNavbar} `}>
    
            <div className='flex w-11/12 max-w-maxContent items-center justify-center '>

                {/* logo */}
                <Link to="/">
                    <img 
                        src={RebootLogo} 
                        width={160} 
                        height={60} 
                        loading="lazy"
                    />
                </Link>
              
            </div>
        </nav>
    )
};

export default Navbar;


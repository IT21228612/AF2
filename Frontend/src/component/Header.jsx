import { Button, Navbar, TextInput, Dropdown,  Avatar, } from "flowbite-react";
import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user_ReduxSlice';
import { FaMoon } from "react-icons/fa";
import nasaLogo from "../assets/NASA_logo.png";




export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Navbar className="fixed top-0 left-0 w-full z-50 bg-white h-16 transition-all">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <img className="hover:animate-shake animate-once mr-3 h-11 sm:h-9" src={nasaLogo} />
        <span className="font-bold text-xl tracking-tight">
          NASA API READER
        </span>
      </div>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <>
            <Link to='/sign-in'>
              <Button gradientDuoTone='purpleToBlue' outline>
                Sign In
              </Button>
            </Link>
            <Link to='/sign-up'>
              <Button gradientDuoTone='purpleToBlue' outline>
                Sign Up
              </Button>
            </Link>
          </>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
import { BiLogOut } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../api/apiAuth";

export default function UserProfile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <div className=" w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]  relative">
        <div className="flex justify-center flex-col items-center bg-neutral-100 py-16 ">
          <div className="text-center text-neutral-400 text-xs flex flex-row justify-center items-center mb-0">
            <span className="text-md uppercase text-indigo-500">
              <Link to="/">Home</Link>
            </span>{" "}
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>{" "}
            <span className="text-md uppercase">My Account</span>
          </div>
          <h2 className="block text-center text-3xl font-bold text-zinc-800">
            My account
          </h2>
        </div>
      </div>

      <div className="my-12 flex md:flex-row flex-col  gap-12">
        <div className="md:w-80 w-full text-left">
          <h3 className="uppercase text-lg mb-2 text-zinc-800 font-semibold">
            My Account
          </h3>
          <ul className="text-neutral-500">
            <li className="py-2 border-b-[1px] border-b-neutral-300">
              <Link to="/user">Account Details</Link>
            </li>
            <li className="py-2 border-b-[1px] border-b-neutral-300">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="py-2 border-b-[1px] border-b-neutral-300">
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className="py-2 border-b-[1px] border-b-neutral-300">
              <Link to="/shop">Shop Now</Link>
            </li>
          </ul>
        </div>
        <div className="w-full text-left">
          <div className="flex justify-between  ">
            {" "}
            <div className="flex gap-2 items-center">
              <span className=" text-2xl text-neutral-500">
                <FaRegCircleUser />
              </span>
              <h3 className="text-xl text-zinc-800 font-semibold">
                Account details
              </h3>
            </div>
            <span
              className="text-zinc-800 text-2xl flex gap-2 items-center cursor-pointer"
              onClick={handleLogout}
            >
              <BiLogOut /> <span className="text-lg">Logout</span>
            </span>
          </div>

          <div className="mt-4 border-2 border-neutral-300 p-12 ">
            <div>
              <label htmlFor="" className="text-neutral-500 block text-sm mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder={user?.user_metadata?.username || "Username"}
                className="w-full border-[1px] py-3 block mb-3 pl-4 text-sm placeholder:text-neutral-500"
              />
            </div>
            <div>
              <label htmlFor="" className="text-neutral-500 block text-sm mb-2">
                Email
              </label>
              <input
                type="text"
                placeholder={user?.user_metadata?.email || "Email"}
                className="w-full border-[1px] py-3 block mb-3  pl-4 text-sm placeholder:text-neutral-500"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="mt-3 uppercase py-3 px-7 bg-zinc-800 text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

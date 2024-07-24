import { SafeUser } from "@/types"
import { Avatar } from "@mui/material";
interface ProfileCardProps {
  currentUser: SafeUser;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  currentUser,
}) => {

  return (
    <div
      className="profile-card my-10 group  hover:ring-blue-400 hover:ring-2 
      hover:ring-inset shadow-sky-100  hover:shadow-lg hover:shadow-sky-200   mx-10 w-[275px] 
      rounded-md shadow-xl overflow-hidden  relative cursor-pointer 
      snap-start shrink-0 bg-white flex flex-col items-center 
      justify-center gap-3 transition-transform ease-in duration-400 "
    >

      <div
        className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
      >
        <div className="w-full group-hover:-translate-y-20 -translate-y-17 transition ease-in duration-300  h-[65px] bg-blue-500 group-hover:bg-blue-400 absolute top-0"/>
        <Avatar src={currentUser.image || '/img/placeholder.jpg'} sx={{ width: 140, height: 150 }} />
        

      </div>
      <div className=" headings *:text-center *:leading-4">
        <p className="text-xl font-serif font-semibold text-[#434955]">{currentUser.name || "N/A"}</p>
        <p className="text-sm mt-1 font-semibold text-[#434955]">{"👤" + currentUser.role}</p>
      </div>
      <div className=" w-full items-center justify-center flex">
        <ul
          className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3"
        >
          <li className="group ">
            <svg
              id="phone"
              viewBox="0 0 24 24"
              className="fill-stone-700 group-hover:fill-[#58b0e0]"
              height="15"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path
                d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
              ></path>
            </svg>
            <p>
            <a href={`tel:${currentUser.tel}`} className=""> {currentUser.tel} </a>
            </p>
          </li>

          <li className="group">
            <svg
              className="fill-stone-700 group-hover:fill-[#58b0e0]"
              height="15"
              width="15"
              id="mail"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"

              ></path>
              <path
                d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"

              ></path>
            </svg>
            <p>
              <a href={`mailto:${currentUser.email}@gmail.com`}>{currentUser.email || "N/A"}</a>
            </p>
          </li>



        </ul>
      </div>
      <hr
        className="w-full group-hover:translate-y-5 transition ease-in duration-300    h-3 bg-blue-500 group-hover:bg-blue-400"
      />
    </div>

  );
};

export default ProfileCard;


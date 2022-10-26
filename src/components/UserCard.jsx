
const UserCard = ({user}) => {
  return (
     <div key={user?.id} className=" w-[200px] px-3 py-5 shadow-md rounded-lg bg-white text-sm text-center flex flex-col items-center text-[#333333] cursor-pointer">
               
                  <img src={user?.picture?.large} className="rounded-full w-[100px] mb-3" alt={user?.name?.first}/>
                 
     
                <h2 className="font-semibold mb-1">{user?.name?.title + " " + user?.name?.first + " " + user?.name?.last}</h2>
      
                <div className="text-[#c3c3c3]">
                      <p>{user?.email}</p>
                <p>{user?.location?.country}</p>
                </div>
            
              </div>
  );

}

export default UserCard;
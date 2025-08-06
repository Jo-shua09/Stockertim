export const ButtonOne = ({ name, className, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} text-[1.7rem] cursor-pointer text-nowrap hover:scale-95 font-semibold capitalize text-white rounded-full shadow-xl flex justify-center py-4 px-9 items-center text-center bg-gradient-to-t from-blue-500 to-blue-950 border-2 border-blue-500`}
    >
      {icon}
      {name}
    </button>
  );
};

export const ButtonTwo = ({ name, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} text-[1.7rem] cursor-pointer text-nowrap hover:scale-95 font-semibold capitalize text-white rounded-full shadow-xl flex justify-center py-4 px-9 items-center text-center border border-white`}
    >
      {name}
    </button>
  );
};

const CardLoading = (props) => {
  const { classname, classnames } = props;
  return (
    <div
      className={`${classname} bg-white w-full border border-gray-300 rounded-md shadow-xl p-3 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer`}
    >
      <div
        className={`${classnames} rounded-md bg-slate-200 col-span-1 object-cover h-40 mb-2 w-full animate-pulse`}
      ></div>
      <div
        className={`h-4 bg-slate-200 rounded col-span-1 animate-pulse`}
      ></div>
    </div>
  );
};

export default CardLoading;

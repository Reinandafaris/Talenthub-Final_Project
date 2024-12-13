const Card = (props) => {
  const { children, classname } = props;
  return (
    <div
      className={`${classname} bg-white w-full border border-gray-300 rounded-md shadow-xl p-3 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer`}
    >
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, title, classname } = props;
  return (
    <img
      src={image}
      alt={title}
      className={`${classname} rounded-md object-cover h-40 mb-2 w-full`}
    />
  );
};

const Body = (props) => {
  const { title } = props;
  return <p className="text-sm font-medium leading-none">{title}</p>;
};

Card.Header = Header;
Card.Body = Body;

export default Card;

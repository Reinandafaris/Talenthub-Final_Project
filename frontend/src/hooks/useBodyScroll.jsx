import { useEffect } from "react";

const UseBodyScroll = (open) => {
  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.classList.toggle("overflow-hidden", open);
    };

    toggleBodyScroll();

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);
};

export default UseBodyScroll;

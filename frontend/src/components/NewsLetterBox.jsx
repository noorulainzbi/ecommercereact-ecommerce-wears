import React from "react";

const NewsLetterBox = () => {
  const onSubmiteHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl text-gray-800 font-medium">
        Subscribe now & get 20% off.
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
        consequatur unde nostrum?
      </p>
      <form
        className="flex w-full sm:w-1/2 mx-auto my-6 border pl-3 gap-3 item-center"
        onSubmit={onSubmiteHandler}
      >
        <input
          type="email"
          className="w-full sm:flex-1 outline-none "
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="text-white bg-black text-xs px-10 py-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;

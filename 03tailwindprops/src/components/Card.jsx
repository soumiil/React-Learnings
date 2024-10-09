import React from "react";

function Card({ username, btnText = "Read More"}) {
  return (
    <>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mb-4">
        <img
          src="https://images.pexels.com/photos/28518085/pexels-photo-28518085/free-photo-of-colorful-european-houses-with-tiled-roofs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Hello, my name is {username} and I am learning react.js with chai
              aur code. This is good javascript libraby to create dynamic
              frontend and I am really enjoying it.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;

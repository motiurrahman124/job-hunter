import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    const error = {
        number: "404",
        header: "That Page Doesn't Exist!",
        description: "Sorry, the page you were looking for could not be found.",
      };

    return (
        <div>
            <div className="flex flex-col justify-center items-center border-2 h-screen text-center p-[4px]">
                <h1 className="md:text-[100px] text-[75px] font-Roboto text-twContent">
                    {error?.number}
                </h1>
                <h2 className="md:text-[50px] text-[40px] font-serif mb-[8px] text-twContent-header">
                    {error?.header}
                </h2>
                <p className="text-base text-twContent-light">{error?.description}</p>
                <Link to="/">
                    <button className="capitalize text-xl font-extrabold py-[19px] px-[28px] rounded-lg border border-[#7E90FE] text-[#7E90FE] mt-10">
                        Go To Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
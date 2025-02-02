// default export ItemsList component
import React from "react";
import Card from "./Card";
import TinySlider from "tiny-slider-react";
import { useEffect } from 'react';

export default function ItemsList({ items, type }) {
    const settings = {
        lazyload: true,
        nav: true,
        mouseDrag: true,

        loop: true,
        items: 3,
        slideBy: 'page',
        autoplay: false,
        speed: 400,
        autoplayButtonOutput: false,
        responsive: {
            320: {
                items: 2,
            },
            640: {
                items: 4,
            },

            768: {
                items: 9,
            }
        }
    };
    useEffect(() => {

    }, []
    )


    return (
        <div className="flex flex-col relative w-screen m-10">
            <div className="flex items-center " >
                <p className="text-lg font-semibold " >{type}</p>
                <div className="w-3/6   mx-3 border-2 border-grey-700 " ></div>
            </div>
            {/* // settings for the tiny slider */}
            <TinySlider settings={settings} className="flex flex-row m-4 p-2  "


            >
                {items.map((item, index) => {
                    return <Card item={item} key={index} />
                })}
            </TinySlider>
        </div>
    );
}
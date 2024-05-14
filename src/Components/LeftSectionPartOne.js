import React from 'react';
import backArrow from "../media/arrow-back.svg";
import dots from "../media/dots.svg";
import edit from "../media/edit.svg";
import save from "../media/save.svg";
import close from "../media/close.svg";
import build from "../media/build.svg";

const LeftSectionPartOne = () => {
  return (
    <>
            <div className="flex justify-between bg-zinc-800">
          <div className="flex text-white">
            <img src={backArrow} alt="back-arrow" />
            <p className="mr-2">Chats</p>
            <p className="mr-2">
              img:<span className="text-xs">3</span>
            </p>
            <p>msg:</p>
          </div>
          <div className="icons flex">
            <img src={dots} alt="dots" />
            <img src={build} alt="build" />
            <img src={save} alt="save" />
            <img src={edit} alt="edit" />
            <img src={close} alt="close" />
          </div>
        </div>
    </>
  )
}

export default LeftSectionPartOne
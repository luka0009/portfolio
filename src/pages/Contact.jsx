import React, { useState } from "react";
import gmail from "./gmail.png";
import github from "./github.png";
import phone from "./phone.png";
import "./about.css";
import { motion } from "framer-motion";

export default function Contact() {
  const content = "lukabarbakadze18@gmail.com";
  const content1 = "Github Profile";
  const content2 = "+995 599 10 30 74";

  // const images = [
  //   "https://m.media-amazon.com/images/M/MV5BNzczMzQ3MmItMGFjZC00NzEwLWEzZWYtZTliMjkwOWQ2YzIxXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
  //   "https://i.cbc.ca/1.2439270.1385396617!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/family-guy-brian-from-fox.jpg",
  //   "https://m.media-amazon.com/images/M/MV5BZmY5N2ZhNWMtMzEzZC00NmRlLTg5YWEtZmQwMGNiZWIxMzA5XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg",
  //   "https://pbs.twimg.com/media/Bo6YxUnIEAAjLA7.jpg:large",
  // ];
  const images = [gmail, github, "https://freesvg.org/img/phone-call-icon.png"];
  const contents = [content, content1, content2];
  const texts = ["Email me", "Check out my Github", "Phone Number"];

  const [index, setIndex] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (index >= 2) {
        setIndex(-1);
      }
      setIndex((index) => index + 1);
    }, [1000]);
    setTimeout(() => {
      setIsAnimating(false);
    }, [1000]);
  };

  const prevImage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (index <= 0) {
        setIndex(3);
      }
      setIndex((index) => index - 1);
    }, [1000]);

    setTimeout(() => {
      setIsAnimating(false);
    }, [1000]);
  };

  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });
  };

  return (
    <div className="content-div text-white py-3 bg-[#1F0A3A] h-[88vh]">
      <h1 className="text-center text-blue-500 text-[44px]">Contact Info</h1>
      {/* <div className="flex flex-col items-center justify-center">
        <div className="mt-16 w-[290px] flex justify-between items-center bor border-x-2 px-2 border-white">
          <img
            className="w-6 h-6 mr-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
            alt=""
          />
          <span>
            <span className="mr-1">-</span> lukabarbakadze18@gmail.com
          </span>
        </div>
        <div className="mt-16 w-[290px] flex justify-between items-center bor border-x-2 px-2 border-white">
          <img
            className="w-8 h-8 mr-3 contrast-200"
            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
            alt=""
          />
          <span>
            <span className="mr-16">-</span> 
            <a className="underline" href="https://github.com/luka0009">Github Profile</a>
          </span>
        </div>
      </div> */}

      <motion.div
        // initial={{ opacity: 1 }}
        // animate={isAnimating ? { scale: 0.5, x: -50, y: -50, opacity: 0 } : { opacity: 1 }}
        // transition={{ duration: 1 }}
        initial={{ opacity: 1 }}
        animate={isAnimating ? { opacity: 0 } : { opacity: 1 }} // Conditionally set animate property based on isAnimating state
        transition={{ duration: 1 }}
        className="mx-auto h-[350px] w-[40vw] flex flex-col items-center justify-center"
      >
        <div className="z-1 bg-[#1A0B2E] text-blue-600 relative mx-auto p-24 border-2 border-blue-600 h-[250px] w-[40vw] flex items-center justify-center">
          <div className="absolute top-5">
            <span className="z-99 mt-3 text-2xl text-white">
              {texts[index]}
            </span>
          </div>

          {contents[index] === content && (
            <div className="absolute scale-50 md:scale-100 lg:scale-[1.2] bottom-8 mx-auto">
              <button
                onClick={() => copyToClipboard(contents[index])}
                className="text-xs bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded mt-2"
              >
                {isCopied ? "Copied!" : "Copy"}
              </button>
            </div>
          )}

          <button
            onClick={() => prevImage()}
            className="text-[60px] absolute left-[-50px] top-[29%] hover:text-blue-400 transition duration-1000"
          >{`<`}</button>
          {/* <img className="border-4 border-[deeppink] h-[300px] w-[50vw]" src={images[index]} alt="" /> */}
          <div className="w-fit flex justify-center items-end border-2 border-blue-500 p-3 px-8 scale-50 md:scale-100 lg:scale-[1.2] gap:3">
            <img
              className="w-8 h-8 mr-3 contrast-200"
              src={images[index]}
              alt=""
            />
            {contents[index] === content1 ? (
              <span>
                {/* <span className="mr-2">-</span> */}
                <a className="underline" href="https://github.com/luka0009">
                  {contents[index]}
                </a>
              </span>
            ) : (
              <span>
                {/* <span className="mr-2">-</span> */}
                <p>{contents[index]}</p>
              </span>
            )}
            {/* {(contents[index] === content) && <div className="ml-3">
                <button
                  onClick={() => copyToClipboard(contents[index])}
                  className="text-xs bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded mt-2"
                >
                  {isCopied ? "Copied!" : "Copy"}
                </button>
              </div>} */}
          </div>

          <button
            onClick={() => nextImage()}
            className="text-[60px] absolute right-[-50px] top-[29%] hover:text-blue-300 transition duration-300"
          >{`>`}</button>
        </div>
        {/* <div className="h-[500px] w-[100vw] flex items-center justify-center">
        <button onClick={() => prevImage()} className="text-[40px] m-3">{`<`}</button>
        <img className="border-4 border-[deeppink] h-[300px] w-[50vw]" src={images[index]} alt="" />
        <button onClick={() => nextImage()} className="text-[40px] m-3">{`>`}</button>
      </div> */}
      </motion.div>
    </div>
  );
}

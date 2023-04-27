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
  const images = [gmail, 'data:image/png;base64,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', "https://freesvg.org/img/phone-call-icon.png"];
  const contents = [content, content1, content2];
  const texts = ["Email me", "Check out my Github", "Phone Number"];

  const [index, setIndex] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (index >= 1) {
        setIndex(-1);
      }
      setIndex((index) => index + 1);
    }, [450]);
    setTimeout(() => {
      setIsAnimating(false);
    }, [450]);
  };

  const prevImage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (index <= 0) {
        setIndex(2);
      }
      setIndex((index) => index - 1);
    }, [450]);

    setTimeout(() => {
      setIsAnimating(false);
    }, [450]);
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
        transition={{ duration: 0.45 }}
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
                <a className="underline" target='_blank' href="https://github.com/luka0009">
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

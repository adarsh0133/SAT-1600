"use client";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiBookmarkFill,
  RiBookmarkLine,
  RiCalculatorLine,
  RiCloseLine,
  RiDragMove2Line,
  RiEraserFill,
  RiHome4Line,
  RiMapPinLine,
  RiMarkPenLine,
  RiPencilLine,
} from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { SAT_Section1_Module3 } from "./SAT_Section1_Module3";
import { motion, useDragControls } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Component6({ Component, setComponent }) {
  const router = useRouter();
  const dragControls = useDragControls();

  const [section3Data, setSection3Data] = useState({ userInputs: [], marks: 0 });
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [highlightMode, setHighlightMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isReviewPage, setIsReviewPage] = useState(false);
  const [timeLeft, setTimeLeft] = useState(35 * 60);
  const [dirrection, setdirrection] = useState(false);
  const [ReviewQuestions, setReviewQuestions] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("section3");
      if (saved) {
        try {
          setSection3Data(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse localStorage data:", e);
        }
      }
      const user = localStorage.getItem("user");
      if (user) {
        try {
          setUserName(JSON.parse(user).name);
        } catch (e) {
          console.error("Failed to parse user data:", e);
        }
      }
    }
  }, []);

  const handleMouseMove = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });

  const handleGoToReviewPage = () => setIsReviewPage(true);
  const handleGoToPreviousPage = () => setIsReviewPage(false);

  const handleOptionSelect = (questioninfo, realanswer, selectedOption) => {
    const updatedInputs = [...section3Data.userInputs];
    const existingInputIndex = updatedInputs.findIndex(
      (input) => input.questioninfo === questioninfo
    );
    let updatedMarks = section3Data.marks;

    if (existingInputIndex >= 0) {
      const previousAnswer = updatedInputs[existingInputIndex].useranswer;
      if (previousAnswer === realanswer && selectedOption !== realanswer) {
        updatedMarks -= 1;
      } else if (
        previousAnswer !== realanswer &&
        selectedOption === realanswer
      ) {
        updatedMarks += 1;
      }
      updatedInputs[existingInputIndex].useranswer = selectedOption;
    } else {
      if (selectedOption === realanswer) {
        updatedMarks += 1;
      }
      updatedInputs.push({
        questioninfo,
        realanswer,
        useranswer: selectedOption,
        highlightedText: "",
      });
    }

    const updatedSection3Data = {
      userInputs: updatedInputs,
      marks: updatedMarks,
    };
    setSection3Data(updatedSection3Data);
    if (typeof window !== "undefined") {
      localStorage.setItem("section3", JSON.stringify(updatedSection3Data));
    }
  };

  const handleRemoveSelection = () => {
    const updatedInputs = section3Data.userInputs.filter(
      (input) => input.questioninfo !== currentQuestion.questioninfo
    );
    const existingInputIndex = section3Data.userInputs.findIndex(
      (input) => input.questioninfo === currentQuestion.questioninfo
    );
    let updatedMarks = section3Data.marks;
    if (existingInputIndex >= 0) {
      const previousAnswer =
        section3Data.userInputs[existingInputIndex].useranswer;
      if (previousAnswer === currentQuestion.answer) {
        updatedMarks -= 1;
      }
    }
    const updatedSection3Data = {
      userInputs: updatedInputs,
      marks: updatedMarks,
    };
    setSection3Data(updatedSection3Data);
    if (typeof window !== "undefined") {
      localStorage.setItem("section3", JSON.stringify(updatedSection3Data));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("section3", JSON.stringify(section3Data));
    }
  }, [section3Data]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < SAT_Section1_Module3.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = SAT_Section1_Module3[currentQuestionIndex];

  const handleHighlightText = () => setHighlightMode(!highlightMode);

  const handleTextHighlight = (event) => {
    if (highlightMode) {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const span = document.createElement("span");
        span.style.backgroundColor = "yellow";
        range.surroundContents(span);
        const highlightedText = event.target.innerHTML;
        const updatedInputs = [...section3Data.userInputs];
        const existingInputIndex = updatedInputs.findIndex(
          (input) => input.questioninfo === currentQuestion.questioninfo
        );
        if (existingInputIndex >= 0) {
          updatedInputs[existingInputIndex].highlightedText = highlightedText;
        } else {
          updatedInputs.push({
            questioninfo: currentQuestion.questioninfo,
            realanswer: currentQuestion.realanswer,
            useranswer: "",
            highlightedText: highlightedText,
          });
        }
        const updatedSection3Data = {
          userInputs: updatedInputs,
          marks: section3Data.marks,
        };
        setSection3Data(updatedSection3Data);
        if (typeof window !== "undefined") {
          localStorage.setItem("section3", JSON.stringify(updatedSection3Data));
        }
        selection.removeAllRanges();
      }
    }
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
    toggleModal();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    const confirmRedirect = window.confirm(
      "Your all changes will be Discarded if redirected to the home page. Do you want to continue?"
    );
    if (confirmRedirect) {
      router.push("/");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const startTime = localStorage.getItem("component6startTime");
      if (!startTime) {
        const now = Date.now();
        localStorage.setItem("component6startTime", now);
      } else {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        setTimeLeft(35 * 60 - elapsedTime);
      }
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(timer);
          setIsReviewPage(true);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setComponent("component7");
    }
  }, [timeLeft, setComponent]);

  useEffect(() => {
    if (isCalculatorOpen && typeof window !== "undefined" && window.Desmos) {
      const elt = document.getElementById("calculator");
      if (elt) {
        window.Desmos.GraphingCalculator(elt);
      }
    }
  }, [isCalculatorOpen]);

  const toggleReviewQuestion = (questionIndex) => {
    setReviewQuestions((prevReviewQuestions) => {
      if (prevReviewQuestions.includes(questionIndex)) {
        return prevReviewQuestions.filter((index) => index !== questionIndex);
      } else {
        return [...prevReviewQuestions, questionIndex];
      }
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={highlightMode ? "hide-cursor" : ""}
    >
      {dirrection && (
        <div className="w-[50%] h-[100vh] bg-white text-justify z-[9] shadow-2xl fixed top-[10vh] left-[5vh] px-5 py-10">
          <p>
            The questions in this section address a number of important math
            skills. <br />
            Use of a calculator is permitted for all questions. A reference
            sheet, calculator, and these directions can be accessed throughout
            the test. <br />
            Unless otherwise indicated:
          </p>
          <ul>
            <li>All variables and expressions represent real numbers.</li>
            <li>Figures provided are drawn to scale.</li>
            <li>All figures lie in a plane.</li>
            <li>
              The domain of a given function f is the set of all real numbers x
              for which f(x) is a real number.
            </li>
          </ul>
          <p>
            For <b>multiple-choice questions,</b> solve each problem and choose
            the correct answer from the choices provided. <br />
            Each multiple-choice question has a single correct answer. <br />
            For <b>student-produced response questions,</b> solve each problem
            and enter your answer as described below.
          </p>
          <ul>
            <li>
              If you find more than one correct answer, enter only one answer.
            </li>
            <li>
              You can enter up to 5 characters for a positive answer and up to 6
              characters (including the negative sign) for a negative answer.
            </li>
            <li>
              If your answer is a fraction that doesn't fit in the provided
              space, enter the decimal equivalent.
            </li>
            <li>
              If your answer is a decimal that doesn't fit in the provided
              space, enter it by truncating or rounding at the fourth digit.
            </li>
            <li>
              If your answer is a mixed number enter it as an improper fraction
              (7/2) or its decimal.
            </li>
          </ul>
          <div className="flex w-full justify-end">
            <button
              onClick={() => setdirrection(false)}
              className="py-2 px-6 text-black font-medium border-2 border-black  bg-yellow-400 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {highlightMode && (
        <RiPencilLine
          style={{
            position: "fixed",
            left: cursorPosition.x,
            top: cursorPosition.y,
            pointerEvents: "none",
            zIndex: 1000,
          }}
        />
      )}
      {isCalculatorOpen && (
        <motion.div
          drag
          className="absolute z-[9] w-[50vh]"
          dragControls={dragControls}
          dragListener={false}
          dragConstraints={{
            top: 0,
            left: 0,
            right: typeof window !== "undefined" ? window.innerWidth - 300 : 0,
            bottom: typeof window !== "undefined" ? window.innerHeight - 200 : 0,
          }}
        >
          <div
            onPointerDown={(e) => {
              dragControls.start(e);
            }}
          >
            <div className="h-[5vh] flex items-center text-lg font-semibold text-white justify-between bg-black">
              <p className="cursor-default">Calculator</p>
              <RiDragMove2Line className="-ml-12 cursor-grab" />
              <RiCloseLine
                onClick={() => setIsCalculatorOpen(false)}
                size={30}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div id="calculator" className="w-full h-[70vh]"></div>
        </motion.div>
      )}
      <div className="w-full h-[10vh] bg-[#E7F9FF] p-2 px-10 flex items-center justify-between border-dashed  border-b-2 border-black">
        <div className="w-[30%] h-full  flex flex-col items-start justify-evenly ">
          <p className="font-medium">Section 2 , Module 1 : Maths</p>
          <div
            onClick={() => setdirrection(true)}
            className="flex h-full cursor-pointer items-center"
          >
            <p>Direction</p>
            {dirrection ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </div>
        </div>
        <div className="h-full w-[30%]  flex items-center justify-center text-3xl text-red-500 font-semibold">
          <p>{formatTime(timeLeft)}</p>
        </div>
        <div className="h-full w-[30%] gap-5  items-center justify-end flex">
          <div
            onClick={() => setIsCalculatorOpen(true)}
            className="flex flex-col h-full items-center justify-center cursor-pointer"
          >
            <RiCalculatorLine className="w-6" />
            <p className="text-sm font-medium">Calculator</p>
          </div>
          <div
            className="flex flex-col  h-full justify-center items-center cursor-pointer"
            onClick={handleHighlightText}
          >
            <RiMarkPenLine className="w-6" />
            <p className="text-sm font-medium">Highlight Text</p>
          </div>
          <Link
            className="flex flex-col h-full w-fit  justify-center items-center cursor-pointer"
            href="/"
            onClick={handleHomeClick}
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <RiHome4Line className="w-6" />
              <p className="text-sm font-medium">Home</p>
            </div>
          </Link>
        </div>
      </div>
      {isReviewPage ? (
        <div className="w-full h-[80vh]  bg-[#F5FAFE]">
          <div className="w-full h-[5%]  center">
            <div className="h-full w-[90%] bg-blue-900 center rounded-b-2xl uppercase font-semibold text-white">
              <p>This is a practice test</p>
            </div>
          </div>
          <div className="w-full h-[10vh] text-4xl center ">
            Check Your Work
          </div>
          <div className="w-full h-[5vh] text-xl center ">
            On test day , you wan't be able to move on to the next module until
            time expires
          </div>
          <div className="w-full h-[5vh] text-xl center ">
            For these practice questions , you can click{" "}
            <b className="px-2"> Next </b> when you're ready to move on
          </div>
          <div className="w-full h-[70%] center">
            <div className="w-[60%] h-[80%] bg-[#F5FAFE] drop-shadow-xl rounded-lg">
              <div className="w-full center">
                <div className="w-[90%] h-[10vh] border-b-2 flex items-center justify-between">
                  <p className="font-medium text-xl">
                    Section 2 , Module 1 : Maths
                  </p>
                  <div className="flex gap-5">
                    <div className=" h-full flex  items-center gap-2 ">
                      <div className="w-5 h-5 bg-green-600 rounded-sm"></div>
                      Answered
                    </div>
                    <div className=" h-full flex  items-center gap-2 ">
                      <div className="w-5 h-5 border-2 border-dashed border-[#000000b3]"></div>
                      Unanswered
                    </div>
                    <div className=" h-full flex  items-center gap-2 ">
                      <RiBookmarkFill className="text-rose-700" />
                      For Review
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full center">
                <div className="w-[90%] grid  grid-cols-10">
                  {SAT_Section1_Module3.map((_, index) => {
                    const isAnswered = section3Data.userInputs.some(
                      (input) =>
                        input.questioninfo ===
                        SAT_Section1_Module3[index].questioninfo
                    );

                    return (
                      <div
                        key={index}
                        className="w-fit flex h-14   flex-col items-center justify-end cursor-pointer"
                      >
                        <div
                          className={`w-10 h-10 text-xl relative ${
                            isAnswered
                              ? "bg-green-600 text-white"
                              : "border-2 border-dashed bor text-black border-[#000000b3]"
                          } rounded-sm center font-bold  `}
                        >
                          <div className="absolute -right-3 -top-3 bg-[#F5FAFE] ">
                            {" "}
                            {ReviewQuestions.includes(index) ? (
                              <RiBookmarkFill className="text-rose-700 scale-75" />
                            ) : (
                              ""
                            )}
                          </div>
                          {index + 1}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full h-24 flex items-center justify-evenly">
                {timeLeft > 0 && (
                  <div
                    onClick={handleGoToPreviousPage}
                    className="px-4 cursor-pointer h-12 rounded-full border-2 border-blue-700 text-blue-700 center"
                  >
                    Go to Previous Page
                  </div>
                )}

                <div
                  onClick={() => setComponent("component7")}
                  className="px-4 cursor-pointer h-12 rounded-full border-2 bg-blue-700 border-blue-700 text-white center"
                >
                  Submit Module
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[80vh] bg-[#F5FAFE]">
          <div className="w-full h-[5%]  center">
            <div className="h-full w-[90%] bg-blue-900 center rounded-b-2xl uppercase font-semibold text-white">
              <p>This is a practice test</p>
            </div>
          </div>
          <div className="w-full h-[95%] flex">
            <div
              onMouseUp={handleTextHighlight}
              className="w-[50%] h-full  border-r-2 border-[#555555] p-10  overflow-y-scroll scrollernone  "
            >
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    section3Data.userInputs.find(
                      (input) =>
                        input.questioninfo === currentQuestion.questioninfo
                    )?.highlightedText || currentQuestion.questioninfo,
                }}
              />
            </div>
            <div className="w-[50%] h-full border-l-2 border-[#555555] p-10 overflow-y-scroll scrollernone ">
              <div className="w-[95%] flex items-center justify-between h-8  mb-2 bg-slate-200">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-black center">
                    <p className="text-white">{currentQuestionIndex + 1}</p>
                  </div>
                  <div
                    className="ml-3 cursor-pointer"
                    onClick={() => toggleReviewQuestion(currentQuestionIndex)}
                  >
                    {ReviewQuestions.includes(currentQuestionIndex) ? (
                      <RiBookmarkFill className="text-rose-700" />
                    ) : (
                      <RiBookmarkLine />
                    )}
                  </div>
                  <p className="ml-2 font-medium">
                    Question {currentQuestionIndex + 1} of{" "}
                    {SAT_Section1_Module3.length}{" "}
                  </p>
                </div>
                <div
                  onClick={handleRemoveSelection}
                  className="w-8 cursor-pointer h-8 border-2 center rounded-lg border-[#363636d7]"
                >
                  <RiEraserFill className="w-4" />
                </div>
              </div>
              <div>
                <p>{currentQuestion.question}</p>
              </div>
              <div className="pl-5 flex flex-col gap-2 w-[95%]">
                {currentQuestion.options && currentQuestion.options.length > 0 ? (
                  currentQuestion.options.map((option, index) => {
                    const isSelected = section3Data.userInputs.some(
                      (input) =>
                        input.questioninfo === currentQuestion.questioninfo &&
                        input.useranswer === option
                    );

                    return (
                      <div
                        key={index}
                        className={`cursor-pointer p-2 border-2 rounded-lg ${
                          isSelected ? "border-green-500" : ""
                        }${
                          timeLeft <= 0 ? "pointer-events-none opacity-50" : ""
                        }`}
                        onClick={() => {
                          handleOptionSelect(
                            currentQuestion.questioninfo,
                            currentQuestion.answer,
                            option
                          );
                          setIsModalOpen(false);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-6 h-6  ${
                              isSelected
                                ? "bg-green-500 text-white"
                                : " text-black  bg-transparent border-2 border-black"
                            } center rounded-full shrink-0`}
                          >
                            <p className="">{index + 1}</p>
                          </div>
                          <div className="ml-2">{option} </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <input
                    type="text"
                    placeholder="Enter your answer here"
                    className="p-2 border-2 outline-none rounded-lg"
                    onInput={(e) => {
                      const value = e.target.value;
                      // Allow only numbers with optional + or - signs, and no alphabets
                      if (/^[+-]?\d*$/.test(value)) {
                        handleOptionSelect(currentQuestion.question, value);
                      } else {
                        e.target.value = value.slice(0, -1); // Remove the last character if it's not valid
                      }
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-[10vh] bg-[#E7F9FF] items-center flex justify-between">
        <div className="w-[20%]  h-full font-semibold text-2xl flex items-center  justify-center">
          <p className="capitalize">{userName}</p>
        </div>
        {isReviewPage ? (
          ""
        ) : (
          <div className="  relative w-[60%] h-full  text-white center ">
            <div
              className="w-fit px-2 h-10 gap-2 font-medium cursor-pointer bg-slate-900 rounded-lg center "
              onClick={toggleModal}
            >
              <div className=" ">
                <p className="text-white">
                  Question {currentQuestionIndex + 1} of{" "}
                  {SAT_Section1_Module3.length}
                </p>
              </div>
              <RiArrowUpSLine />
            </div>
            {isModalOpen && (
              <div className=" cursor-default  w-[60%] h-[60vh] translate-y-[-55%] rounded-lg absolute text-black  bg-white drop-shadow-xl">
                <div className=" relative  w-full h-20 center text-center">
                  <p className="font-medium text-xl">
                    Section 2 , Module 1 : Maths
                  </p>
                  <RiCloseLine
                    onClick={toggleModal}
                    className="absolute scale-110 right-2 top-2 w-6 cursor-pointer"
                  />
                </div>
                <div className="w-full center">
                  <div className="w-[90%] h-10 border-y-2 flex justify-center gap-5">
                    <div className=" h-full flex items-center gap-2">
                      <RiMapPinLine className="text-[#000000ca]" />
                      Current
                    </div>
                    <div className=" h-full flex  items-center gap-2 ">
                      <div className="w-6 h-6 bg-green-600 rounded-sm"></div>
                      Answered
                    </div>
                    <div className=" h-full flex  items-center gap-2 ">
                      <div className="w-6 h-6 border-2 border-dashed border-[#000000b3]"></div>
                      Unanswered
                    </div>
                    <div className=" h-full flex  items-center gap-2 ">
                      <RiBookmarkFill className="text-rose-700" />
                      For Review
                    </div>
                  </div>
                </div>
                <div className="w-full center">
                  <div className="w-[90%] grid  grid-cols-10">
                    {SAT_Section1_Module3.map((_, index) => {
                      const isAnswered = section3Data.userInputs.some(
                        (input) =>
                          input.questioninfo ===
                          SAT_Section1_Module3[index].questioninfo
                      );

                      return (
                        <div
                          key={index}
                          className="w-fit flex h-14   flex-col items-center justify-end cursor-pointer"
                          onClick={() => handleQuestionClick(index)}
                        >
                          {index === currentQuestionIndex && (
                            <RiMapPinLine className=" scale-75  text-[#000000ca]" />
                          )}

                          <div
                            className={`w-6 h-6 text-sm relative ${
                              isAnswered
                                ? "bg-green-600 text-white"
                                : "border-2 border-dashed bor text-black border-[#000000b3]"
                            } rounded-sm center font-bold  `}
                          >
                            <div className="absolute  -right-3 -top-3  ">
                              {" "}
                              {ReviewQuestions.includes(index) ? (
                                <RiBookmarkFill className="text-rose-700 bg-white scale-50" />
                              ) : (
                                ""
                              )}
                            </div>
                            {index + 1}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full center mt-5 ">
                  <div
                    onClick={() => {
                      handleGoToReviewPage();
                      toggleModal();
                    }}
                    className="px-4 cursor-pointer h-10 rounded-full border-2 border-blue-700 text-blue-700 center"
                  >
                    Go to Review Page
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="w-[20%] h-full flex items-center justify-center gap-5">
          {!isReviewPage && currentQuestionIndex != 0 ? (
            <div
              className="py-2 px-6 rounded-full bg-blue-700 text-white font-medium cursor-pointer"
              onClick={() => {
                handlePrevQuestion();
                setIsModalOpen(false);
              }}
            >
              Back
            </div>
          ) : (
            <div className="py-2 px-6 rounded-full  opacity-0 font-medium cursor-pointer">
              wdwd
            </div>
          )}
          <div
            className="py-2 px-6 rounded-full bg-blue-700 text-white font-medium cursor-pointer"
            onClick={() => {
              if (currentQuestionIndex === SAT_Section1_Module3.length - 1) {
                setIsReviewPage(true);
              } else {
                handleNextQuestion();
              }
              setIsModalOpen(false);
            }}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
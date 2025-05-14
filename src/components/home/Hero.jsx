import { RiPauseFill, RiPlayFill, RiVolumeMuteFill, RiVolumeUpFill, } from '@remixicon/react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";


const Hero = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -400, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [videoloading, setVideoloading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);


  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date("2025-03-08T00:00:00"); // January 1st of the next year
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const SatExam = [
    {
      date: 'March 8, 2025',
      regdate: 'February 21, 2025',
      latereg: 'February 25, 2025'
    },
    {
      date: 'May 3, 2025',
      regdate: 'April 18, 2025',
      latereg: 'April 23, 2025'
    },
    {
      date: 'july 7, 2025',
      regdate: 'May 22, 2025',
      latereg: 'May 27, 2025'
    },
  ]
  const info = [
    {
      icon: "/images/SAT1600/Group.png",
      infor: "Late registration is subject to additional fees.",
    },
    {
      icon: "/images/SAT1600/attention.png",
      infor: "Test center availability is on a first-come, first-served basis.",
    },
    {
      icon: "/images/SAT1600/day.png",
      infor: "Please ensure to bring valid ID and admission ticket on test day.",
    },
    {
      icon: "/images/SAT1600/SVG1.png",
      infor: "Registration fees may  vary, because we  we are providing scholarships, waivers, and discounts for the registration.        ",
    }
  ]
  const benefits = [
    {
      img: "/images/SAT1600/benefits/free.png",
      title: "Zero-Cost SAT Signup",
      desc: "Save $130 instantly—your SAT registration’s on us!"
    },
    {
      img: "/images/SAT1600/benefits/live.png",
      title: "Live Prep Power",
      desc: "Daily classes with top tutors to turbocharge your score."
    },
    {
      img: "/images/SAT1600/benefits/real.png",
      title: "Real-Deal Practice",
      desc: "Bluebook-style tests that mirror the actual SAT vibe."
    },
    {
      img: "/images/SAT1600/benefits/elite.png",
      title: "Elite Resource Vault",
      desc: "Unlock the best PDFs, notes, and tools—exclusive to you."
    },
    {
      img: "/images/SAT1600/benefits/score.png",
      title: "Score-Soaring Squad",
      desc: "Join a buzzing community to stay motivated and connected."
    },
    {
      img: "/images/SAT1600/benefits/high.png",
      title: "$100 High-Flyer Bonus",
      desc: "Score 1500+ and pocket $100 from CTS—cash for brilliance!"
    },
    {
      img: "/images/SAT1600/benefits/perfect.png",
      title: "$500 Perfect Score Prize",
      desc: "SNail a 1600 and grab $500—your genius pays off big!"
    },
  ]
  const tutors = [
    {
      img: "/images/SAT1600/sat-tutors/Jasur.png",
      name: "Abdusattarov Jasur",
      score: "1530",
      country: "Uzbekistan"
    },
    {
      img: "/images/SAT1600/sat-tutors/Serra.png",
      name: " Serra Aksoy ",
      score: "1590",
      country: "United States"
    },
    {
      img: "/images/SAT1600/sat-tutors/harshit.png",
      name: "Harshit Mehendiratta",
      score: "1510",
      country: "Indonesia "
    },
    {
      img: "/images/SAT1600/sat-tutors/Srina.png",
      name: "Srina Bose",
      score: "1530",
      country: "India"
    },
    {
      img: "/images/SAT1600/sat-tutors/anurag.png",
      name: "Anurag Kumar Das",
      score: "1530",
      country: "Nepal"
    },
    {
      img: "/images/SAT1600/sat-tutors/ayush.png",
      name: "Ayush Chauhan",
      score: "1600",
      country: "India"
    },
    {
      img: "/images/SAT1600/sat-tutors/aalyan.png",
      name: "Aalyan Ahmed ",
      score: "1560",
      country: "Pakistan "
    },
    {
      img: "/images/SAT1600/sat-tutors/somil.png",
      name: "Somil Jain ",
      score: "1550",
      country: "India "
    },
    {
      img: "/images/SAT1600/sat-tutors/sangya.png",
      name: "Sangya Pandey",
      score: "1570",
      country: "Nepal"
    },
  ]


  useEffect(() => {
    const videoElement = videoRef.current; // Reference to the video element

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Set isMuted to true if the video div is not in the viewport
        setIsMuted(!entry.isIntersecting);

        // Automatically pause or play the video based on visibility
        if (!entry.isIntersecting) {
          videoElement.pause();
          setIsPlaying(false); // Update isPlaying state to false when video is paused
        } else {
          videoElement.play();
          setIsPlaying(true); // Update isPlaying state to true when video starts playing
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    // Cleanup function to unobserve the video element when the component unmounts
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [setIsMuted, setIsPlaying]);
  const toggleMute = () => {
    setIsMuted(!isMuted); // Toggle mute state
  };
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("hasLoadedBefore", "false");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    const hasLoadedBefore = localStorage.getItem("hasLoadedBefore") === "true";

    if (!hasLoadedBefore) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasLoadedBefore", "true");
      }, 3500);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    } else {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    // Apply mute state to video element
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const loadScrollTrigger = async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.to("#video", {
        scrollTrigger: {
          trigger: "#videodiv",
          scrub: true,
          // markers: true,
        },
        width: "100%",
      });
    };

    loadScrollTrigger();
  }, []);

  return (
    <>
      {/* <ToastContainer /> */}
      {/* <Helmet>
                <meta charSet="utf-8" />
                <title>SAT1600 | Cross the Skylimits</title>
                <meta
                    name="description"
                    content="Your all-in-one destination to ace the perfect score of 1600/1600! Dive into expert strategies., comprehensive practice materials, and personalized guidance tailored for ultimate success. Whether you're aiming for excellence in the SAT or sharpening your academic skills, we've got you covered every step of the way. Achieve your dream score today!"
                />
                <meta
                    name="keywords"
                    content="SAT 1600, SAT prepration, SAT perfect score, SAT study materials, SAT practice, SAT strategies, SAT coaching, SAT tutoring"
                />
                <link rel="canonical" href="https://crosstheskylimits.org/SAT1600" />
            </Helmet> */}
      <div className="w-full bg-zinc-950  pt-5 bg-[url('/images/SAT1600/Benefits.webp')] bg-cover ">
        <div className="logo-img center  w-full h-[20vh] mt-14">
          <img className='w-[14%]' src="/images/SAT1600/satlogo.png" alt="" />
        </div>
        <div className="w-full h-[40vh]  flex items-center justify-center gap-5 flex-col text-center">
          <p className='text-4xl text-white'>All in one place to score 1600</p>
          <p className='text-6xl  text-white'>Let's crack The DSAT</p>
        </div>
        {/* <div className="hero-container flex w-full h-[80vh] max-[600px]:flex-col max-[600px]:gap-5 max-[600px]:h-auto max-[600px]:py-2">
                    <div className="w-1/2 h-full max-[600px]:w-full flex flex-col items-start gap-5 px-16 max-[600px]:pt-0 pt-16 max-[600px]:px-5">
                        <h1 className="text-6xl max-[600px]:text-3xl font-bold mt-2 leading-none">Your all in one place to score 1600/1600</h1>
                        <div className="sat-img w-1/2 max-[600px]:w-full max-[600px]:h-[25vh] px-5 max-[600px]:px-0 min-[600px]:hidden">
                        <video className='w-full rounded-lg' src="/public/videos/sat1600 video.mp4"></video>
                        </div>
                        <p className='mt-3 max-[600px]:mt-0 w-full text-base font-normal max-[600px]:text-justify text-zinc-300'>{`"Your all-in-one destination to ace the perfect score of 1600/1600! Dive into expert strategies, comprehensive practice materials, and personalized guidance tailored for ultimate success. Whether you're aiming for excellence in the SAT or sharpening your academic skills, we've got you covered every step of the way. Achieve your dream score today!"`}</p>
                        <a href="#sw" className='bg-[#81FF00] px-4 py-3 text-black text-xl max-[600px]:text-sm font-semibold mt-5 max-[600px]:mt-0 rounded-full'>Explore SAT 1600</a>
                    </div>
                    <div className="sat-img w-1/2 center pb-20  h-full px-5 max-[600px]:hidden">
                    <video controls className='w-full rounded-lg' src="/public/videos/sat1600 video.mp4"></video>
                    </div>
                </div> */}

        <div
          id="videodiv"
          className="w-full h-[100vh]   flex  relative  items-center justify-center max-[600px]:h-[50vh]"
        >
          {videoloading && (
            <div className="loaderparent translate-x-[100vh] shrink-0 gap-5 center w-full h-full text-white text-2xl">
              <div className="loader shrink-0"></div>
              Please wait Video is Rendering.....
            </div>
          )}
          <video
            id="video"
            ref={videoRef}
            loop
            onLoadedData={() => setVideoloading(false)}
            muted={isMuted}
            autoPlay
            playsInline
            className="h-[100%] object-cover origin-center w-[40%]"
            src="/videos/sat1600 video.mp4"
          ></video>
          <button
            onClick={togglePlayPause}
            className="play-pause-button absolute w-16 h-16 flex items-center justify-center bg-white rounded-full bottom-20 right-28 max-[600px]:bottom-5"
          >
            {isPlaying ? (
              <RiPauseFill size={30} className="my-icon" />
            ) : (
              <RiPlayFill size={30} className="my-icon" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="mute-button absolute w-16 h-16 flex items-center justify-center bg-white rounded-full bottom-20 right-10 max-[600px]:bottom-5 "
          >
            {isMuted ? (
              <RiVolumeMuteFill
                size={30} // set custom `width` and `height`
                className="my-icon" // add custom class name
              />
            ) : (
              <RiVolumeUpFill
                size={30} // set custom `width` and `height`
                className="my-icon" // add custom class name
              />
            )}
          </button>
        </div>

        <div className="text-white flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold text-green-500 mb-8">Our Benefits</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {benefits.map((b, index) => (
              <div key={index} className="bg-black bg-opacity-75 p-6 rounded-lg text-center">
                <div className="text-green-500 text-3xl center mb-4 size-24 m-auto bg-[url('/images/SAT1600/ellipse.png')] bg-contain bg-no-repeat overflow-hidden">
                  <img className='size-12 object-cover' src={b.img} alt="" />
                </div>
                <h2 className="text-xl font-semibold mb-2 text-white">{b.title}</h2>
                <p className='text-white'>{b.desc}</p>
              </div>
            ))}
          </div>
          <Link href="https://nas.io/sat1600" >
            <button className="mt-8 bg-green-500 text-black font-bold py-3 px-6 rounded-full text-xl hover:bg-green-600 transition duration-300">Join Now</button>
          </Link>
        </div>

        <div className="text-white">
          <div className="container mx-auto py-12">
            <h1 className="text-center text-4xl font-bold mb-12 text-white">
              Our
              &nbsp;
              <span className="text-lime-500">
                Tutors
              </span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-20 justify-items-center">
              {
                tutors.map((t, i) => (
                  <div key={i} className="text-center">
                    <img alt="Tutor 1" className="rounded-full mx-auto mb-4" height="150" src={t.img} width="150" />
                    <p className="font-bold text-white">
                      {t.name}
                    </p>
                    <p className='text-white'>
                      {t.country}
                    </p>
                    <p className='text-white'>
                      {t.score}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div id='sw' className=" max-[600px]:hidden">
          {/* <VideosSwiper /> */}
        </div>
        <div id='sw' className=" min-[600px]:hidden  w-full bg-black">
          <div className="w-[60vh] h-[80vh]   flex gap-5 flex-col justify-evenly  p-8 bg-[#FECDAE]" >
            <p className='text-2xl font-semibold'>Real SAT Practice Test</p>
            <p className=' leading-none'>Access authentic SAT practice tests that mirror the actual exam format and difficulty level.</p>
            <div className="center w-full">
              <img className='w-[80%]' src="/images/SAT1600/satpractice.png" alt="" />
            </div>
            <div className="w-full    flex">
              <div className="h-full w-[50%] flex flex-col gap-2">
                <div className="flex h-fit gap-3 items-center">
                  <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                  <p>Full Length Test</p>
                </div>
                <div className="flex h-fit gap-3 items-center">
                  <img className='size-5' src="/images/SAT1600/cross.png" alt="" />
                  <p>6 Tests</p>
                </div>
                <div className="flex h-fit gap-3 items-center">
                  <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                  <p>Full Length Test</p>
                </div>

              </div>
              <div className="h-full flex flex-col gap-2">
                <div className="flex h-fit gap-3 items-center">
                  <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                  <p>Full Length Test</p>
                </div>
                <div className="flex h-fit gap-3 items-center">
                  <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                  <p>12 Tests</p>
                </div>
                <div className="flex h-fit gap-3 items-center">
                  <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                  <p>Full Length Test</p>
                </div>

              </div>
            </div>
            <div className="w-full bg-[#FF924C] h-12 rounded-lg shrink-0 center text-center text-lg text-white font-medium " >
              <p>Take your free Practice Test</p>
            </div>
          </div>
          <div className="w-[60vh] h-[80vh]   flex gap-5 flex-col justify-evenly  p-8 bg-[#99F8CD]" >
            <p className='text-2xl font-semibold '>SAT Prep WhatsApp Community</p>
            <p className=' leading-none'>Join our supportive community to connect with fellow test-takers and get instant help.</p>
            <div className="w-full center">
              <img className='w-[70%]' src="/images/SAT1600/satprep.png" alt="" />

            </div>
            <div className="h-full  flex flex-col gap-2">
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Connection with like minded students</p>
              </div>
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Community support</p>
              </div>
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Weakly monthly meetings</p>
              </div>
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Study companion</p>
              </div>

            </div>


            <div className="w-full bg-[#01C069] h-12 rounded-lg shrink-0 center text-center text-lg text-white font-medium " >
              <p>Get free WhatsApp Community</p>
            </div>
          </div>
          <div className="w-[60vh] h-[80vh]   flex gap-5 flex-col justify-evenly  p-8 bg-[#ECB3EB]" >
            <p className='text-2xl font-semibold'>Free Resources</p>
            <p className=' leading-none'>Everything you need to score 1600/1600</p>
            <div className="w-full center">
              <img className='w-[70%]' src="/images/SAT1600/freeresource.png" alt="" />

            </div>
            <div className="h-full  flex flex-col gap-2">
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Access of all paid books </p>
              </div>
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Hacks & techniques</p>
              </div>
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Free lectures/recorded videos</p>
              </div>
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Case Studies</p>
              </div>
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Weekly interactions with 1500+ scores </p>
              </div>

            </div>


            <div className="w-full bg-[#F05FED] h-12 rounded-lg shrink-0 center text-center text-lg text-white font-medium " >
              <p>Access Free Resources</p>
            </div>
          </div>
          <div className="w-[60vh] h-[80vh]   flex gap-5 flex-col justify-evenly  p-8 bg-[#A1DDF5]" >
            <p className='text-2xl font-semibold'>Personalized Live Classes
            </p>
            <p className=' leading-none'>Learn from experienced instructors in inter-active live sessions tailored to your needs.
            </p>
            <div className="w-full center">
              <img className='w-[70%]' src="/images/SAT1600/personalized.png" alt="" />

            </div>
            <div className="h-full  flex flex-col gap-2">
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>1:1 Instracion</p>
              </div>
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Personalized Live Classes</p>
              </div>
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Free practice test</p>
              </div>
              <div className="flex h-fit gap-3 items-center">
                <img className='size-5' src="/images/SAT1600/greentick.png" alt="" />
                <p>Free registration test</p>
              </div>


            </div>


            <div className="w-full bg-[#1EB7F4] h-12 rounded-lg shrink-0 center text-center text-lg text-white font-medium " >
              <p>Take your free personalized live classes</p>
            </div>
          </div>
        </div>

        <div className="w-full max-[600px]: flex items-center justify-center py-20 mb-16">
          <div className="sattimer w-[50vh] max-[600px]:w-[35vh] h-fit flex flex-col items-center justify-center bg-[#81FF00] rounded-md">
            <h1 className='text-xl font-bold mt-10 text-black'>Next SAT Attempt</h1>
            <p className='text-black font-normal text-sm bg-[#e74d3c37] px-2 py-1 rounded-sm my-4'>March 8</p>
            <div className="countdown w-[120%] h-fit">
              <div className="timer w-full flex items-center justify-evenly py-10 drop-shadow-xl bg-white">
                <div className="days-wrapper center flex-col gap-2">
                  <div className="days size-12 center rounded-md"><h1 className='text-3xl text-zinc-700 font-semibold'>{timeLeft.days}</h1></div>
                  <p className='text-[10px] text-[#E74C3C] uppercase'>Days</p>
                </div>
                <div className="mb-6 text-zinc-950">:</div>
                <div className="days-wrapper center flex-col gap-2">
                  <div className="days size-12 center rounded-md"><h1 className='text-3xl text-zinc-700 font-semibold'>{timeLeft.hours}</h1></div>
                  <p className='text-[10px] text-[#E74C3C] uppercase'>hours</p>
                </div>
                <div className="mb-6 text-zinc-950">:</div>
                <div className="days-wrapper center flex-col gap-2">
                  <div className="days size-12 center rounded-md"><h1 className='text-3xl text-zinc-700 font-semibold'>{timeLeft.minutes}</h1></div>
                  <p className='text-[10px] text-[#E74C3C] uppercase'>minutes</p>
                </div>
                <div className="mb-6 text-zinc-950">:</div>
                <div className="days-wrapper center flex-col gap-2">
                  <div className="days size-12 center rounded-md"><h1 className='text-3xl text-zinc-700 font-semibold'>{timeLeft.seconds}</h1></div>
                  <p className='text-[10px] text-[#E74C3C] uppercase'>seconds</p>
                </div>
              </div>
            </div>
            <div className="flex w-full bg-[#1C3044] overflow-hidden">
              <div className="w-1/2 h-full center text-[10px] text-white p-10 rounded-bl-md"><h1>SAT</h1></div>
              <div className="w-1/2 h-full center text-[10px] text-white p-10 rounded-br-md"><h1>TIMING</h1></div>
            </div>
          </div>
        </div>

        <div className="satexamtable py-16">
          <h1 className="text-4xl px-28 max-[600px]:px-5 font-semibold mt-2 text-white">SAT 1600 Examination Schedule</h1>
          <p className='mt-3 w-full px-28 text-base max-[600px]:px-5 max-[600px]:text-justify text-zinc-300'>A complete list of upcoming SAT 1600 examination dates and registration deadlines.</p>
          <div className="overflow-y-auto h-full mt-10 py-5 px-28 max-[600px]:px-5 rounded-sm">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-md ">
              <thead className="bg-[#81FF00] sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    S.No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Exam Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Registration Deadline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Late Registration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Available Batches
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {
                  SatExam.map((exam, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {exam.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {exam.regdate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {exam.latereg}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <Link href="/services/exam-prepration/sat-prepration" className='text-zinc-100 bg-black px-4 py-2 rounded-md'>Click Here</Link>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
          <div className="info w-full h-fit">
            <h1 className="text-xl px-28 max-[600px]:px-5 font-bold my-2 text-white">Important Information</h1>
            {
              info.map((inf, index) => (
                <div key={index} className="info-card w-full h-fit px-28 max-[600px]:px-5 flex items-center gap-5 mt-3">
                  <img className='size-4 object-contain' src={inf.icon} alt="" />
                  <p className='text-base text-zinc-300'>{inf.infor}</p>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero
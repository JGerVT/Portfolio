import React, { useEffect, useRef, useState } from "react";
import Front from "../../Resources/Front.svg";
import Back from "../../Resources/Back.svg";
import Mid from "../../Resources/Mid.svg";
import BottomWave from "../../Resources/BottomWave.svg";

export function HomeBackground() {
    const ContainerRef = useRef<HTMLDivElement>(null);
    const [randPosOffset, setRandPosOffset] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });
    const [transformOffset, setTransformOffset] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });
    const animationScale = { Front: 0.009, Mid: 0.003, Back: 0.0008 };

    useEffect(() => {
        if (ContainerRef.current) {
            // const rect = ContainerRef.current.getBoundingClientRect();

            // // Calculate the center coordinates
            // const centerX = rect.left + rect.width / 2;
            // const centerY = rect.top + rect.height / 2;


            loop();
            loop2();
            // setRandPosOffset({x: 0, y: 0});
            // setTransformOffset({x: 0, y: 0});

            // const handleMouseMove = (e: MouseEvent) => {
            //     const mouseX = e.clientX - centerX;
            //     const mouseY = e.clientY - centerY;

            //     // if(e.clientY < rect.bottom){
            //         setRandPosOffset({ x: mouseX, y: mouseY });
            //     // }
            // };

            // // Attach the event listener to the document
            // document.addEventListener("mousemove", handleMouseMove);

            // return () => {
            //     document.removeEventListener("mousemove", handleMouseMove);
            // };
        }
    }, []);


    function loop() {
        var randX = Math.round(Math.random() * (7000 - 3500)) + 3500;
        var randY = Math.round(Math.random() * (7000 - 3500)) + 3500;
        setRandPosOffset({x: randX, y: randY })
        
        setTimeout(()=> {
            loop();  
        }, 3100);
    }

    function loop2() {
        var randX = Math.round(Math.random() * (1000 - 500)) + 500;
        var randY = Math.round(Math.random() * (1000 - 500)) + 500;
        setTransformOffset({x: randX, y: randY })
        

        setTimeout(()=> {
            loop();  
        }, 1400);
    }

    return (
        <div
            ref={ContainerRef}
            id="Background"
            className="absolute left-0 top-0 right-0 bottom-0 flex z-0 pointer-events-none select-none h-full overflow-hidden"
        >
            <div className="relative" style={{
                transform: `translate(${
                    transformOffset.x * animationScale.Front
                }px, ${transformOffset.y * animationScale.Front}px)`,
                transition: "transform 4s ease"
            }}>
                <div className=" translate-x-[-170px] translate-y-[80px]">
                <div
                    id="Back-IMG"
                    className={`absolute`}
                    style={{
                        transform: `translate(${
                            randPosOffset.x * animationScale.Back
                        }px, ${randPosOffset.y * animationScale.Back}px)`,
                        transition: "transform 5s ease"
                    }}
                >
                    <img
                        src={Back}
                        alt=""
                        className="max-w-none absolute top-[-1680px] left-[-50px] pointer-events-none"
                    />
                </div>
                <div
                    style={{
                        transform: `translate(${
                            randPosOffset.x * animationScale.Mid
                        }px, ${randPosOffset.y * animationScale.Mid}px)`,
                        transition: "transform 3s ease"
                    }}
                >
                    <img
                        src={Mid}
                        alt=""
                        className="max-w-none absolute top-[-150px] left-[-400px] scale-[87%] w-[2826px]  pointer-events-none"
                    />
                </div>
                <div
                    style={{
                        transform: `translate(${
                            randPosOffset.x * animationScale.Front
                        }px, ${randPosOffset.y * animationScale.Front}px)`,
                        transition: "transform 3s ease"
                    }}
                >
                    <img
                        src={Front}
                        alt=""
                        className="max-w-none absolute top-[-120px] left-[220px] scale-[83%]  pointer-events-none"
                    />
                </div>
                </div>

                <img
                    src={BottomWave}
                    alt=""
                    className="max-w-none absolute bottom-[-680px] left-[-120px] pointer-events-none"
                />
            </div>
        </div>
    );
}

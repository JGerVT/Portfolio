import React, { useEffect, useRef, useState } from "react";
import Front from "../../Resources/Front.svg";
import Back from "../../Resources/Back.svg";
import Mid from "../../Resources/Mid.svg";
import BottomWave from "../../Resources/BottomWave.svg";

let mousePosition = { x: 0, y: 0 };

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
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition = { x: e.clientX, y: e.clientY };
            adjustBG();
        };

        const adjustBG = () => {
            if (ContainerRef.current) {
                const rect = ContainerRef.current.getBoundingClientRect();
                setRandPosOffset({
                    x: (mousePosition.x - rect.left) * 2,
                    y: (mousePosition.y - rect.top) * 2,
                });
                setTransformOffset({
                    x: (mousePosition.x - rect.left) / rect.width,
                    y: (mousePosition.y - rect.top) / rect.height,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", adjustBG);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", adjustBG);
        };

        // let timeout1:NodeJS.Timeout | undefined;
        // let timeout2:NodeJS.Timeout | undefined;

        // if (ContainerRef.current) {
        //     loop(timeout1);
        //     loop2(timeout2);
        // }

        // return ()=>{
        //     clearTimeout(timeout1);
        //     clearTimeout(timeout2);
        // }
    }, []);

    // function loop(timeout: NodeJS.Timeout | undefined) {
    //     var randX = Math.round(Math.random() * (7000 - 3500)) + 3500;
    //     var randY = Math.round(Math.random() * (7000 - 3500)) + 3500;
    //     setRandPosOffset({x: randX, y: randY })

    //     timeout = setTimeout(()=> {
    //         loop(timeout);
    //     }, 2100);
    // }

    // function loop2(timeout: NodeJS.Timeout| undefined) {
    //     var randX = Math.round(Math.random() * (1000 - 500)) + 500;
    //     var randY = Math.round(Math.random() * (1000 - 500)) + 500;
    //     setTransformOffset({x: randX, y: randY })

    //     timeout = setTimeout(()=> {
    //         loop(timeout);
    //     }, 900);
    // }

    return (
        <div
            ref={ContainerRef}
            id="Background"
            className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-0 flex h-full select-none overflow-hidden"
        >
            <div
                className="relative"
                style={{
                    transform: `translate(${
                        transformOffset.x * animationScale.Front
                    }px, ${transformOffset.y * animationScale.Front}px)`,
                    transition: "transform .04s ease"
                }}
            >
                <div className="translate-x-[-170px] translate-y-[80px]">
                    <div
                        id="Back-IMG"
                        className={`absolute`}
                        style={{
                            transform: `translate(${
                                randPosOffset.x * animationScale.Back
                            }px, ${randPosOffset.y * animationScale.Back}px)`,
                            transition: "transform .05s ease"
                        }}
                    >
                        <img
                            src={Back}
                            alt=""
                            className="pointer-events-none absolute left-[-50px] top-[-1680px] max-w-none"
                        />
                    </div>
                    <div
                        style={{
                            transform: `translate(${
                                randPosOffset.x * animationScale.Mid
                            }px, ${randPosOffset.y * animationScale.Mid}px)`,
                            transition: "transform .03s ease"
                        }}
                    >
                        <img
                            src={Mid}
                            alt=""
                            className="pointer-events-none absolute left-[-400px] top-[-150px] w-[2826px] max-w-none scale-[87%]"
                        />
                    </div>
                    <div
                        style={{
                            transform: `translate(${
                                randPosOffset.x * animationScale.Front
                            }px, ${randPosOffset.y * animationScale.Front}px)`,
                            transition: "transform .03s ease"
                        }}
                    >
                        <img
                            src={Front}
                            alt=""
                            className="pointer-events-none absolute left-[220px] top-[-120px] max-w-none scale-[83%]"
                        />
                    </div>
                </div>

                <img
                    src={BottomWave}
                    alt=""
                    className="pointer-events-none absolute bottom-[-680px] left-[-120px] max-w-none"
                />
            </div>
        </div>
    );
}

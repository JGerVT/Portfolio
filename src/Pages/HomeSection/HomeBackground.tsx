import React, { useEffect, useRef, useState } from "react";
import Front from "../../Resources/Front.svg";
import Back from "../../Resources/Back.svg";
import Mid from "../../Resources/Mid.svg";
import BottomWave from "../../Resources/BottomWave.svg";

export function HomeBackground() {
    const ContainerRef = useRef<HTMLDivElement>(null);
    const [mousePosOffset, setMousePosOffset] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });
    const animationScale = { Front: 0.009, Mid: 0.003, Back: 0.0008 };

    useEffect(() => {
        if (ContainerRef.current) {
            const rect = ContainerRef.current.getBoundingClientRect();

            // Calculate the center coordinates
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const handleMouseMove = (e: MouseEvent) => {
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;

                // if(e.clientY < rect.bottom){
                setMousePosOffset({ x: mouseX, y: mouseY });
                // }
            };

            // Attach the event listener to the document
            document.addEventListener("mousemove", handleMouseMove);

            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
            };
        }
    }, []);

    return (
        <div
            ref={ContainerRef}
            id="Background"
            className="absolute left-0 top-0 right-0 bottom-0 flex z-0 pointer-events-none select-none h-full overflow-hidden"
        >
            <div className="relative">
                <div className=" translate-x-[-170px] translate-y-[80px]">
                <div
                    id="Back-IMG"
                    className={`absolute`}
                    style={{
                        transform: `translate(${
                            mousePosOffset.x * animationScale.Back
                        }px, ${mousePosOffset.y * animationScale.Back}px)`,
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
                            mousePosOffset.x * animationScale.Mid
                        }px, ${mousePosOffset.y * animationScale.Mid}px)`,
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
                            mousePosOffset.x * animationScale.Front
                        }px, ${mousePosOffset.y * animationScale.Front}px)`,
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

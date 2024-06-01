import React, { useEffect, useRef, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import styled from "styled-components";

export function ScrollboxContainer(props: {
    mainTitle: string;
    subTitle?: string;
    children?: React.ReactNode;
    arrowsOnImage?: boolean;
}) {
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const GameContainer = useRef<HTMLDivElement>(null);

    function ScrollBoxRight(e: React.MouseEvent) {
        if (GameContainer.current?.children) {
            scrollToNearestItem(
                GameContainer.current.getBoundingClientRect().width,
            );
        }
    }

    function ScrollBoxLeft(e: React.MouseEvent) {
        if (GameContainer.current?.children) {
            scrollToNearestItem(
                -GameContainer.current.getBoundingClientRect().width,
            );
        }
    }

    function scrollToNearestItem(scrollPositionOffset: number) {
        const scrollBox = GameContainer.current;

        if (scrollBox) {
            // Set the desired scroll position with the scrollPositionOffset
            const scrollPos =
                GameContainer.current?.scrollLeft! + scrollPositionOffset;
            const items = Array.from(scrollBox.children);

            let nearestItem:
                | {
                      offset: number;
                      item: any;
                  }
                | undefined = { offset: 0, item: null };

            // Loop through each item to find the closest item to the desired scroll position
            items.forEach((item) => {
                const itemActualPosX =
                    GameContainer.current?.scrollLeft! +
                    item.getBoundingClientRect().x -
                    scrollBox.getBoundingClientRect().left;
                const offset = Math.abs(scrollPos - itemActualPosX);

                if (
                    nearestItem?.item === null ||
                    offset < nearestItem!.offset
                ) {
                    nearestItem = { offset: offset, item: item };
                }
            });

            // Move to that nearest item
            if (nearestItem.item === GameContainer.current.children[0]) {
                GameContainer.current.scrollTo({ left: 0, behavior: "smooth" });
            } else if (nearestItem?.item != null) {
                (nearestItem.item as HTMLElement).scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start",
                });
            }
        }
    }

    // verify that can scroll on x axis
    useEffect(() => {
        const scrollBox = GameContainer.current;

        if (scrollBox) {
            const handleScroll = () => {
                // Check if the container can scroll in the X-axis
                const canScroll = scrollBox.scrollWidth > scrollBox.clientWidth;
                const isAtEnd =
                    scrollBox.scrollLeft + scrollBox.clientWidth >=
                    scrollBox.scrollWidth - 1;
                const isAtStart = scrollBox.scrollLeft === 0;

                setCanScrollRight(canScroll && !isAtEnd);
                setCanScrollLeft(canScroll && !isAtStart);
            };

            // Add event listener for scroll events
            scrollBox.addEventListener("scroll", handleScroll);

            // Initial check
            handleScroll();

            // Cleanup: remove event listener when component unmounts
            return () => {
                scrollBox.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    function ScrollButtons() {
        return (
            <div className="flex">
                <button
                    onClick={ScrollBoxLeft}
                    className="flex h-[25px] w-[25px] items-center justify-center rounded-l border border-[#3B61F8]"
                    style={{
                        backgroundColor: canScrollLeft
                            ? "#3B61F8"
                            : "transparent",
                    }}
                >
                    <BiSolidRightArrow color="white" className="rotate-180" />
                </button>
                <button
                    onClick={ScrollBoxRight}
                    className="flex h-[25px] w-[25px] items-center justify-center rounded-r border border-[#3B61F8]"
                    style={{
                        backgroundColor: canScrollRight
                            ? "#3B61F8"
                            : "transparent",
                    }}
                >
                    <BiSolidRightArrow color="white" className="" />
                </button>
            </div>
        );
    }

    return (
        <div className="relative z-[1] h-full w-full">
            <div className="relative z-10 flex flex-[1.7] flex-col">
                <div className="flex space-x-4">
                    <p className="flex-1 text-lg text-[#5594F2]">
                        {props.mainTitle}
                    </p>
                    {!props.subTitle && !props.arrowsOnImage && (
                        <ScrollButtons />
                    )}
                </div>
                {/* This div holds the projects title AND the scroll buttons */}
                {props.subTitle && !props.arrowsOnImage && (
                    <div className="flex justify-between">
                        <p className="pb-4 text-2xl font-semibold text-white">
                            {props.subTitle}
                        </p>
                        {<ScrollButtons />}
                    </div>
                )}
                <div
                    ref={GameContainer}
                    id="ProjectsContainer"
                    className="container flex w-full space-x-[47px] overflow-y-hidden overflow-x-scroll"
                >
                    {props.children}
                </div>
                {props.arrowsOnImage && (
                    <div>
                        <ScrollBTNArrow
                            className="left-0"
                            $canScrollLeft={canScrollLeft}
                            $canScrollRight={canScrollRight}
                            $isLeft={true}
                            onClick={ScrollBoxLeft}
                        >
                            <div className="scrollBoxLeftArrow">
                                <div className="scrollButtonArrow w-[34px] h-[34px] rounded-full bg-black translate-x-[5px]"/>
                                <BiSolidRightArrow
                                    color="white"
                                    className="scrollButtonArrow"
                                    size={20}
                                />
                            </div>
                        </ScrollBTNArrow>
                        <ScrollBTNArrow
                            className="scrollBoxRightArrow right-0"
                            $canScrollLeft={canScrollLeft}
                            $canScrollRight={canScrollRight}
                            $isLeft={false}
                            onClick={ScrollBoxRight}
                        >
                            <div className="scrollBoxRightArrow relative">
                                <div className="scrollButtonArrow w-[34px] h-[34px] rounded-full bg-black translate-x-[5px]"/>
                                <BiSolidRightArrow
                                    color="white"
                                    className="scrollButtonArrow"
                                    size={20}
                                />
                            </div>
                        </ScrollBTNArrow>
                    </div>
                )}
            </div>
        </div>
    );
}

const ScrollBTNArrow = styled.div<{
    $canScrollRight: boolean;
    $canScrollLeft: boolean;
    $isLeft: boolean;
}>`
    position: absolute;
    display: flex;
    top: 0;
    height: 100%;
    transition: opacity 0.1s ease-in-out;

    .scrollBoxLeftArrow,
    .scrollBoxRightArrow {
        display: flex;
        align-items: center;
        height: 100%;
        width: 200px;
    }

    .scrollBoxLeftArrow{
        cursor: ${(state) =>
            state.$canScrollLeft ? "pointer" : "auto"};


        opacity: ${(state) =>
            state.$canScrollLeft ? ".4" : ".1"};
    }
    .scrollBoxRightArrow{
        cursor: ${(state) =>
            state.$canScrollRight ? "pointer" : "auto"};

        opacity: ${(state) =>
            state.$canScrollRight ? ".4" : ".1"};
    }
    

    .scrollBoxLeftArrow > .scrollButtonArrow {
        position: absolute;
        left: 10px;
        rotate: 180deg;
    }

    .scrollBoxRightArrow > .scrollButtonArrow {
        position: absolute;
        right: 10px;
    }

    &:hover {
        .scrollBoxLeftArrow {
            opacity: ${(state) =>
            state.$canScrollLeft ? ".8" : ""};

            background-image: ${(state) =>
                state.$canScrollLeft
                    ? "linear-gradient(to right, #ffffff11, transparent)"
                    : ""};
        }
        .scrollBoxRightArrow {
            opacity: ${(state) =>
            state.$canScrollRight ? ".8" : ""};

            background-image: ${(state) =>
                state.$canScrollRight
                    ? "linear-gradient(to left, #ffffff11, transparent)"
                    : ""};
        }
    }
`;

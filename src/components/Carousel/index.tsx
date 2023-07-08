import { useState, useEffect, PropsWithChildren } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Dots from "./Dot";

type Props = {totalItems : number} & PropsWithChildren & EmblaOptionsType;

const Carousel = ({totalItems, children, ...options }: Props) => {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }
 
    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        {/* 3. The inner div must have a display:flex property */}
        {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
        <div className="flex">{children}</div>
      </div>
      <Dots itemsLength={totalItems} selectedIndex={selectedIndex} />
    </>
  );
};
export default Carousel;

import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Button } from "@mui/material";

import ExercisesCard from "./ExercisesCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <Button
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className="right-arrow"
    >
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Button>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <Button
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className="left-arrow"
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Button>
  );
};

const HorizontalScrollbar = ({ data, isBodyParts, setBodyPart, bodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExercisesCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;

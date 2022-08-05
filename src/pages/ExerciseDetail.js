import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youTubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      console.log(exerciseDetailData)
      setexerciseDetail(exerciseDetailData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;

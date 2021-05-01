import { useState, useEffect } from 'react';

import {
  useParams, 
} from "react-router-dom";

import styled from 'styled-components';
import StudentAnswerContainer from "../containers/StudentAnswerContainer";
import TeacherQuestionContainer from "../containers/TeacherQuestionContainer";
import StudentResponsesContainer from "../containers/StudentResponsesContainer";

const RoomName = styled.h3`
  font-size: 3rem; 
`

function Room() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { roomName } = useParams();

  const [roomData, setRoomData] = useState({
    currentQuestion: 'What up dude?',
    studentAnswer: '',
    questionType: '',
    multipleChoiceText: [],
    multipleChoiceCount: [],
    shortAnswerText: [],
    studentNames: [],
    currentStudentName: '',
    admin: true
  });

  // const admin = false; //need to hook this admin boolean up to authentication;

  return (
    <div>
      <RoomName>Room Name: {roomName}</RoomName>
      {roomData.admin ? <TeacherQuestionContainer roomData = { roomData }/> : <StudentAnswerContainer />}
      <StudentResponsesContainer />
    </div>
  );
}

export default Room;
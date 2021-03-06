import styled from "styled-components";

import books from "../assets/images/books.svg";
import chevronUp from "../assets/images/chevron.svg";

interface CourseProps {
  title: string;
  numChapter: string;
  titleCourse: string;
  subtitleCourse: string;
}

const Course = (props: CourseProps) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{props.title}</Title>
        <Link>
          <Chevron src={chevronUp} alt="Chevron" />
        </Link>
      </TitleContainer>

      <InfoCoursesContainer>
        <ChapterCourse>
          <NumberChapter>{props.numChapter}</NumberChapter>
        </ChapterCourse>

        <TextCourseContainer>
          <TitleCourse>{props.titleCourse}</TitleCourse>
          <SubtitleCourse>{props.subtitleCourse}</SubtitleCourse>
        </TextCourseContainer>

        <LessonContainer>
          <Books src={books} alt="Books" />
          <LessonsQuantity>
            <span>04 aulas</span> - 6min
          </LessonsQuantity>
        </LessonContainer>

        <Lesson>
          <LessonNumber>1</LessonNumber>
          <LessonName>O que você precisa saber antes de começar</LessonName>
          <LessonTime>2min</LessonTime>
        </Lesson>

        <Lesson>
          <LessonNumber>2</LessonNumber>
          <LessonName>Agenda do Curso</LessonName>
          <LessonTime>2min</LessonTime>
        </Lesson>

        <Lesson>
          <LessonNumber>3</LessonNumber>
          <LessonName>Informações e Grupo</LessonName>
          <LessonTime>1min</LessonTime>
        </Lesson>

        <Lesson>
          <LessonNumber>4</LessonNumber>
          <LessonName>Canais de suporte e contato</LessonName>
          <LessonTime>1min</LessonTime>
        </Lesson>
      </InfoCoursesContainer>
    </Container>
  );
};

export const Container = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1.875rem;
  margin-bottom: 0.625rem;
  font-family: "Termina", sans-serif;
  font-size: 1.313rem;
  color: #fafafa;
  letter-spacing: 0.06rem;
  align-items: center;
`;

export const Title = styled.p``;

export const Link = styled.a`
  cursor: pointer;
`;

export const Chevron = styled.img``;

export const InfoCoursesContainer = styled.div`
  border: 1px solid #c0bdbd;
  border-radius: 22px;
  padding: 1.625rem 2.188rem;
  width: 367px;
  margin-left: -8.3%;
`;

export const ChapterCourse = styled.div``;

export const NumberChapter = styled.p`
  width: 35px;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 900;
  font-size: 0.875rem;
  color: #131313;
  padding: 0.625rem;
  background-color: #00f729;
  margin-bottom: 1.5rem;
`;

export const TextCourseContainer = styled.div``;

export const TitleCourse = styled.p`
  font-family: "Termina", sans-serif;
  font-size: 1.19rem;
  color: #ffffff;
  margin-bottom: 0.75rem;
`;

export const SubtitleCourse = styled.p`
  width: 100%;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: #d9d9d9;
  margin-bottom: 1.5rem;
`;

export const Books = styled.img``;

export const LessonsQuantity = styled.p``;

export const LessonContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 500;
  color: #a4a4a4;
  font-size: 1rem;
  margin-bottom: 1.5rem;

  span {
    margin-left: 1.125rem;
    color: #00f729;
  }
`;

export const Lesson = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.938rem;
  align-items: center;
`;

export const LessonNumber = styled.p`
  color: #00f729;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
`;

export const LessonName = styled.p`
  width: 70%;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: #d9d9d9;
  letter-spacing: 0.05rem;
`;

export const LessonTime = styled.p`
  font-family: "Red Hat Display", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
  color: #a4a4a4;
`;

export default Course;

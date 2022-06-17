import books from "../../assets/images/books.svg";
import chevronUp from "../../assets/images/chevron.svg";
import {
  Books,
  ChapterCourse,
  Chevron,
  Container,
  InfoCoursesContainer,
  Lesson,
  LessonContainer,
  LessonName,
  LessonNumber,
  LessonsQuantity,
  LessonTime,
  Link,
  NumberChapter,
  SubtitleCourse,
  TextCourseContainer,
  Title,
  TitleContainer,
  TitleCourse,
} from "./styles";

interface CourseProps {
  title: string;
  numChapter: string;
  titleCourse: string;
  subtitleCourse: string;
}

export const Course = ({ title, numChapter, titleCourse, subtitleCourse }: CourseProps) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <Link>
          <Chevron src={chevronUp} alt="Chevron" />
        </Link>
      </TitleContainer>

      <InfoCoursesContainer>
        <ChapterCourse>
          <NumberChapter>{numChapter}</NumberChapter>
        </ChapterCourse>

        <TextCourseContainer>
          <TitleCourse>{titleCourse}</TitleCourse>
          <SubtitleCourse>{subtitleCourse}</SubtitleCourse>
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

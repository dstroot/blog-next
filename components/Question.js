export const Question = ({ question }) => {
  return (
    <p>
      {question.id}
      {'. '}
      {question.question}
      {/* {'\n Factor: '}
      {question.factor} */}
    </p>
  );
};

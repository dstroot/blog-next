import { Container } from "./Container";

export const Alert = ({ alert }) => {
  return alert ? (
    <div className="bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900">
      <Container>
        <div className="text-center p-2">{alert}</div>
      </Container>
    </div>
  ) : null;
};
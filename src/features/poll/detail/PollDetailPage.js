import { useParams } from "react-router-dom";

const PollDetailPage = () => {
  const { questionId } = useParams();

  return <div>Detail Poll Page for ID: {questionId}</div>;
};

export default PollDetailPage;

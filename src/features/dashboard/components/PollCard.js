import Button from "../../../components/Button";
import Card from "../../../components/Card";

const PollCard = ({ title, subtitle, handleDetailClick }) => {
  return (
    <Card title={title} subtitle={subtitle}>
      <Button disabled={false} handleClick={handleDetailClick}>
        Details
      </Button>
    </Card>
  );
};

export default PollCard;

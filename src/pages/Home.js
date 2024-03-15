import FeedbackForm from "../components/FeedbackForm";
import Feedbacks from "../components/Feedbacks";

const Home = () => {
  return (
    <div className="home">
      <Feedbacks />
      <FeedbackForm />
    </div>
  );
};
  
export default Home;
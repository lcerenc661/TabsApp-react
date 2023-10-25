import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentItem, setCurrentItem] = useState(0)
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
      }
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);


  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      {/* {button container} */}
      <BtnContainer info={info} setCurrentItem={setCurrentItem} currentItem={currentItem} />
      {/* {Job Info} */}
      <JobInfo info={info} currentItem={currentItem} />
    </section>
  );
};
export default App;

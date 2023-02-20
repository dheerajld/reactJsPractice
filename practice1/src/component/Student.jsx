import Footer from "./Footer";
import PropTypes from "prop-types";

export const Student = (props) => {
  let objectDate = new Date();
  let month = objectDate.getMonth();
  month = month + 1;
  let year = objectDate.getFullYear();
  let day = objectDate.getDate();
  let format = day + "-" + month + "-" + year;
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
      <Footer content="Powered by React" date={format} />
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
};

console.log(Student);

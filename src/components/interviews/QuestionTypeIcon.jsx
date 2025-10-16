import { MdCheckCircle, MdCode, MdDescription, MdHelp } from "react-icons/md";
const QuestionTypeIcon = ({ type }) => {
  
  switch (type) {
    case "mcq":
      return <MdHelp className="w-7 h-7" />
    case "true_false":
      return <MdCheckCircle className="w-7 h-7" />
    case "code_writing":
      return <MdCode className="w-7 h-7" />
    case "theoretical":
      return <MdDescription className="w-7 h-7" />
    default:
      return <MdHelp className="w-7 h-7" />
  }
}

export default QuestionTypeIcon;
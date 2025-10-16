
import questions from "@/../demo/js.json";
import TheoreticalCard from "@/components/interviews/TheoreticalCard";


export default function interviews() {

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6 ">
      <h1 className="text-2xl font-bold mb-4">Interviews Dashboard</h1>
      { questions.length > 0 &&  questions.map((question) => (
           <TheoreticalCard
           key={question.id}
           question={question}
         />
      ))}
    </div>
  );
}



"use client";
import QuestionTypeIcon from "@/components/interviews/QuestionTypeIcon";
import AnswerMarkdownRenderer from "@/components/interviews/AnswerMarkdownRenderer";
import { useState } from "react";
import { useLocale } from "next-intl";



export default function TheoreticalCard({ question }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [answerInput, setAnswerInput] = useState(false);
    const locale = useLocale();

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
        setAnswerInput(false);
    }

    const handleAnswerInput = () => {
        setAnswerInput(!answerInput);
        setShowAnswer(false);
    }

    return (
        <div className="bg-card text-card-foreground flex flex-col mb-4 rounded-xl border border-[var(--border-blur)] p-4 shadow-lg">
            {/* Header Section */}
            <div className="flex items-start space-x-4 mb-0">
         
                <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-0">
                        <div className="flex-shrink-0 mt-1  bg-primary/10 rounded-xl flex items-center justify-center">
                            <QuestionTypeIcon type="theoretical" />
                        </div>
                        <span className="bg-primary/10 text-primary capitalize text-sm rounded-full font-medium">
                            {question?.type[locale] || "Theoretical"}
                        </span>
                        <span className="px-3  py-1 capitalize bg-muted text-muted-foreground text-sm rounded-full">
                            {question?.difficulty[locale] || "Intermediate"}
                        </span>
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                            {question?.evaluation?.points || 15} Points
                        </span>
                    </div>
                    <h2 className="text-xl font-semibold my-4">
                        {question?.question[locale] || "Explain the concept of closures in JavaScript with an example."}
                    </h2>
                </div>
            </div>
            {/* code snippet for theoretical questions */}
            {question?.codeSnippetQuestion.code && <div className="space-y-4">
                <div className="bg- rounded-xl p-4 border">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-slate-400 text-sm">code.{question?.codeSnippetQuestion?.lang}</span>
                        </div>
                    </div>
                    <p className="w-full h-fit bg-transparent text-green-400 font-mono text-sm resize-none outline-none placeholder-slate-500"
                        placeholder="// Write your code here..."
                        spellCheck={false}>
                        {question?.codeSnippetQuestion?.code}  </p>

                </div>
                <p className="text-sm text-muted-foreground">💡 Tip: Write clean, readable code with proper indentation</p>
            </div>
            }
            {/* Answer Section */}
            <div>
                {answerInput ? <div className="space-y-4">
                    <textarea
                        className="w-full h-48 p-4 border rounded-xl resize-none outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Write your detailed answer here. You can include examples, explanations, and code snippets..."
                        id="answer"
                        name="answer"
                        required
                    />
                    <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Writing Tips:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Provide clear explanations with examples</li>
                            <li>• Use proper terminology</li>
                            <li>• Structure your answer logically</li>
                            <li>• Include code examples when relevant</li>
                        </ul>
                    </div>
                </div> : null}
            </div>
            {/* Answer */}
            <div  className={`relative  overflow-hidden transition-all duration-1000 border border-[var(--border-soft)] rounded-xl  ${showAnswer ? " max-h-[800px] p-3 mb-2" : "max-h-0 p-0 border-0 mb-0"}`} id="answer">
                    <div className="absolute top-4 end-4 z-10">
                        <button
                            className="rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 flex items-center space-x-2 bg-transparent"
                            onClick={handleShowAnswer}
                        >
                            Close
                        </button>
                    </div>
             {question?.answer?.[locale] ? <AnswerMarkdownRenderer content={question?.answer?.[locale]} /> : <p>No answer available</p>}
            </div>
            {/* Action Buttons */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <button
                        className="rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 flex items-center space-x-2 bg-transparent"
                        onClick={handleShowAnswer}
                    >
                        Show Answer
                    </button>
                    <button
                        className="rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 flex items-center space-x-2 bg-transparent"
                        onClick={handleAnswerInput}
                    >
                        Test Yourself
                    </button>
                </div>
                <div className="flex items-center space-x-3">
                    <button
                        className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 flex items-center space-x-2"
                    >
                        Submit Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}




"use client";
import QuestionTypeIcon from "@/components/interviews/QuestionTypeIcon";
import AnswerMarkdownRenderer from "@/components/interviews/AnswerMarkdownRenderer";
import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import CodeBlock from "@/components/interviews/CodeBlock";

export default function TheoreticalCard({ question }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [answerInput, setAnswerInput] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [maxHeight, setMaxHeight] = useState("0");
    const [maxAnswerHeight, setMaxAnswerHeight] = useState("0px");
    const answerRef = useRef(null);
    const answerInputRef = useRef(null);
    const locale = useLocale();

    useEffect(() => {
        if (showAnswer && answerRef.current) {
            const height = answerRef.current.scrollHeight + 40;

            if (height > 0 && height > 600) {
                setMaxHeight("600");
            } else if (height > 0) {
                setMaxHeight(`${height}`);
            } else {
                setMaxHeight("0");
            }
                answerRef.current.scrollTop = 0;
        } else {
            setMaxHeight("0");
        }
    }, [showAnswer]);



    useEffect(() => {
        if (answerInput && answerInputRef.current) {
            setMaxAnswerHeight(`${answerInputRef.current.scrollHeight}px`);
        } else {
            setMaxAnswerHeight("0px");
        }
    }, [answerInput]);

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
        setAnswerInput(false);
        setOpacity(showAnswer ? 0.2 : 1);
    }

    const handleAnswerInput = () => {
        setAnswerInput(!answerInput);
        setShowAnswer(false);
        // setOpacity(0.2);
    }


    return (
        <div className="flex flex-col mb-4 rounded-xl border border-[var(--border-blur)] p-4 shadow-lg dark:shadow-lg dark:shadow-white/15">
            {/* Header Section */}
            <div className="flex items-start space-x-4 rtl:space-x-reverse mb-0">

                <div className="flex-1">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse mb-0">
                        <div className="flex-shrink-0 mt-1 rounded-xl flex items-center justify-center">
                            <QuestionTypeIcon type="theoretical" />
                        </div>
                        <span className="bg-primary/10 py-[2px] px-2 text-primary capitalize text-sm rounded-full font-medium">
                            {question?.type[locale] || "Theoretical"}
                        </span>
                        <span className="px-3  py-1 capitalize bg-muted text-muted-foreground text-sm rounded-full">
                            {question?.difficulty[locale] || "Intermediate"}
                        </span>
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                            {question?.evaluation?.points || 15} Points
                        </span>
                    </div>
                    <h2 className="text-xl font-semibold mt-4">
                        {question?.question[locale] || "Sample Theoretical Question?"}
                    </h2>
                </div>
            </div>
            {/* code snippet for theoretical questions */}
            {question?.codeSnippetQuestion.code && <div className="mb-0 ">
                    <CodeBlock
              language={question?.codeSnippetQuestion?.lang}
              value={String(question?.codeSnippetQuestion?.code).replace(/\n$/, "")}
               style={"mb-0"}
           
            />
            </div>
            }
            {/* Answer Section */}
            <div>
                <div ref={answerInputRef} style={{ maxHeight: maxAnswerHeight }} className={`space-y-4 transition-all duration-1000 overflow-hidden ${answerInput ? "mb-4" : "mb-0"}`} >
                    <textarea
                        className="w-full h-48 p-4 border rounded-xl resize-none outline-none  focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
                </div>
            </div>


            {/* Answer */}
            <div ref={answerRef} style={{ maxHeight: maxHeight > 0 ? `${maxHeight}px` : "0px", opacity: opacity }} className={`relative overflow-x-hidden overflow-y-auto transition-all duration-1000 border border-[var(--border-soft)] rounded-xl  ${showAnswer ? "p-3 mb-4" : " p-0 border-0 mb-0"}`} id="answer">
                <div className={`${question?.answer?.[locale] ? "sticky" : "absolute"} top-2 end-2 z-20 flex justify-end`}>
                    <button
                        className="rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 flex items-center space-x-2 rtl:space-x-reverse bg-transparent"
                        onClick={handleShowAnswer}
                    >
                        Close
                    </button>
                </div>
                {question?.answer?.[locale] ? <AnswerMarkdownRenderer content={question?.answer?.[locale]} /> : <p className="capitalize">No answer available</p>}
            </div>
            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <button
                        className="rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 flex items-center space-x-2 rtl:space-x-reverse bg-transparent"
                        onClick={handleShowAnswer}
                    >
                        {showAnswer ? "Hide" : "Show"} Answer
                    </button>
                    <button
                        className="rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 flex items-center space-x-2 rtl:space-x-reverse bg-transparent"
                        onClick={handleAnswerInput}
                    >
                        Test Yourself
                    </button>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <button
                        className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 flex items-center space-x-2 rtl:space-x-reverse"
                    >
                        Submit Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}


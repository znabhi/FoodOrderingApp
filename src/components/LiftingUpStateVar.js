import { useState } from "react";
const LiftingUpStateVar = ({ accordion }) => {
  const [a, setA] = useState(-1);
  const toggle = (index) => {
    setA(index === a ? -1 : index);
  };
  accordion = [
    {
      header: "Header#1",
      content: "askjdhakjdnaskj",
    },
    {
      header: "Header#2",
      content: "lkajsdhakjdnask",
    },
  ];
  return (
    <div className=" w-2/4 m-auto">
      {accordion?.map((x, index) => (
        <div key={x?.title}>
          <button
            className="border border-gray-400 w-full text-left flex justify-between p-5"
            onClick={() => toggle(index)}
          >
            {x?.header}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          {index === a && (
            <div className="p-5 text-justify rounded-lg border-t-0 border rounded-t-none border-b-5 border-l-5 border-r-5">
              {x?.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default LiftingUpStateVar;

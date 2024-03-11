/* eslint-disable react/prop-types */

import ExperienceItem from "./ExperienceItem";

export const ExperienceList = ({ data }) => {
  return (
    <ul>
      {data.map((FD, ind) => {
        return (
          <li key={ind} className="my-5">
            <ExperienceItem FD={FD} />
          </li>
        );
      })}
    </ul>
  );
};

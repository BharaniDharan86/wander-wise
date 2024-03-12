/* eslint-disable react/prop-types */

import ExperienceItem from "./ExperienceItem";
import useToken from "../../hooks/useToken";

export const ExperienceList = ({ data }) => {
  const token = useToken();

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

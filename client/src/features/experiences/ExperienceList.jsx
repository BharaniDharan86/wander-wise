/* eslint-disable react/prop-types */

import ExperienceItem from "./ExperienceItem";

export const ExperienceList = ({ data, userData }) => {
  return (
    <ul className="">
      {data?.data?.map((FD) => {
        return (
          <li
            key={data?.data?._id}
            className="my-5 border-2 border-slate-100 p-2"
          >
            <ExperienceItem FD={FD} userData={userData} />
          </li>
        );
      })}
    </ul>
  );
};

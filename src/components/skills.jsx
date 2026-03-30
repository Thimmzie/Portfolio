import React from 'react';
import { Skills } from '../../constants/index.js';

const skills = () => {
  return (
    <div className="h-[200vh] px-3">
      <div className="flex flex-wrap gap-2">
        {Skills.map((skill) => {
          return (
            <div key={skill.id} className="flex gap-1.5 py-2.5 ">
              <p className="text-white text-[0.8rem] px-4 py-3 rounded-4xl border border-[#f0eeee] bg-black  max-w-full break-words">
                {skill.problem}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default skills;

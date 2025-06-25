import React from "react";

const SkillProgress = ({ skill, percent, color }) => {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-black/30 backdrop-blur-md shadow-lg shadow-pink-500/10">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#2e2e2e"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-700 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
        />
      </svg>
      <span className="mt-2 text-sm font-medium text-white">{skill}</span>
      <span className="text-xs text-gray-400">{percent}%</span>
    </div>
  );
};

export default SkillProgress;

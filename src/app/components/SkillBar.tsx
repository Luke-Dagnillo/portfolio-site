'use client';

type SkillBarProps = {
  label: string;
  width: string;
};

export default function SkillBar({ label, width }: SkillBarProps) {
  return (
    <div className="w-full">
      <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>
      <div className="w-full bg-gray-300 rounded h-3 overflow-hidden">
        <div
          className="bg-blue-600 h-3 rounded transition-all duration-700"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}
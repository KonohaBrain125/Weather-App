import React from 'react';

type TextProps = {
  content: string;
  icon: React.ReactNode;
};

export const Text = ({ content, icon }: TextProps) => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      {icon}
      <p className="flex text-4xl font-normal dark:text-white text-blue-400">{content}</p>
    </div>
  );
};

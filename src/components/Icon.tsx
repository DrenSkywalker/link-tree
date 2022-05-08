import * as React from 'react';

export type IconProps = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  white?: boolean;
  className?: string;
};

const Icon = (props: IconProps) => {
  const {icon, white, className} = props;

  const Component = icon;

  return (
    <div className="h-fit w-fit p-[0.438rem]">
      <Component
        className={`flex-auto shrink-0 grow-0 size-5 ${
          white ? 'fill-base-100' : 'fill-neutral-content'
        } ${className}`}
      />
    </div>
  );
};

export default Icon;

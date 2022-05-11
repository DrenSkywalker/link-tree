import * as React from 'react';

export type IconProps = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  white?: boolean;
  size?: 'sm' | 'md';
};

const Icon = (props: IconProps) => {
  const {icon, white, size} = props;

  const Component = icon;

  const sizes = {
    sm: 'size-5',
    md: 'size-6',
  };
  const getSize = () => sizes[size || 'sm'];

  return (
    <div className="h-fit w-fit">
      <Component
        className={`flex-auto shrink-0 grow-0 ${getSize()} ${
          white ? 'fill-white' : 'fill-neutral-content'
        }`}
      />
    </div>
  );
};

export default Icon;

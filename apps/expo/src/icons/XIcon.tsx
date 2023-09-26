import * as React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";
import type { FC } from "react";

interface Props extends SvgProps {
  colorFill?: string;
}

const XIcon: FC<Props> = (props) => {
  const { colorFill, ...svgProps } = props;
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...svgProps}>
      <Path
        d="M15.6449 13.9999L20.6616 8.99489C20.8813 8.7752 21.0047 8.47724 21.0047 8.16656C21.0047 7.85587 20.8813 7.55791 20.6616 7.33822C20.4419 7.11854 20.1439 6.99512 19.8333 6.99512C19.5226 6.99512 19.2246 7.11854 19.0049 7.33822L13.9999 12.3549L8.99493 7.33822C8.77524 7.11854 8.47728 6.99512 8.1666 6.99512C7.85591 6.99512 7.55795 7.11854 7.33826 7.33822C7.11857 7.55791 6.99516 7.85587 6.99516 8.16656C6.99516 8.47724 7.11857 8.7752 7.33826 8.99489L12.3549 13.9999L7.33826 19.0049C7.22891 19.1133 7.14212 19.2424 7.08289 19.3846C7.02366 19.5267 6.99316 19.6792 6.99316 19.8332C6.99316 19.9872 7.02366 20.1397 7.08289 20.2819C7.14212 20.4241 7.22891 20.5531 7.33826 20.6616C7.44672 20.7709 7.57575 20.8577 7.71792 20.9169C7.86009 20.9762 8.01258 21.0067 8.1666 21.0067C8.32061 21.0067 8.4731 20.9762 8.61527 20.9169C8.75744 20.8577 8.88647 20.7709 8.99493 20.6616L13.9999 15.6449L19.0049 20.6616C19.1134 20.7709 19.2424 20.8577 19.3846 20.9169C19.5268 20.9762 19.6792 21.0067 19.8333 21.0067C19.9873 21.0067 20.1398 20.9762 20.2819 20.9169C20.4241 20.8577 20.5531 20.7709 20.6616 20.6616C20.7709 20.5531 20.8577 20.4241 20.917 20.2819C20.9762 20.1397 21.0067 19.9872 21.0067 19.8332C21.0067 19.6792 20.9762 19.5267 20.917 19.3846C20.8577 19.2424 20.7709 19.1133 20.6616 19.0049L15.6449 13.9999Z"
        fill={colorFill ?? "#212121"}
      />
    </Svg>
  );
};
export default XIcon;

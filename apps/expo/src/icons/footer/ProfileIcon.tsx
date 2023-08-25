import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { FC } from "react";

const ProfileIcon: FC<SvgProps> = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.921 15.9961C7.66 15.9961 5.5 16.7281 5.5 18.1731C5.5 19.6311 7.66 20.3701 11.921 20.3701C16.181 20.3701 18.34 19.6381 18.34 18.1931C18.34 16.7351 16.181 15.9961 11.921 15.9961ZM11.921 21.8701C9.962 21.8701 4 21.8701 4 18.1731C4 14.8771 8.521 14.4961 11.921 14.4961C13.88 14.4961 19.84 14.4961 19.84 18.1931C19.84 21.4891 15.32 21.8701 11.921 21.8701Z"
      fill="#9E9E9E"
    />

    <Path
      d="M11.9214 3.42776C9.78038 3.42776 8.03838 5.16876 8.03838 7.30976C8.03138 9.44376 9.76038 11.1838 11.8924 11.1918L11.9214 11.9058V11.1918C14.0614 11.1918 15.8024 9.44976 15.8024 7.30976C15.8024 5.16876 14.0614 3.42776 11.9214 3.42776ZM11.9214 12.6188H11.8894C8.96738 12.6098 6.60038 10.2268 6.61038 7.30676C6.61038 4.38176 8.99238 1.99976 11.9214 1.99976C14.8494 1.99976 17.2304 4.38176 17.2304 7.30976C17.2304 10.2378 14.8494 12.6188 11.9214 12.6188Z"
      fill="#9E9E9E"
    />
  </Svg>
);

export default ProfileIcon;

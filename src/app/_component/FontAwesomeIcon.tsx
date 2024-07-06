import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface FontAwesomeIconCustomProps extends FontAwesomeIconProps {
  // Add any custom props you need here
//   customProp?: string;
}

const FontAwesome: React.FC<FontAwesomeIconCustomProps> = ({  ...props }) => {
  return (
    <FontAwesomeIcon
      {...props}
    />
  );
};

export default FontAwesome
import { Text } from "react-native";

interface NFTTitleProps {
  title: string;
  subTitle: string;
  titleSize?: number;
  subTitleSize?: number;
}

const NFTTitle = (props: NFTTitleProps) => {
  const { title, titleSize, subTitle, subTitleSize } = props;

  return (
    <>
      <Text
        className="text-primary font-inter-semi-bold"
        style={{
          fontSize: titleSize,
        }}
      >
        {title}
      </Text>

      <Text
        className="text-primary font-inter-regular"
        style={{
          fontSize: subTitleSize,
        }}
      >
        by {subTitle}
      </Text>
    </>
  );
};

export default NFTTitle;

import { styled } from "styled-components";

type ImageShape = "circle" | "square";
type ShapeImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  shape?: ImageShape;
};

const ImageWithShape = styled.img<ShapeImageProps>`
  border-radius: ${({ shape }) => (shape === "circle" ? "50%" : "0")};
`;

const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props;
  return <ImageWithShape shape={shape} {...imageProps} />;
};

export default ShapeImage;

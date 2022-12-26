import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

type ArrowProps = React.ComponentProps<'button'>;

export function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <MdArrowForwardIos />
    </button>
  );
}

export function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <MdArrowBackIos />
    </button>
  );
}

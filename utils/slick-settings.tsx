import { NextArrow, PrevArrow } from '@/components/SlickBtns';

export interface SLICK_SETTINGS_PROPS {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  sliderToScroll: number;
}

export const SETTINGS_FOR_LIST_MOVIES = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
};

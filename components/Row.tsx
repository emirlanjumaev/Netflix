import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Movie } from '../types';
import Slider from 'react-slick';
import { SETTINGS_FOR_LIST_MOVIES } from '@/utils/slick-settings';
import Thumbnails from './Thumbnails';
interface RowProps {
  movies: Movie[];
  title: string;
}

export default function Row({ movies, title }: RowProps) {
  return (
    <div className="gr-row row mt-6 md:mt-[24px]">
      <div className="container">
        <h3 className="text-xl mb-1">{title}</h3>
        <div className="box">
          <div className="main_slider">
            <Slider {...SETTINGS_FOR_LIST_MOVIES}>
              {movies.map((item, idx) => {
                return <Thumbnails movie={item} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

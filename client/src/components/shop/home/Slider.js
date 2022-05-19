import React, { Fragment, useEffect, useContext } from 'react';
import HeroSlider, { Slide, ButtonsNav, OverlayContainer } from 'hero-slider';

import OrderSuccessMessage from './OrderSuccessMessage';
import { HomeContext } from './';
import { sliderImages } from '../../admin/dashboardAdmin/Action';
// JSX
import Wrapper from './common/Wrapper/Wrapper';
import Title from './common/Title/Title';
import Subtitle from './common/Subtitle/Subtitle';
const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);

  useEffect(() => {
    sliderImages(dispatch);
  }, []);

  return (
    <Fragment>
      <HeroSlider
        slidingAnimation='fade'
        orientation='horizontal'
        initialSlide={1}
        style={{
          backgroundColor: '#000',
        }}
        settings={{
          slidingDuration: 400,
          slidingDelay: 100,
          shouldAutoplay: false,
          shouldDisplayButtons: false,
          height: '100vh',
        }}
      >
        <OverlayContainer>
          <Wrapper>
            <Title>Blend Mode Slider</Title>
            <Subtitle>
              Slides' and masks' background blend mode set to luminosity
            </Subtitle>
            <Subtitle>Slides' shouldRenderMask prop set to true</Subtitle>
          </Wrapper>
        </OverlayContainer>
        <>
          {data?.sliderImages?.length > 0 &&
            data?.sliderImages?.map(({ slideImage }) => (
              <Slide
                shouldRenderMask
                background={{
                  backdropFilter: 'opacity(20%)',
                  backgroundBlendMode: 'luminosity',
                  maskBackgroundBlendMode: 'luminosity',
                  backgroundImage: `${apiURL}/uploads/customize/${slideImage}`,
                }}
              />
            ))}
        </>

        <ButtonsNav />
      </HeroSlider>

      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;

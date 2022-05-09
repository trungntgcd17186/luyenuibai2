import { Col, Input, Row, Switch } from 'antd';
import 'antd/dist/antd.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import './App.css';
import Icons from './assets/images/index';

import { gameSeller, product } from './constant/index';

function App() {
  const [theme, setTheme] = useState('theme' ? 'dark' : 'light');

  const handleSwitchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const handleRenderProduct = () => {
    return (
      <Slider {...settings}>
        {product.map((item, index) => (
          <div key={index}>
            <div className='featured-gears-wrapper'>
              <div className='featured-gears-item'>
                {item.bestSeller ? (
                  <div className='best-seller'>
                    <div style={{ marginLeft: '12px' }}>Best Seller </div>
                    <div className='best-seller-elipse-icon'></div>
                  </div>
                ) : (
                  ''
                )}

                <div className='title-featured-product'>{item.name}</div>

                <div className='description-featured-product'>
                  {item.description}
                </div>

                <div className='content-featured-product'>
                  Watch as a living, breathing game world comes alive all around
                  you
                </div>

                <div className='flex' style={{ marginTop: '24px' }}>
                  <img src={Icons.Gear1Icon} alt='icon' />
                  <div className='about-product-infor'>
                    1st Prize Education Supporter
                  </div>
                </div>

                <div className='flex' style={{ marginTop: '12px' }}>
                  <img src={Icons.Gear2Icon} alt='icon' />
                  <div className='about-product-infor'>2 years warranty</div>
                </div>

                <div className='flex' style={{ marginTop: '12px' }}>
                  <img src={Icons.Gear3Icon} alt='icon' />
                  <div className='about-product-infor'>Enviroment safety</div>
                </div>

                <div className='more-details-btn cursor'>
                  See detail
                  <img
                    style={{ marginLeft: '4px', marginTop: '-2px' }}
                    src={
                      theme === 'light'
                        ? Icons.MoreDetailsIcon
                        : Icons.MoreDetailsDarkMode
                    }
                    alt='icon'
                  />
                </div>
              </div>
              <div className='footer-card'></div>
              <img
                className={item.classImage}
                src={item.imgSrc}
                alt='product'
              />
            </div>
          </div>
        ))}
      </Slider>
    );
  };

  const handleRenderGameSeller = () => {
    return (
      <Slider {...settings}>
        {gameSeller.map((item, index) => (
          <div key={index} className='game-seller-card'>
            <img
              className='game-seller-image'
              height={180}
              src={item.imgSrc}
              alt='card-game'
            />
            <div className='game-seller-content-container'>
              <div className='game-seller-content-left'>
                <div className='game-seller-name'>Carve Snowboarding</div>
                <div className='game-seller-hastag'>{item.hastag}</div>
                <div className='game-seller-star-feedbacks flex'>
                  <img src={Icons.StarReview} alt='icon' />
                  <div style={{ marginLeft: '12px' }}>{item.rating}</div>
                </div>
                <div className='game-seller-content'>{item.content}</div>
              </div>
              <div className='game-seller-content-right'>
                <img src={Icons.GameSellerIcon1} alt='icon' />
                <img src={Icons.GameSellerIcon2} alt='icon' />
                <img src={Icons.GameSellerIcon3} alt='icon' />
                <img src={Icons.GameSellerIcon4} alt='icon' />
              </div>
            </div>
            <div className='game-seller-card-footer'>{item.price}</div>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <div className='App' data-theme={theme}>
      <div
        xl={5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          zIndex: 999,
        }}
      >
        <div style={{ color: 'red', marginRight: '5px' }}>Switch Mode</div>
        <Switch size='small' onChange={handleSwitchTheme} />
      </div>
      <Row style={{ paddingTop: '64px', paddingBottom: '80px' }}>
        <Col xl={2} />
        <Col xl={4}>
          <img
            src={theme === 'light' ? Icons.Logo : Icons.LogoDarkMode}
            alt='icon'
          />
        </Col>
        <Col xl={5} />

        <Col
          xl={9}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div className='nav-item cursor'>
            Product
            <img
              style={{ marginLeft: '8px' }}
              src={theme === 'light' ? Icons.DownIcon : Icons.DownDarkModeIcon}
              alt='icon'
            />
          </div>
          <div className='nav-item cursor'>App & Game</div>
          <div className='nav-item cursor'>Support</div>
        </Col>
        <Col xl={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img
            className='cursor'
            src={theme === 'light' ? Icons.MenuIcon : Icons.MenuDarkMode}
            alt='icon'
          />
        </Col>
        <Col xl={2} />
      </Row>
      <Row>
        <Col xl={24} style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src={Icons.Banner1} alt='banner' />
          <div className='banner-btn cursor'>
            LEAN MORE
            <img
              style={{ marginLeft: '24px' }}
              src={Icons.ArrowIcon}
              alt='icon'
            />
          </div>
        </Col>
      </Row>
      <Row style={{ paddingTop: '56px' }}>
        <Col xl={2} />
        <Col xl={22}>
          <div className='name-category-product'>Featured Gears</div>
          <div style={{ marginTop: '24px' }}>{handleRenderProduct()}</div>
        </Col>
      </Row>
      <Row>
        <Col xl={24}>
          {/* Section 2 */}
          <div className='banner2-container'>
            <img
              className='banner2-image'
              src={Icons.Banner2Image}
              alt='icon'
            />
            <img
              className='banner2-btn cursor'
              src={Icons.LeftArrowBanner}
              alt='icon'
            />

            <div className='banner2-wrapper'>
              <div className='banner2-content'>
                <div className='flex'>
                  <div className='content-left-container'>
                    <div className='bring-content-banner2'>BRING</div>
                    <div className='real-content-banner2'>REAL WORLD</div>
                  </div>
                  <img src={Icons.LineIcon} alt='icon' />
                  <div className='content-right-container'>
                    <div className='visual-content-banner2'>VISUAL VALUES</div>
                    <div className='to-content-banner2'>TO</div>
                  </div>
                </div>
                <div className='banner-paragrahp'>
                  <p>
                    Stay focused on the fight or lost in meditation with
                    built-in speakers that deliver cinematic 3D positional
                    audio. Watch as a living, breathing game world comes alive
                    all around you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ paddingTop: '56px' }}>
        <Col xl={2} />
        <Col xl={22}>
          <div className='name-category-product'>Top Game Selling</div>
          <div style={{ marginTop: '24px' }}>{handleRenderGameSeller()}</div>
        </Col>
      </Row>
      <Row style={{ paddingTop: '105px' }}>
        <Col xl={2} />
        <Col xl={22}>
          <div className='location-container'>
            <div className='location-wrapper'>
              <div className='location-title'>
                SEE VRGEAR <br /> IN YOUR LOCATION
              </div>
              <div style={{ paddingBottom: '10px' }}>
                <div className='location-input flex'>
                  <Input
                    bordered={false}
                    className='input'
                    placeholder='Enter your location'
                  />
                  <img src={Icons.ArrowInputIcon} alt='icon' />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='row-container-footer'>
        <Col xl={2} />
        <Col
          xl={20}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '83px',
            paddingBottom: '80px',
          }}
        >
          <div>
            <img
              src={
                theme === 'light' ? Icons.LogoFooter : Icons.LogoFooterDarkMode
              }
              alt='logo-footer'
            />
            <div className='footer-title'>
              VRGEAR AND <br /> APP GAME BUSINESS
            </div>
            <div className='footer-description'>Powered by Google</div>
          </div>
          <div className='footer-contact'>
            <div className='footer-contact-social-container'>
              <div className='footer-contact-social-wrapper'>
                {theme === 'light' ? (
                  <>
                    <img src={Icons.Facebook} alt='icon' />
                    <img src={Icons.Twitter} alt='icon' />
                    <img src={Icons.Instagram} alt='icon' />
                  </>
                ) : (
                  <>
                    <img src={Icons.FacebookDarkMode} alt='icon' />
                    <img src={Icons.TwitterDarkMode} alt='icon' />
                    <img src={Icons.InstagramDarkMode} alt='icon' />
                  </>
                )}
              </div>
            </div>
            <div className='footer-contact-navbar flex'>
              <div>Help</div>
              <div>
                English(US)
                <img
                  style={{ marginLeft: '8px' }}
                  src={
                    theme === 'light' ? Icons.DownIcon : Icons.DownDarkModeIcon
                  }
                  alt='icon'
                />
              </div>
              <div>Q&A</div>
              <div>Privacy</div>
            </div>
          </div>
        </Col>
        <Col xl={2} />
      </Row>
    </div>
  );
}

export default App;

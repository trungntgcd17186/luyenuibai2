import { Col, Input, Row } from 'antd';
import { useState } from 'react';
import ArrowIcon from '../../assets/images/ArrowIcon.svg';
import ArrowInputIcon from '../../assets/images/ArrowInputIcon.svg';
import Banner1 from '../../assets/images/Banner1.svg';
import Banner2Image from '../../assets/images/Banner2Image.svg';
import DownIcon from '../../assets/images/DownIcon.svg';
import Facebook from '../../assets/images/Facebook.svg';
import GameSellerIcon1 from '../../assets/images/GameSellerIcon1.svg';
import GameSellerIcon2 from '../../assets/images/GameSellerIcon2.svg';
import GameSellerIcon3 from '../../assets/images/GameSellerIcon3.svg';
import GameSellerIcon4 from '../../assets/images/GameSellerIcon4.svg';
import Gear1Icon from '../../assets/images/Gear1Icon.svg';
import Gear2Icon from '../../assets/images/Gear2Icon.svg';
import Gear3Icon from '../../assets/images/Gear3Icon.svg';
import Instagram from '../../assets/images/Instagram.svg';
import LeftArrowBanner from '../../assets/images/LeftArrowBanner.svg';
import LineIcon from '../../assets/images/LineIcon.svg';
import Logo from '../../assets/images/Logo.svg';
import LogoFooter from '../../assets/images/LogoFooter.svg';
import MenuIcon from '../../assets/images/MenuIcon.svg';
import MoreDetailsIcon from '../../assets/images/MoreDetailsIcon.svg';
import StarReview from '../../assets/images/StarReview.svg';
import Twitter from '../../assets/images/Twitter.svg';
import { gameSeller, product } from '../../constant/index';

function DarkMode({ darkMode, handleSwitchTheme }) {
  const handleRenderProduct = () => {
    return product.map((item, index) =>
      index === 3 ? (
        <div
          key={index}
          className='featured-gears-wrapper'
          style={{ width: '18.3%' }}
        >
          <div
            className='featured-gears-item'
            style={{ width: '100%', paddingRight: 0 }}
          >
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
              Watch as a living, breathing game world comes alive all around you
            </div>

            <div className='flex' style={{ marginTop: '24px' }}>
              <img src={Gear1Icon} alt='icon' />
              <div className='about-product-infor'>
                1st Prize Education Supporter
              </div>
            </div>

            <div className='flex' style={{ marginTop: '12px' }}>
              <img src={Gear2Icon} alt='icon' />
              <div className='about-product-infor'>2 years warranty</div>
            </div>

            <div className='flex' style={{ marginTop: '12px' }}>
              <img src={Gear3Icon} alt='icon' />
              <div className='about-product-infor'>Enviroment safety</div>
            </div>

            <div className='more-details-btn cursor'>
              See detail
              <img
                style={{ marginLeft: '4px', marginTop: '-2px' }}
                src={MoreDetailsIcon}
                alt='icon'
              />
            </div>
          </div>
          <div className='footer-card'></div>
          <img className={item.classImage} src={item.imgSrc} alt='product' />
        </div>
      ) : (
        <div key={index} className='featured-gears-wrapper'>
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
              Watch as a living, breathing game world comes alive all around you
            </div>

            <div className='flex' style={{ marginTop: '24px' }}>
              <img src={Gear1Icon} alt='icon' />
              <div className='about-product-infor'>
                1st Prize Education Supporter
              </div>
            </div>

            <div className='flex' style={{ marginTop: '12px' }}>
              <img src={Gear2Icon} alt='icon' />
              <div className='about-product-infor'>2 years warranty</div>
            </div>

            <div className='flex' style={{ marginTop: '12px' }}>
              <img src={Gear3Icon} alt='icon' />
              <div className='about-product-infor'>Enviroment safety</div>
            </div>

            <div className='more-details-btn cursor'>
              See detail
              <img
                style={{ marginLeft: '4px', marginTop: '-2px' }}
                src={MoreDetailsIcon}
                alt='icon'
              />
            </div>
          </div>
          <div className='footer-card'></div>
          <img className={item.classImage} src={item.imgSrc} alt='product' />
        </div>
      )
    );
  };

  const handleRenderGameSeller = () => {
    return (
      <div className='game-seller-container'>
        {gameSeller.map((item, index) =>
          index === 3 ? (
            <div style={{ width: '18%' }}>
              <div
                key={index}
                className='game-seller-card'
                style={{ width: '100%' }}
              >
                <img
                  className='game-seller-image'
                  height={180}
                  src={item.imgSrc}
                  alt='card-game'
                />
                <div className='game-seller-content-container'>
                  <div className='game-seller-content-left'>
                    <div className='game-seller-name'>{item.name}</div>
                    <div className='game-seller-hastag'>{item.hastag}</div>
                    <div className='game-seller-star-feedbacks flex'>
                      <img src={StarReview} alt='icon' />
                      <div style={{ marginLeft: '12px' }}>{item.rating}</div>
                    </div>
                    <div className='game-seller-content'>{item.content}</div>
                  </div>
                  <div className='game-seller-content-right'>
                    <img src={GameSellerIcon1} alt='icon' />
                    <img src={GameSellerIcon2} alt='icon' />
                    <img src={GameSellerIcon3} alt='icon' />
                    <img src={GameSellerIcon4} alt='icon' />
                  </div>
                </div>
                <div className='game-seller-card-footer'>{item.price}</div>
              </div>
            </div>
          ) : (
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
                    <img src={StarReview} alt='icon' />
                    <div style={{ marginLeft: '12px' }}>{item.rating}</div>
                  </div>
                  <div className='game-seller-content'>{item.content}</div>
                </div>
                <div className='game-seller-content-right'>
                  <img src={GameSellerIcon1} alt='icon' />
                  <img src={GameSellerIcon2} alt='icon' />
                  <img src={GameSellerIcon3} alt='icon' />
                  <img src={GameSellerIcon4} alt='icon' />
                </div>
              </div>
              <div className='game-seller-card-footer'>{item.price}</div>
            </div>
          )
        )}
      </div>
    );
  };
  return (
    <>
      {darkMode ? (
        <div className='darkModeBackground'>
          <Row style={{ paddingTop: '64px', paddingBottom: '80px' }}>
            <Col xl={2} />
            <Col xl={4}>
              <img src={Logo} alt='icon' />
            </Col>
            <Col xl={5} />
            <Col
              xl={9}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div className='nav-item cursor'>
                Product
                <img style={{ marginLeft: '8px' }} src={DownIcon} alt='icon' />
              </div>
              <div className='nav-item cursor'>App & Game</div>
              <div className='nav-item cursor'>Support</div>
            </Col>
            <Col xl={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <img className='cursor' src={MenuIcon} alt='icon' />
            </Col>
            <Col xl={2} />
          </Row>
          <Row>
            <Col xl={24} style={{ position: 'relative' }}>
              <img style={{ width: '100%' }} src={Banner1} alt='banner' />
              <div className='banner-btn cursor' onClick={handleSwitchTheme}>
                LEAN MORE
                <img
                  style={{ marginLeft: '24px' }}
                  src={ArrowIcon}
                  alt='icon'
                />
              </div>
            </Col>
          </Row>
          <Row style={{ paddingTop: '56px' }}>
            <Col xl={2} />
            <Col xl={22}>
              <div className='name-category-product'>Featured Gears</div>
              <div className='featured-gears-container'>
                {handleRenderProduct()}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={24}>
              {/* Section 2 */}
              <div className='banner2-container'>
                <img className='banner2-image' src={Banner2Image} alt='icon' />
                <img
                  className='banner2-btn cursor'
                  src={LeftArrowBanner}
                  alt='icon'
                />

                <div className='banner2-wrapper'>
                  <div className='banner2-content'>
                    <div className='flex'>
                      <div className='content-left-container'>
                        <div className='bring-content-banner2'>BRING</div>
                        <div className='real-content-banner2'>REAL WORLD</div>
                      </div>
                      <img src={LineIcon} alt='icon' />
                      <div className='content-right-container'>
                        <div className='visual-content-banner2'>
                          VISUAL VALUES
                        </div>
                        <div className='to-content-banner2'>TO</div>
                      </div>
                    </div>
                    <div className='banner-paragrahp'>
                      <p>
                        Stay focused on the fight or lost in meditation with
                        built-in speakers that deliver cinematic 3D positional
                        audio. Watch as a living, breathing game world comes
                        alive all around you.
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
              {handleRenderGameSeller()}
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
                      <Input placeholder='Enter your location' />
                      <img src={ArrowInputIcon} alt='icon' />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: '75px', borderTop: '4px solid #74B4C8' }}>
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
                <img src={LogoFooter} alt='logo-footer' />
                <div className='footer-title'>
                  VRGEAR AND <br /> APP GAME BUSINESS
                </div>
                <div className='footer-description'>Powered by Google</div>
              </div>
              <div className='footer-contact'>
                <div className='footer-contact-social-container'>
                  <div className='footer-contact-social-wrapper'>
                    <img src={Facebook} alt='icon' />
                    <img src={Twitter} alt='icon' />
                    <img src={Instagram} alt='icon' />
                  </div>
                </div>
                <div className='footer-contact-navbar flex'>
                  <div>Help</div>
                  <div>
                    English(US) <img src={DownIcon} alt='icon' />
                  </div>
                  <div>Q&A</div>
                  <div>Privacy</div>
                </div>
              </div>
            </Col>
            <Col xl={2} />
          </Row>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default DarkMode;

import './App.css';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import Logo from './assets/images/Logo.svg';
import DownIcon from './assets/images/DownIcon.svg';
import MenuIcon from './assets/images/MenuIcon.svg';
import Banner1 from './assets/images/Banner1.svg';
import ArrowIcon from './assets/images/ArrowIcon.svg';
import FeaturedGear1 from './assets/images/FeaturedGear1.svg';
import FeaturedGear2 from './assets/images/FeaturedGear2.svg';
import FeaturedGear3 from './assets/images/FeaturedGear3.svg';
import FeaturedGear4 from './assets/images/FeaturedGear4.svg';
import Gear1Icon from './assets/images/Gear1Icon.svg';
import Gear2Icon from './assets/images/Gear2Icon.svg';
import Gear3Icon from './assets/images/Gear3Icon.svg';
import MoreDetailsIcon from './assets/images/MoreDetailsIcon.svg';
import Banner2Image from './assets/images/Banner2Image.svg';
import LineIcon from './assets/images/LineIcon.svg';
import LeftArrowBanner from './assets/images/LeftArrowBanner.svg';
import GameSellerImage1 from './assets/images/GameSellerImage1.svg';
import GameSellerImage2 from './assets/images/GameSellerImage2.svg';
import GameSellerImage3 from './assets/images/GameSellerImage3.svg';
import GameSellerImage4 from './assets/images/GameSellerImage4.svg';
import StarReview from './assets/images/StarReview.svg';
import GameSellerIcon1 from './assets/images/GameSellerIcon1.svg';
import GameSellerIcon2 from './assets/images/GameSellerIcon2.svg';
import GameSellerIcon3 from './assets/images/GameSellerIcon3.svg';
import GameSellerIcon4 from './assets/images/GameSellerIcon4.svg';

function App() {
  const product = [
    {
      name: 'PlayStation',
      description: 'VR GEAR VESION 2',
      bestSeller: true,
      imgSrc: FeaturedGear1,
      classImage: 'featured-product-image',
    },
    {
      name: 'Oculus Quest',
      description: 'THE BEST WORLD GEAR',
      bestSeller: true,
      imgSrc: FeaturedGear2,
      classImage: 'featured-product-image-2',
    },
    {
      name: 'Samsung Gear',
      description: 'NEW GENERATION',
      bestSeller: false,
      imgSrc: FeaturedGear3,
      classImage: 'featured-product-image-3',
    },
    {
      name: 'Samsung Gear',
      description: 'NEW GENERATION 2',
      bestSeller: false,
      imgSrc: FeaturedGear4,
      classImage: 'featured-product-image-4',
    },
  ];

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
      <div style={{ width: '20%' }}>
        <div className='game-seller-card'>
          <img
            className='game-seller-image'
            src={GameSellerImage1}
            alt='card-game'
          />
          <div className='game-seller-content-container'>
            <div className='game-seller-content-left'>
              <div className='game-seller-name'>Carve Snowboarding</div>
              <div className='game-seller-hastag'>
                #Arcade, #Simulation, #Sports
              </div>
              <div className='game-seller-star-feedbacks flex'>
                <img src={StarReview} alt='icon' />
                <div style={{ marginLeft: '12px' }}>1,428 Ratings</div>
              </div>
              <div className='game-seller-content'>
                The creator of 1080 Snowboarding is back with an all new
                snowboarding experience!{' '}
              </div>
            </div>
            <div className='game-seller-content-right'>
              <img src={GameSellerIcon1} alt='icon' />
              <img src={GameSellerIcon2} alt='icon' />
              <img src={GameSellerIcon3} alt='icon' />
              <img src={GameSellerIcon4} alt='icon' />
            </div>
          </div>
        </div>
        <div className='game-seller-card-footer'>BUY NOW $19.99</div>

        <div className='game-seller-card'>
          <img
            className='game-seller-image'
            src={GameSellerImage1}
            alt='card-game'
          />
          <div className='game-seller-content-container'>
            <div className='game-seller-content-left'>
              <div className='game-seller-name'>Carve Snowboarding</div>
              <div className='game-seller-hastag'>
                #Arcade, #Simulation, #Sports
              </div>
              <div className='game-seller-star-feedbacks flex'>
                <img src={StarReview} alt='icon' />
                <div style={{ marginLeft: '12px' }}>1,428 Ratings</div>
              </div>
              <div className='game-seller-content'>
                The creator of 1080 Snowboarding is back with an all new
                snowboarding experience!{' '}
              </div>
            </div>
            <div className='game-seller-content-right'>
              <img src={GameSellerIcon1} alt='icon' />
              <img src={GameSellerIcon2} alt='icon' />
              <img src={GameSellerIcon3} alt='icon' />
              <img src={GameSellerIcon4} alt='icon' />
            </div>
          </div>
        </div>
        <div className='game-seller-card-footer'>BUY NOW $19.99</div>

        <div className='game-seller-card'>
          <img
            className='game-seller-image'
            src={GameSellerImage1}
            alt='card-game'
          />
          <div className='game-seller-content-container'>
            <div className='game-seller-content-left'>
              <div className='game-seller-name'>Carve Snowboarding</div>
              <div className='game-seller-hastag'>
                #Arcade, #Simulation, #Sports
              </div>
              <div className='game-seller-star-feedbacks flex'>
                <img src={StarReview} alt='icon' />
                <div style={{ marginLeft: '12px' }}>1,428 Ratings</div>
              </div>
              <div className='game-seller-content'>
                The creator of 1080 Snowboarding is back with an all new
                snowboarding experience!{' '}
              </div>
            </div>
            <div className='game-seller-content-right'>
              <img src={GameSellerIcon1} alt='icon' />
              <img src={GameSellerIcon2} alt='icon' />
              <img src={GameSellerIcon3} alt='icon' />
              <img src={GameSellerIcon4} alt='icon' />
            </div>
          </div>
        </div>
        <div className='game-seller-card-footer'>BUY NOW $19.99</div>

        <div className='game-seller-card'>
          <img
            className='game-seller-image'
            src={GameSellerImage1}
            alt='card-game'
          />
          <div className='game-seller-content-container'>
            <div className='game-seller-content-left'>
              <div className='game-seller-name'>Carve Snowboarding</div>
              <div className='game-seller-hastag'>
                #Arcade, #Simulation, #Sports
              </div>
              <div className='game-seller-star-feedbacks flex'>
                <img src={StarReview} alt='icon' />
                <div style={{ marginLeft: '12px' }}>1,428 Ratings</div>
              </div>
              <div className='game-seller-content'>
                The creator of 1080 Snowboarding is back with an all new
                snowboarding experience!{' '}
              </div>
            </div>
            <div className='game-seller-content-right'>
              <img src={GameSellerIcon1} alt='icon' />
              <img src={GameSellerIcon2} alt='icon' />
              <img src={GameSellerIcon3} alt='icon' />
              <img src={GameSellerIcon4} alt='icon' />
            </div>
          </div>
        </div>
        <div className='game-seller-card-footer'>BUY NOW $19.99</div>
      </div>
    );
  };
  return (
    <div className='App'>
      <Row style={{ paddingTop: '64px', paddingBottom: '80px' }}>
        <Col xl={2} />
        <Col xl={4}>
          <img src={Logo} alt='icon' />
        </Col>
        <Col xl={5} />
        <Col
          xl={8}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div className='nav-item cursor'>
            Product
            <img style={{ marginLeft: '8px' }} src={DownIcon} alt='icon' />
          </div>
          <div className='nav-item cursor'>App & Game</div>
          <div className='nav-item cursor'>Support</div>
        </Col>
        <Col xl={5}>
          <img className='cursor' src={MenuIcon} alt='icon' />
        </Col>
      </Row>
      <Row>
        <Col xl={24} style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src={Banner1} alt='banner' />
          <div className='banner-btn cursor'>
            LEAN MORE
            <img style={{ marginLeft: '24px' }} src={ArrowIcon} alt='icon' />
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
          <div className='featured-gears-container'>
            {handleRenderGameSeller()}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;

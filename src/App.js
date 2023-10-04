// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import classes from './sass/main.module.scss';
// import user2 from './img/user-2.jpg';
import sprite from './img/sprite.svg';
import storyimg from './img/story-1.jpeg';
import storyimg2 from './img/story-2.jpeg';
import house1 from './img/house-1.jpeg';
import house2 from './img/house-2.jpeg';
import house3 from './img/house-3.jpeg';
import house4 from './img/house-4.jpeg';
import house5 from './img/house-5.jpeg';
import house6 from './img/house-6.jpeg';
import gal1 from './img/gal-1.jpeg';
import gal2 from './img/gal-2.jpeg';
import gal3 from './img/gal-3.jpeg';
import gal4 from './img/gal-4.jpeg';
import gal5 from './img/gal-5.jpeg';
import gal6 from './img/gal-6.jpeg';
import gal7 from './img/gal-7.jpeg';
import gal8 from './img/gal-8.jpeg';
import gal9 from './img/gal-9.jpeg';
import gal10 from './img/gal-10.jpeg';
import gal11 from './img/gal-11.jpeg';
import gal12 from './img/gal-12.jpeg';
import gal13 from './img/gal-13.jpeg';
import gal14 from './img/gal-14.jpeg';
import logo from './img/logo.png';
import seen1 from './img/logo-bbc.png';
import seen2 from './img/logo-forbes.png';
import seen3 from './img/logo-techcrunch.png';
import seen4 from './img/logo-bi.png';
import realtor1 from './img/realtor-1.jpeg';
import realtor2 from './img/realtor-2.jpeg';
import realtor3 from './img/realtor-3.jpeg';

// import { faHeart, faWindowRestore } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <Fragment>
      <div className={classes['container']}>
        <div className={classes['sidebar']}>
          <button className={classes['nav__button']}></button>
        </div>
        <header className={classes['header']}>
          <img
            src={logo}
            alt='header logo'
            className={classes['header__logo']}
          />
          <h3 className={classes['heading-3']}>Your own home:</h3>
          <h1 className={classes['heading-1']}>
            The ultimate personel freedom
          </h1>
          <button className={`${classes['btn']} ${classes['header__btn']} `}>
            View our properties
          </button>
          <div className={classes['header__seenon-text']}>Seen on</div>
          <div className={classes['header__seenon-logos']}>
            <img src={seen1} alt='Seen logo 1' />
            <img src={seen2} alt='Seen logo 2' />
            <img src={seen3} alt='Seen logo 3' />
            <img src={seen4} alt='Seen logo 4' />
          </div>
        </header>
        <div className={classes['realtors']}>
          <h3 className={classes['heading-3']}>Top 3 realtors</h3>
          <div className={classes['realtors__list']}>
            <img
              src={realtor1}
              alt='realtors1'
              className={classes['realtors__image']}
            />
            <div className={classes['realtors__detail']}>
              <h4
                className={`${classes['heading-4']} ${classes['heading-4--light']}`}
              >
                Erik Feinmann
              </h4>
              <p className={classes['realtors__sold']}>245 houses sold</p>
            </div>

            <img
              src={realtor2}
              alt='realtors2'
              className={classes['realtors__image']}
            />
            <div className={classes['realtors__detail']}>
              <h4
                className={`${classes['heading-4']} ${classes['heading-4--light']}`}
              >
                Kim Brown
              </h4>
              <p className={classes['realtors__sold']}>212 houses sold</p>
            </div>

            <img
              src={realtor3}
              alt='realtors3'
              className={classes['realtors__image']}
            />
            <div className={classes['realtors__detail']}>
              <h4
                className={`${classes['heading-4']} ${classes['heading-4--light']}`}
              >
                Toby Ramsey
              </h4>
              <p className={classes['realtors__sold']}>198 houses sold</p>
            </div>
          </div>
        </div>
        <section className={classes['features']}>
          <div className={classes['feature']}>
            <svg className={classes['feature__icon']}>
              <use href={`${sprite}#icon-global`}></use>
            </svg>
            <h4
              className={`${classes['heading-4']} ${classes['heading-4--dark']}`}
            >
              World's best luxury homes
            </h4>
            <p className={classes['feature__text']}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>

          <div className={classes['feature']}>
            <svg className={classes['feature__icon']}>
              <use href={`${sprite}#icon-trophy`}></use>
            </svg>
            <h4
              className={`${classes['heading-4']} ${classes['heading-4--dark']}`}
            >
              Only the best properties
            </h4>
            <p className={classes['feature__text']}>
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
              rerum sed a eligendi aut quia.
            </p>
          </div>

          <div className={classes['feature']}>
            <svg className={classes['feature__icon']}>
              <use href={`${sprite}#icon-map-pin`}></use>
            </svg>
            <h4
              className={`${classes['heading-4']} ${classes['heading-4--dark']}`}
            >
              All homes in top location
            </h4>
            <p className={classes['feature__text']}>
              Tenetur distinctio necessitatibus pariatur voluptatibus quidem
              consequatur harum.
            </p>
          </div>

          <div className={classes['feature']}>
            <svg className={classes['feature__icon']}>
              <use href={`${sprite}#icon-key`}></use>
            </svg>
            <h4
              className={`${classes['heading-4']} ${classes['heading-4--dark']}`}
            >
              New home in one week
            </h4>
            <p className={classes['feature__text']}>
              Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className={classes['feature']}>
            <svg className={classes['feature__icon']}>
              <use href={`${sprite}#icon-presentation`}></use>
            </svg>
            <h4
              className={`${classes['heading-4']} ${classes['heading-4--dark']}`}
            >
              Top 1% realtors
            </h4>
            <p className={classes['feature__text']}>
              Quidem consequatur harum, voluptatum mollitia quae. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>

          <div className={classes['feature']}>
            <svg className={classes['feature__icon']}>
              <use href={`${sprite}#icon-lock`}></use>
            </svg>
            <h4
              className={`${classes['heading-4']} ${classes['heading-4--dark']}`}
            >
              Secure payments on nexter
            </h4>
            <p className={classes['feature__text']}>
              Pariatur voluptatibus quidem consequatur harum, voluptatum
              mollitia quae.
            </p>
          </div>
        </section>
        <div className={classes['story__pictures']}>
          <img
            src={storyimg}
            alt='Couple with new house'
            className={classes['story__img--1']}
          />
          <img
            src={storyimg2}
            alt='new house'
            className={classes['story__img--2']}
          />
        </div>

        <div className={classes['story__content']}>
          <h3 className={`${classes['heading-3']} ${classes['mb-sm']}`}>
            Happy Customers
          </h3>
          <h2
            className={`${classes['heading-2']} ${classes['heading-2--dark']} ${classes['mb-md']}`}
          >
            &ldquo;The best decision of our lifes&rdquo;
          </h2>

          <p className={`${classes['story__text']} ${classes['mb-lg']}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
            harum volupta!
          </p>
          <button className={classes['btn']}>Find your own home</button>
        </div>

        {/*Homes*/}
        <section className={classes['homes']}>
          <div className={classes['home']}>
            <img
              src={house1}
              alt='homeimage'
              className={classes['home__img']}
            />
            <svg className={classes['home__like']}>
              <use href={`${sprite}#icon-heart-full`}></use>
            </svg>
            <h5 className={classes['home__name']}>Beautiful Family House</h5>

            <div className={classes['home__location']}>
              <svg>
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <p>USA</p>
            </div>

            <div className={classes['home__rooms']}>
              <svg>
                <use href={`${sprite}#icon-profile-male`}></use>
              </svg>
              <p>5 rooms</p>
            </div>

            <div className={classes['home__area']}>
              <svg>
                <use href={`${sprite}#icon-expand`}></use>
              </svg>
              <p>
                325m<sup>2</sup>
              </p>
            </div>

            <div className={classes['home__price']}>
              <svg>
                <use href={`${sprite}#icon-key`}></use>
              </svg>
              <p>$1,200,000</p>
            </div>

            <button className={`${classes['btn']} ${classes['home__button']}`}>
              Contact Realtor
            </button>
          </div>

          <div className={classes['home']}>
            <img
              src={house2}
              alt='homeimage'
              className={classes['home__img']}
            />
            <svg className={classes['home__like']}>
              <use href={`${sprite}#icon-heart-full`}></use>
            </svg>
            <h5 className={classes['home__name']}>Modern Glass Villa</h5>

            <div className={classes['home__location']}>
              <svg>
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <p>Canada</p>
            </div>

            <div className={classes['home__rooms']}>
              <svg>
                <use href={`${sprite}#icon-profile-male`}></use>
              </svg>
              <p>6 rooms</p>
            </div>

            <div className={classes['home__area']}>
              <svg>
                <use href={`${sprite}#icon-expand`}></use>
              </svg>
              <p>
                450 m<sup>2</sup>
              </p>
            </div>

            <div className={classes['home__price']}>
              <svg>
                <use href={`${sprite}#icon-key`}></use>
              </svg>
              <p>$2,200,000</p>
            </div>

            <button className={`${classes['btn']} ${classes['home__button']}`}>
              Contact Realtor
            </button>
          </div>

          <div className={classes['home']}>
            <img
              src={house3}
              alt='homeimage'
              className={classes['home__img']}
            />
            <svg className={classes['home__like']}>
              <use href={`${sprite}#icon-heart-full`}></use>
            </svg>
            <h5 className={classes['home__name']}>Cozy Country House</h5>

            <div className={classes['home__location']}>
              <svg>
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <p>UK</p>
            </div>

            <div className={classes['home__rooms']}>
              <svg>
                <use href={`${sprite}#icon-profile-male`}></use>
              </svg>
              <p>4 rooms</p>
            </div>

            <div className={classes['home__area']}>
              <svg>
                <use href={`${sprite}#icon-expand`}></use>
              </svg>
              <p>
                325m<sup>2</sup>
              </p>
            </div>

            <div className={classes['home__price']}>
              <svg>
                <use href={`${sprite}#icon-key`}></use>
              </svg>
              <p>$800,000</p>
            </div>

            <button className={`${classes['btn']} ${classes['home__button']}`}>
              Contact Realtor
            </button>
          </div>

          <div className={classes['home']}>
            <img
              src={house4}
              alt='homeimage'
              className={classes['home__img']}
            />
            <svg className={classes['home__like']}>
              <use href={`${sprite}#icon-heart-full`}></use>
            </svg>
            <h5 className={classes['home__name']}>Large Rustical Villa</h5>

            <div className={classes['home__location']}>
              <svg>
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <p>Portugal</p>
            </div>

            <div className={classes['home__rooms']}>
              <svg>
                <use href={`${sprite}#icon-profile-male`}></use>
              </svg>
              <p>6 rooms</p>
            </div>

            <div className={classes['home__area']}>
              <svg>
                <use href={`${sprite}#icon-expand`}></use>
              </svg>
              <p>
                325m<sup>2</sup>
              </p>
            </div>

            <div className={classes['home__price']}>
              <svg>
                <use href={`${sprite}#icon-key`}></use>
              </svg>
              <p>$1,00,000</p>
            </div>

            <button className={`${classes['btn']} ${classes['home__button']}`}>
              Contact Realtor
            </button>
          </div>

          <div className={classes['home']}>
            <img
              src={house5}
              alt='homeimage'
              className={classes['home__img']}
            />
            <svg className={classes['home__like']}>
              <use href={`${sprite}#icon-heart-full`}></use>
            </svg>
            <h5 className={classes['home__name']}>Magestic Palace House</h5>

            <div className={classes['home__location']}>
              <svg>
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <p>Germany</p>
            </div>

            <div className={classes['home__rooms']}>
              <svg>
                <use href={`${sprite}#icon-profile-male`}></use>
              </svg>
              <p>5 rooms</p>
            </div>

            <div className={classes['home__area']}>
              <svg>
                <use href={`${sprite}#icon-expand`}></use>
              </svg>
              <p>
                325m<sup>2</sup>
              </p>
            </div>

            <div className={classes['home__price']}>
              <svg>
                <use href={`${sprite}#icon-key`}></use>
              </svg>
              <p>$1,200,000</p>
            </div>

            <button className={`${classes['btn']} ${classes['home__button']}`}>
              Contact Realtor
            </button>
          </div>

          <div className={classes['home']}>
            <img
              src={house6}
              alt='homeimage'
              className={classes['home__img']}
            />
            <svg className={classes['home__like']}>
              <use href={`${sprite}#icon-heart-full`}></use>
            </svg>
            <h5 className={classes['home__name']}>Modern Family Apartment</h5>

            <div className={classes['home__location']}>
              <svg>
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <p>Italy</p>
            </div>

            <div className={classes['home__rooms']}>
              <svg>
                <use href={`${sprite}#icon-profile-male`}></use>
              </svg>
              <p>4 rooms</p>
            </div>

            <div className={classes['home__area']}>
              <svg>
                <use href={`${sprite}#icon-expand`}></use>
              </svg>
              <p>
                325m<sup>2</sup>
              </p>
            </div>

            <div className={classes['home__price']}>
              <svg>
                <use href={`${sprite}#icon-key`}></use>
              </svg>
              <p>$1,200,000</p>
            </div>

            <button className={`${classes['btn']} ${classes['home__button']}`}>
              Contact Realtor
            </button>
          </div>
        </section>
        <section className={classes['gallery']}>
          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--1']}`}
          >
            <img src={gal1} alt='gal1' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>
          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--2']}`}
          >
            <img src={gal2} alt='gal2' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>
          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--3']}`}
          >
            <img src={gal3} alt='gal3' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>
          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--4']}`}
          >
            <img src={gal4} alt='gal4' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>
          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--5']}`}
          >
            <img src={gal5} alt='gal5' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>
          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--6']}`}
          >
            <img src={gal6} alt='gal6' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>

          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--7']}`}
          >
            <img src={gal7} alt='gal7' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>

          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--8']}`}
          >
            <img src={gal8} alt='gal8' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>

          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--9']}`}
          >
            <img src={gal9} alt='gal9' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>

          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--10']}`}
          >
            <img src={gal10} alt='gal10' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>

          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--11']}`}
          >
            <img src={gal11} alt='gal11' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>

          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--12']}`}
          >
            <img src={gal12} alt='gal12' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>

          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--13']}`}
          >
            <img src={gal13} alt='gal13' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>

          <figure
            className={`${classes['gallery__item']} ${classes['gallery__item--14']}`}
          >
            <img src={gal14} alt='gal14' className={classes['gallery__img']} />
            {/*bunu figure un icine ona gore qoyduqki cellden cole dasirdi 100% width versekde ona gore figurein icine yerlesirdik ve dasmayacaq(object fit-coverin ise yaramasi ucun width ve height 2side verilmelidi) */}
          </figure>
        </section>
        <footer className={classes['footer']}>
          <ul className={classes['nav']}>
            <li className={classes['nav__item']}>
              <a href='#top' className={classes['nav__link']}>
                Find your dream home
              </a>
            </li>
            <li className={classes['nav__item']}>
              <a href='#top' className={classes['nav__link']}>
                request proposal
              </a>
            </li>
            <li className={classes['nav__item']}>
              <a href='#top' className={classes['nav__link']}>
                download home planner
              </a>
            </li>
            <li className={classes['nav__item']}>
              <a href='#top' className={classes['nav__link']}>
                Contact Us
              </a>
            </li>
            <li className={classes['nav__item']}>
              <a href='#top' className={classes['nav__link']}>
                Submit your property
              </a>
            </li>
            <li className={classes['nav__item']}>
              <a href='#top' className={classes['nav__link']}>
                Come work with us
              </a>
            </li>
          </ul>
          <p className={classes['copyright']}>
            &copy; Copyright 2017 by Jonas Schemdtmann.Feel free to use this
            project for your own purposes.This does not apply if you plan to
            produce your own course or tutorials based on this project.
          </p>
        </footer>
      </div>
    </Fragment>
  );
}

export default App;

import classes from './Clouds.module.css';
import Parallax, { Layer } from 'react-parallax-scroll';

const Clouds = ({ children }) => {
  return (
    <Parallax style={{ width: 0, height: 0 }}>
      <Layer
        className={classes.cloud1}
        style={{ right: '440px', top: '180px' }}
        settings={{ speed: -0.1, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud2}
        style={{ right: '720px', top: '150px' }}
        settings={{ speed: -0.4, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud3}
        style={{ right: '1550px', top: '200px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud4}
        style={{ right: '1310px', top: '180px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud5}
        style={{ right: '120px', top: '350px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud6}
        style={{ right: '450px', top: '450px' }}
        settings={{ speed: -0.4, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud2}
        style={{ right: '1220px', top: '550px' }}
        settings={{ speed: -0.4, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud1}
        style={{ right: '1540px', top: '580px' }}
        settings={{ speed: -0.1, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      {/* ----------------------- */}
      <Layer
        className={classes.cloud1}
        style={{ right: '440px', top: '890px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud2}
        style={{ right: '120px', top: '920px' }}
        settings={{ speed: -0.4, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud3}
        style={{ right: '1350px', top: '980px' }}
        settings={{ speed: -0.1, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud4}
        style={{ right: '1810px', top: '1020px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud5}
        style={{ right: '10px', top: '1150px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud6}
        style={{ right: '1150px', top: '1250px' }}
        settings={{ speed: -0.4, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      {/* ------------------------- */}

      <Layer
        className={classes.cloud1}
        style={{ right: '250px', top: '1290px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud2}
        style={{ right: '1920px', top: '1120px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud3}
        style={{ right: '1700px', top: '1280px' }}
        settings={{ speed: -0.1, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud4}
        style={{ right: '1010px', top: '1420px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud5}
        style={{ right: '70px', top: '1390px' }}
        settings={{ speed: -0.3, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud6}
        style={{ right: '550px', top: '1480px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud1}
        style={{ right: '340px', top: '1790px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud2}
        style={{ right: '1620px', top: '1720px' }}
        settings={{ speed: -0.2, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      <Layer
        className={classes.cloud3}
        style={{ right: '900px', top: '1880px' }}
        settings={{ speed: -0.1, type: ['translateY'] }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            fill="#fff"
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
          />
        </svg>
      </Layer>
      {children}
    </Parallax>
  );
};

export default Clouds;

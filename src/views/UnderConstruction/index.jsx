// import core & vendor packages
import { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';

// import components below
import LoadingScreen from '../../components/LoadingScreen';
import SocialMedia from './SocialMedia';

// import css/sass below
import './style.scss';

// main component
const UnderConstruction = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 2000);

  return (
    <Fragment>
      <Helmet>
        <title>Almer Tampus</title>
      </Helmet>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <div className='under-construction'>
          <div className='under-construction__content'>
            <header className='under-construction__header'>
              <h2>Hello, I&#39;m Almer</h2>
            </header>
            <section className='under-construction__body'>
              <p className='mt-4'>
                I&#39;m still in the process of rebuilding my personal website 🚧. I will be
                deploying it soon. Thanks for checking up!
              </p>
            </section>
            <footer className='under-construction__footer'>
              <p>For the mean time, you can follow me on</p>
              <SocialMedia />
            </footer>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default UnderConstruction;

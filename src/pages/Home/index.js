import { useEffect, useState } from 'react';
import { Loader, LoaderWrapper } from '../../components/Loader';
import axios from 'axios';
import './home.css';
import Sample from './Sample';

const getImage = () => axios.get('https://randomfox.ca/floof/');
const getText = () => axios.get('https://meowfacts.herokuapp.com/');

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [text, setText] = useState('');

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const [image, text] = await Promise.all([getImage(), getText()]);

      // NOTE: timeout to show animation
      setTimeout(() => {
        setImgUrl(image.data.image);
        setText(text.data.data[0])
        setIsLoading(false);
      }, 3000)

    })();
  }, []);

  return (
    <div className='container'>
      {/* Loader - For individual separate loading indicators */}
      <div>
        {isLoading ? <Loader width={400} height={400} /> : <img width={400} height={400} alt='fox' src={imgUrl} />}
      </div>
      <div>
        {isLoading ? <Loader width={800} height={40} /> : <p>{text}</p>}
      </div>

      {/* LoaderWrapper - Wrapper to show Loader in place of all children while "animate" is true */}
      <LoaderWrapper animate={isLoading}>
        <div
          style={{ width: 400, height: 400 }}><img width={400} height={400} alt='fox' src={imgUrl} /></div>
        <div style={{ width: 'auto', minHeight: 40 }}>
          <Sample text={text} />
        </div>
      </LoaderWrapper>
    </div>
  )
}

export default Home;
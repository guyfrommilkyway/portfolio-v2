// import assets below
import './style.scss';
import github from '../../../assets/icons/github.png';
import linkedin from '../../../assets/icons/linkedin.png';
import pinterest from '../../../assets/icons/pinterest.png';

// main component
const SocialMedia = () => {
  return (
    <div className='social-media'>
      <a href='https://github.com/guyfrommilkyway' target='_blank' rel='noreferrer'>
        <img className='icons' src={github} alt='github' />
      </a>
      <a href='https://linkedin.com/in/almerflorestampus' target='_blank' rel='noreferrer'>
        <img className='icons' src={linkedin} alt='linkedin' />
      </a>
      <a href='https://www.pinterest.ph/guyfrommilkyway' target='_blank' rel='noreferrer'>
        <img className='icons' src={pinterest} alt='linkedin' />
      </a>
      <a href='https://www.flaticon.com/free-icons/github' title='github icons'>
        Github icons created by riajulislam - Flaticon
      </a>
    </div>
  );
};

export default SocialMedia;

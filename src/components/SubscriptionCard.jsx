import mainImg from '../images/illustration-hero.svg'
import SubscriptionRate from './SubscriptionRate';
import Button from './Button';

const SubscriptionCard = () => {
  return (
    <article className='bg-white rounded-lg w-90 md:w-96 space-y-6'>
      {/* Image */}
      <div className='w-fit rounded-t-lg overflow-hidden'>
        <img src={mainImg} alt="music-image" />
      </div>
      {/* Details */}
      <div className='text-center space-y-4'>
        <h1 className='font-bold text-darkBlue md:text-xl md:font-extrabold'>Order Summary</h1>
        <p className='text-unsaturatedBlue font-light text-sm max-w-[15rem] md:max-w-[17rem] mx-auto md:font-medium'>
          You can now listen to millions of songs, audiobooks, and podcasts on any 
          device anywhere you like!
        </p>
      </div>
      <SubscriptionRate />
      <Button />
      <div className='text-center cursor-pointer pb-4'>Cancel Order</div>
    </article>
  )
}

export default SubscriptionCard;
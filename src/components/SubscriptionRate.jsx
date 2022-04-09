import musicIcon from '../images/icon-music.svg';

const SubscriptionRate = () => {
  return (
    <div className='flex justify-between items-center bg-veryPaleBlue w-11/12 rounded-lg p-3 mx-auto'>
      <div className='flex space-x-3 justify-between'>
        {/* images */}
        <div className=''>
          <img src={musicIcon} alt="music-icon" />
        </div>
        <div>
          <h1>Annual Plan</h1>
          <h2>$59.99/year</h2>
        </div>
      </div>
      <div className='underline decoration-brightBlue cursor-pointer hover:no-underline hover:opacity-80'>
        <span className='text-brightBlue'>Change</span>
      </div>
    </div>
  )
}

export default SubscriptionRate
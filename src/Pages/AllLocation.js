import '../Pages/properties.css';
import Properties from '../Pages/Properties'
import Abuja from './Property/Abuja';
import Portharcourt from './Property/Portharcourt';
import Ibadan from './Ibadan';

const AllLocation = () => {

  
      const PropertyL = [
        {
          id: 1,
          url: 'https://plus.unsplash.com/premium_photo-1661877360520-f70603f7c0d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww',
          alt: 'Slide 1',
          title: 'Los Angeles CA',
          price: '$145,000',
          details: '4 Bed . 2 Baths',
          area: 'Los Angeles CA'
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww',
          alt: 'Slide 2',
          title: 'Los Angeles CA',
          price: '$145,000',
          details: '4 Bed . 2 Baths',
          area: 'Los Angeles CA'
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww  ',
          alt: 'Slide 3',
          title: 'Los Angeles CA',
          price: '$145,000',
          details: '4 Bed . 2 Baths',
          area: 'Los Angeles CA'
        },
        {
            id: 1,
            url: 'https://plus.unsplash.com/premium_photo-1661877360520-f70603f7c0d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww',
            alt: 'Slide 1',
            title: '',
            title: 'Los Angeles CA',
            price: '$145,000',
            details: '4 Bed . 2 Baths',
            area: 'Los Angeles CA'
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww',
            alt: 'Slide 2',
            title: 'Los Angeles CA',
            price: '$145,000',
            details: '4 Bed . 2 Baths',
            area: 'Los Angeles CA'
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww  ',
            alt: 'Slide 3',
            title: 'Los Angeles CA',
            price: '$145,000',
            details: '4 Bed . 2 Baths',
            area: 'Los Angeles CA'
          },
      ];

   

      const customSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      };
      
  return (
    <>
    
  <div>
    <div className="ppt_background">

      <div className="bg_transparent">
        <h1>Find a home in a neighborhood you love.</h1>
        <input type="text" placeholder='Place, Neighborhood' />

      </div>
    </div>

    <div className="blocks_wrap">

      <div className="contents">
      <h2>Trusted By 100 Million Buyers</h2>
      <p>Only Horizon.com connects you directly to the person that knows the most about a property for sale, the listing agent.</p>
      </div>

      <div className="blocks">

        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>
    </div>

    <div className='fw-bold my-5 mini_wrap' >
      <p className='city'>Open Houses in Lagos</p>
    <Properties PropertyL={PropertyL} settings={customSettings} />
    </div>

    <div className=' fw-bold mini_wrap'>
    <p className='city'>Open Houses in Abuja</p>
    <Abuja/>
    </div>
    
    <div className=" fw-bold mini_wrap">
    <p className='city'>Open Houses in Port Harcourt</p>
      <Portharcourt/>
    </div>

    <div className=" fw-bold mini_wrap">
    <p className='city'>Open Houses in Ibadan</p>
      <Ibadan/>
    </div>

    </div>
        
    </>
  )
}

export default AllLocation
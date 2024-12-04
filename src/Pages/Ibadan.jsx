import React from 'react'
import Properties from './Properties'

const Ibadan = () => {

    const PropertyInIbadan = [
        {
          id: 1,
          url: 'https://plus.unsplash.com/premium_photo-1661877360520-f70603f7c0d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww',
          alt: 'Slide 1',
          title: 'Los Angeles CA',
          price: '$145,000',
          details: '4 Bed . 4 Baths',
          area: 'Los Angeles CA'
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww',
          alt: 'Slide 2',
          title: 'Los Angeles CA',
          price: '$145,000',
          details: '4 Bed . 5 Baths',
          area: 'Los Angeles CA'
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww  ',
          alt: 'Slide 3',
          title: 'Los Angeles CA',
          price: '$145,000',
          details: '10 Bed . 2 Baths',
          area: 'Los Angeles CA'
        },
        {
            id: 1,
            url: 'https://plus.unsplash.com/premium_photo-1661877360520-f70603f7c0d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww',
            alt: 'Slide 1',
            title: '',
            title: 'Los Angeles CA',
            price: '$145,000',
            details: '12 Bed . 2 Baths',
            area: 'Los Angeles CA'
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww',
            alt: 'Slide 2',
            title: 'Los Angeles CA',
            price: '$145,000',
            details: '8 Bed . 2 Baths',
            area: 'Los Angeles CA'
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGltYWdlfGVufDB8fDB8fHww  ',
            alt: 'Slide 3',
            title: 'Los Angeles CA',
            price: '$145,000',
            details: '7 Bed . 2 Baths',
            area: 'Los Angeles CA'
          },
      ];
  return (
    <>
        <Properties PropertyL={PropertyInIbadan}/>
    </>
  )
}

export default Ibadan
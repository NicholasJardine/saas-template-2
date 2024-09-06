import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'

import Image from 'next/image';

export const ProductShowcase = () => {
  return <section className=' bg-gradient-to-b from-[#ffffff] to [#D2DCFF] py-24 overflow-x-clip'>
    <div className="container">
      <div className="max-w-[540px] mx-auto">

      
      <div className="flex justify-center">
      <p className='tag'>Boost your productivity</p>
      </div>
    <h2 className='text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5'>A more effective way to track progress</h2>
    <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>This SaaS template combines modern design with functionality, offering a sleek and professional layout to effectively showcase your service’s features and client relationships. </p>
    </div>
    <div className="relative">
    <Image src={productImage} alt='product image' className='mt-10'></Image>
    <Image src={pyramidImage} height={262} width ={262}alt='pyramid image' className='hidden md:block absolute -right-36 -top-32'></Image>
    <Image src={tubeImage} height={248} alt='tube image' className='hidden md:block absolute bottom-24 -left-36'></Image>

    </div>
    </div>

  </section>;
};

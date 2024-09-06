import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'

import Image from 'next/image';

export const ProductShowcase = () => {
  return <section className=' bg-gradient-to-b from-[#ffffff] to [#D2DCFF] py-24 overflow-x-clip'>
    <div className="container">
      <div className="section-heading">

      
      <div className="flex justify-center">
      <p className='tag'>Boost your productivity</p>
      </div>
    <h2 className='section-title mt-5'>A more effective way to track progress</h2>
    <p className='section-description mt-5'>This SaaS template combines modern design with functionality, offering a sleek and professional layout to effectively showcase your service’s features and client relationships. </p>
    </div>
    <div className="relative">
    <Image src={productImage} alt='product image' className='mt-10'></Image>
    <Image src={pyramidImage} height={262} width ={262}alt='pyramid image' className='hidden md:block absolute -right-36 -top-32'></Image>
    <Image src={tubeImage} height={248} alt='tube image' className='hidden md:block absolute bottom-24 -left-36'></Image>

    </div>
    </div>

  </section>;
};

'use client'
import Badge from '@/components/Badge';
import UsersRowList from '@/components/Card/UsersRowList';
import AppDropdown from '@/components/Form/AppDropdown';
import InputForm from '@/components/Form/InputForm';
import Hero1 from '@/components/Heros/Hero1';
import Hero2 from '@/components/Heros/Hero2';
import Confimation from '@/components/Modal/Confimation';
import ShoppingCart from '@/components/Modal/ShoppingCart';
import PostsCardList from '@/components/PostsCardList';

import ProductModal from '@/components/Product/ProductModal';
import TableServices from '@/components/TableServices';
import { people, posts, products } from '@/lib/data';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('')
  return (
    <main>
      <ProductModal />
      <Hero2 />
      <Confimation
        isOpen
        title='dkdhdkh'
        handleDone={() => console.log('f')}
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum '
      />
      <ShoppingCart products={products} isOpen />
      <div className='container mx-auto px-6'>
        <div className='flex'>
          <div className='w-[40%]'>
            <AppDropdown persons={people} />
          </div>
          <div className='w-[60%]'>
            <Badge text='sjhjgs' />
            <InputForm
              value={text}
              handleChange={(e) => setText(e.target.value)}
              placeholder='Enter your text'
              name='text'
              title='Text'
            />
            <TableServices />
            <UsersRowList persons={people} />
          </div>
        </div>
        <PostsCardList posts={posts} />

      </div>
    </main>
  )
}

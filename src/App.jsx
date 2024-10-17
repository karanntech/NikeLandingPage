import React from 'react';
import { Hero, CustomerReviews, Services, SpecialOffers, Subscribe, SuperQuality, Footer, PopularProducts } from './sections';

import Nav from "./components/Nav";


const App = () => (
  <main className='relative'>
    <Nav/>
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero/>
    </section>
    <section className='padding'>
      <PopularProducts/>
    </section>
    <section className='padding'>
      <SuperQuality/>
    </section>
    <section className='padding-x py-10'>
      <Services/>
    </section>
    <section className='padding'>
      <SpecialOffers/>
    </section>
    <section className='bg-pale-blue padding'>
      <CustomerReviews/>
    </section>
    <section className='padding-x w-full sm:py-32 py-16'>
      <Subscribe/>
    </section>
    <section className='bg-black padding-x padding-t py-8 text-white'>
      <Footer/>
    </section>
  </main>
)

export default App
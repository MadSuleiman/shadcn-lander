'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

import heroImages from '../content/hero-images.json';
import heroContent from '../content/hero.json';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((previousIndex) =>
        previousIndex === heroImages.images.length - 1 ? 0 : previousIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className='relative h-screen overflow-hidden'>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className='absolute inset-0'
        >
          <Image
            src={heroImages.images[currentImageIndex]?.src || '/default-image.jpg'}
            alt={heroImages.images[currentImageIndex]?.alt || '/default-image.jpg'}
            layout='fill'
            objectFit='cover'
            quality={100}
          />
        </motion.div>
      </AnimatePresence>
      <div className='absolute inset-0 bg-black bg-opacity-50' />
      <div className='relative z-10 flex h-full items-center justify-center'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mx-auto max-w-3xl text-center'
          >
            <h1 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              {heroContent.title}
            </h1>
            <p className='mt-6 text-xl leading-8 text-gray-300'>{heroContent.description}</p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Button size='lg'>{heroContent.cta.primary.text}</Button>
              <Button variant='outline' size='lg'>
                {heroContent.cta.secondary.text}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

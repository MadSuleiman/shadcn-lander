'use client';

import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import carouselContent from '../content/carousel-images.json';

export default function ImageCarouselSection() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mx-auto mb-12 max-w-3xl text-center'
        >
          <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
            {carouselContent.title}
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>{carouselContent.description}</p>
        </motion.div>
        <Carousel
          className='mx-auto max-w-4xl'
          plugins={[
            Autoplay({
              delay: 5000
            })
          ]}
          opts={{
            align: 'start',
            loop: true
          }}
        >
          <CarouselContent>
            {carouselContent.images.map((image, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='flex aspect-video items-center justify-center p-0'>
                    <div className='relative h-full w-full'>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        layout='fill'
                        objectFit='cover'
                        className='rounded-t-lg'
                      />
                      <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white'>
                        <p className='text-center'>{image.caption}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

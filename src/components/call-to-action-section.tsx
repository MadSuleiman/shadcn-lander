import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

import ctaContent from '../content/cta.json';

export default function CallToActionSection() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mx-auto max-w-3xl text-center'
        >
          <h2 className='mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
            {ctaContent.title}
          </h2>
          <p className='mb-8 text-lg text-muted-foreground'>{ctaContent.description}</p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Button size='lg' className='shadow-lg transition-shadow hover:shadow-xl'>
              {ctaContent.cta.primary.text}
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='shadow-md transition-shadow hover:shadow-lg'
            >
              {ctaContent.cta.secondary.text}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

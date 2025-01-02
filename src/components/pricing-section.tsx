import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';

import pricingContent from '../content/pricing.json';

export default function PricingSection() {
  return (
    <section id='pricing' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mx-auto max-w-3xl text-center'
        >
          <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
            {pricingContent.title}
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>{pricingContent.description}</p>
        </motion.div>
        <div className='mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {pricingContent.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='flex flex-col rounded-lg border border-border bg-card p-8 shadow-lg transition-shadow hover:shadow-xl'
            >
              <h3 className='text-2xl font-semibold text-foreground'>{plan.name}</h3>
              <p className='mt-4 text-4xl font-bold tracking-tight text-foreground'>{plan.price}</p>
              <p className='mt-2 text-base text-muted-foreground'>per month</p>
              <ul className='mt-8 flex-grow space-y-4'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-center'>
                    <Check className='h-5 w-5 text-primary' aria-hidden='true' />
                    <span className='ml-3 text-base text-muted-foreground'>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className='mt-8 w-full'>Get Started</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

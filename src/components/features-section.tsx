import { motion } from 'framer-motion';
import { BarChart2, Calendar, CheckCircle, QrCode } from 'lucide-react';

import featuresContent from '../content/features.json';

const iconMap = {
  CheckCircle,
  Calendar,
  QrCode,
  BarChart2
};

export default function FeaturesSection() {
  return (
    <section id='features' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mx-auto max-w-3xl text-center'
        >
          <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
            {featuresContent.title}
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>{featuresContent.description}</p>
        </motion.div>
        <div className='mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
          {featuresContent.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='flex flex-col items-center'
              >
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg'>
                  <Icon className='h-8 w-8 text-primary-foreground' aria-hidden='true' />
                </div>
                <h3 className='mt-6 text-xl font-semibold text-foreground'>{feature.name}</h3>
                <p className='mt-2 text-center text-base text-muted-foreground'>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

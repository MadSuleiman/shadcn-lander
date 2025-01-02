import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import contactContent from '../content/contact.json';

export default function ContactSection() {
  return (
    <section id='contact' className='bg-gradient-to-b from-background to-muted py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mx-auto max-w-3xl text-center'
        >
          <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
            {contactContent.title}
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>{contactContent.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='mx-auto mt-12 max-w-lg'
        >
          <form className='space-y-6 rounded-lg bg-card p-8 shadow-lg'>
            {contactContent.fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className='block text-sm font-medium text-foreground'>
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <Textarea id={field.name} name={field.name} rows={4} required className='mt-1' />
                ) : (
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required
                    className='mt-1'
                  />
                )}
              </div>
            ))}
            <div>
              <Button type='submit' className='w-full'>
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

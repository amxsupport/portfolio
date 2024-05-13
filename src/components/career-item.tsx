import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

import { type CareerProps } from '@/types';
import Link from 'next/link';

export function CareerItem({
  link,
  company,
  title,
  start,
  end,
  description
}: CareerProps) {
  return (
    <>
      <div className='absolute size-3 bg-background rounded-full mt-2 -start-1.5 border border-primary' />
      <time className='text-sm font-mono leading-none text-neutral-800 dark:text-neutral-200'>
        {start} — {end}
      </time>
      <h3 className='text-xl mt-1 font-bold text-neutral-900 dark:text-neutral-100'>
        {company}
      </h3>
      <h4 className='text-lg mt-2 font-medium dark:text-neutral-100 text-neutral-900'>
        {title}
      </h4>
      <p className='mt-1 dark:text-neutral-200 text-neutral-800 text-pretty font-mono'>
        {description}
      </p>

      {link && (
        <Button
          variant='default'
          size='default'
          className='shadow mt-4 px-2 hover:scale-105 transition-transform duration-300 ease-in-out'
        >
          <Link
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <p className='font-medium'>View more</p>
            <ArrowRightIcon className='size-4 ms-2' />
          </Link>
        </Button>
      )}
    </>
  )
}
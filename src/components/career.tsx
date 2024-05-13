import { CareerItem } from '@/components/career-item';
import { LaptopIcon } from 'lucide-react';

import { data } from '@/constants';

export function Career() {
  const { career } = data;

  return (
    <>
      <h2 className='flex gap-x-4 items-center text-3xl font-bold text-balance'>
        <LaptopIcon className='size-6' /> Career
      </h2>

      <ol className='relative border-s dark:border-neutral-600 border-neutral-400 ml-[11.5px] flex flex-col gap-8'>
        {Array.isArray(career) && career.map((item, index) => (
          <li key={index} className='ms-7'>
            <CareerItem {...item} />
          </li>
        ))}
      </ol>
    </>
  )
}
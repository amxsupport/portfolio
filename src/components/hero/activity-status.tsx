import type { Data, SuccessfulAPIResponse } from '@/types/lanyard';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { SpotifyIcon } from '@/components/icons/spotify';
import { cn } from '@/lib/utils';
import { statusClasses } from '@/data';

export function ActivityStatus({ data }: SuccessfulAPIResponse<Data>) {
  const t = useTranslations('about-section.activity');
  const { discord_status, listening_to_spotify, spotify } = data;

  // Map each discord status to its corresponding translation
  const statusMessages: {
    [key: string]: string;
  } = {
    offline: t('offline'),
    dnd: t('dnd'),
    idle: t('idle'),
    online: t('online'),
  };

  // If I'm not listening to Spotify or the data is not available
  if (!listening_to_spotify || !spotify) {
    const statusMessage = statusMessages[discord_status];

    if (statusMessage) {
      return (
        <div className='flex flex-row items-center'>
          <p className={cn('font-mono text-sm font-medium', statusClasses[discord_status].text)}>
            {statusMessage}
            <svg
      fill='currentColor'
      height='20'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 16 16'
      width='20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612' />
    </svg>
          </p>
        </div>
      );
    }
  }

  return (
    <div className='relative flex h-full items-center gap-3 overflow-hidden px-2'>
      <div className='flex max-w-md items-center space-x-4 rounded-lg bg-background'>
        <div className='flex items-center justify-center'>
          <Image
            priority
            alt={`${spotify?.song}`}
            className='w-[74px] rounded-md'
            height={74}
            quality={100}
            src={spotify?.album_art_url || '/assets/album-placeholder.webp'}
            width={74}
          />
        </div>
        <div className='flex-1'>
          <div className='flex flex-row items-center justify-between'>
            <p className='text-sm font-bold uppercase text-green-600'>{t('listening')}</p>
            <SpotifyIcon className='ml-5 h-4 w-4' />
          </div>
          <Link
            className='text-sm font-medium hover:underline'
            href={`https://open.spotify.com/track/${spotify?.track_id}`}
            rel='noopener noreferrer'
            target='_blank'
          >
            {spotify?.song}
          </Link>
          <p className='text-xs opacity-90'>
            {t('by')} {spotify?.artist}
          </p>
          <p className='text-xs opacity-70'>
            {t('from')} {spotify?.album}
          </p>
        </div>
      </div>
    </div>
  );
}

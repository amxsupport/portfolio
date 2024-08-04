import { FileTextIcon, MailIcon } from 'lucide-react';

import { NextJSIcon } from '@/components/icons/tags/nextjs';
import { ReactIcon } from '@/components/icons/tags/react';
import { LaravelIcon } from '@/components/icons/tags/laravel';
import { TypeScriptIcon } from '@/components/icons/tags/typescript';
import { JavaScriptIcon } from '@/components/icons/tags/javascript';
import { PHPIcon } from '@/components/icons/tags/php';
import { HTMLIcon } from '@/components/icons/tags/html';
import { CSSIcon } from '@/components/icons/tags/css';
import { ViteIcon } from '@/components/icons/tags/vite';
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui';
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css';
import { NodeJSIcon } from '@/components/icons/tags/nodejs';
import { GitHubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { DiscordIcon } from '@/components/icons/discord';

export const AVATAR = {
  name: 'Abdelaaziz Amksa',
  initials: 'AA',
};

export const discordId = '268899316075069440';

export const LINKS = [
  { title: 'GitHub', url: 'https://github.com/amxsupport', icon: GitHubIcon },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/abdelaaziz-amksa-28689753/', icon: LinkedInIcon },
  {
    title: 'Resume',
    url: 'https://drive.google.com/file/d/1-tfJUjTbF-UAlbWu61ORV8wWMY6rSm9P/view?usp=sharing',
    icon: FileTextIcon,
  },
  { title: 'Email', url: 'mailto:itmasterdesigne@gmail.com', icon: MailIcon },
  { title: 'Discord', url: 'https://discord.com/users/268899316075069440', icon: DiscordIcon },
];

const TAGS = {
  NEXT: {
    name: 'Next.js',
    icon: NextJSIcon,
  },
  REACT: {
    name: 'React',
    icon: ReactIcon,
  },
  LARAVEL: {
    name: 'Laravel',
    icon: LaravelIcon,
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypeScriptIcon,
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  PHP: {
    name: 'PHP',
    icon: PHPIcon,
  },
  HTML: {
    name: 'HTML',
    icon: HTMLIcon,
  },
  CSS: {
    name: 'CSS',
    icon: CSSIcon,
  },
  VITE: {
    name: 'Vite',
    icon: ViteIcon,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: TailwindCSSIcon,
  },
  SHADCN: {
    name: 'Shadcn/ui',
    icon: ShadcnIcon,
  },
  NODE: {
    name: 'Node.js',
    icon: NodeJSIcon,
  },
};

export const STACK = [
  { name: 'React', Icon: ReactIcon },
  { name: 'Next.js', Icon: NextJSIcon },
  { name: 'Laravel', Icon: LaravelIcon },
  { name: 'Node.js', Icon: NodeJSIcon },
  { name: 'Typescript', Icon: TypeScriptIcon },
  { name: 'JavaScript', Icon: JavaScriptIcon },
  { name: 'PHP', Icon: PHPIcon },
  { name: 'HTML', Icon: HTMLIcon },
  { name: 'CSS', Icon: CSSIcon },
];

export const PROJECTS = [
  {
    title: 'Fitness_Sphere',
    tags: [TAGS.REACT, TAGS.NEXT, TAGS.NODE, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.SHADCN],
    link: {
      github: 'https://github.com/amxsupport/Fitness_Sphere',
      preview: 'https://fitsphere.vercel.app',
    },
    image: '/assets/projects/jotter.webp',
  },
  {
    title: 'E-Lyrics',
    tags: [
      TAGS.REACT,
      TAGS.NEXT,
      TAGS.LARAVEL,
      TAGS.JAVASCRIPT,
      TAGS.PHP,
      TAGS.TAILWIND,
      TAGS.SHADCN,
    ],
    link: {
      github: 'https://github.com/amxsupport/E-Lyrics',
      preview: 'https://fitsphere.vercel.app',
    },
    image: '/assets/projects/ehwaz.webp',
  },
  {
    title: 'AirBnB_clone',
    tags: [TAGS.LARAVEL, TAGS.PHP, TAGS.TAILWIND],
    link: {
      github: 'https://github.com/amxsupport/AirBnB_clone_v4',
    },
    image: '/assets/projects/zen-kicks.webp',
  },
];

export const statusClasses: {
  [key: string]: {
    border: string;
    text: string;
  };
} = {
  online: {
    border: 'hover:border-green-500',
    text: 'text-green-600',
  },
  dnd: {
    border: 'hover:border-red-500',
    text: 'text-red-500',
  },
  idle: {
    border: 'hover:border-amber-200',
    text: 'dark:text-amber-200 text-yellow-600',
  },
  offline: {
    border: 'hover:border-purple-100',
    text: 'dark:text-purple-100 text-primary',
  },
};

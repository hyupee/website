import { PageHeadline } from '@/components/layout/page-headline';
import { CAREER, INFO, MY_DESCRIPTION } from '@/constants/about';
import {
  ArrowTopRightIcon,
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

const ICON_SIZE = 22;
const ICON_ATTRS = {
  width: ICON_SIZE,
  height: ICON_SIZE,
};

const snsList = [
  {
    name: 'GitHub',
    url: INFO.github.url,
    icon: <GitHubLogoIcon {...ICON_ATTRS} />,
  },
  {
    name: 'LinkedIn',
    url: INFO.linkedin.url,
    icon: <LinkedInLogoIcon {...ICON_ATTRS} />,
  },
  {
    name: 'Email',
    url: INFO.email.url,
    icon: <EnvelopeOpenIcon {...ICON_ATTRS} />,
  },
];

export default function Page() {
  return (
    <div className="transition-all duration-1000 animate-fade-in-up">
      <PageHeadline
        title="소프트웨어 엔지니어"
        description={`\n정상협입니다.`}
      />
      <div className="mb-30">
        <p className="whitespace-pre-line font-semibold text-gray-600 text-md lg:text-xl leading-[1.6]">
          {MY_DESCRIPTION}
        </p>
      </div>

      <div className="mb-30">
        <p className="font-bold text-[#f56a01] text-2xl mb-3">이력.</p>

        {CAREER.map(({ title, description, date }) => (
          <div key={title} className="mb-8">
            <p className="font-semibold text-gray-800 text-md lg:text-xl">
              {title}
            </p>
            <p className="font-light text-gray-600 text-sm lg:text-md">
              {description}
            </p>
            <p className="font-light text-gray-600 text-sm lg:text-md">
              {date}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <p className="font-semibold text-sm lg:text-md text-gray-800">
          더 자세한 정보를 보고 싶다면?
        </p>
        <Link
          href={INFO.resume.url}
          target="_blank"
          className="font-light text-[#0066cc] mt-4 text-sm"
        >
          이력서 바로가기
          <ArrowTopRightIcon className="inline" />
        </Link>
      </div>

      <div className="flex gap-4">
        {snsList.map(({ icon, url, name }) => (
          <Link
            href={url}
            title={name}
            target="_blank"
            key={url}
            className="text-gray-400"
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

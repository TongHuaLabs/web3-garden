import React, { useCallback } from 'react';
import Pane from '@/components/Pane';
import LinkSvg from '@/icons/link.inline.svg';
import classNames from 'classnames';

type LinksPaneProps = {
  title: string;
  links: Array<{ title: string; url: string }>;
  onLinkClick?: (url: string) => void;
  className?: string;
};

type ReferenceLinkProps = {
  title: string;
  url: string;
  onClick?: (url: string) => void;
};

const ReferenceLink = ({ url, title, onClick }: ReferenceLinkProps) => {
  const handleClick = useCallback(() => {
    onClick && onClick(url);
  }, [onClick, url]);

  return (
    <span
      onClick={handleClick}
      className={classNames(
        'text-sm font-normal  text-neutral-400',
        onClick && 'cursor-pointer hover:text-primary',
      )}
    >
      {title}
    </span>
  );
};

export default function LinksPane({
  title,
  links,
  className,
  onLinkClick,
}: LinksPaneProps) {
  return (
    <Pane
      title={title}
      className={className}
      icon={<LinkSvg className="w-6 h-6 text-neutral-200" />}
    >
      <ul className="flex flex-col space-y-3">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <ReferenceLink {...link} onClick={onLinkClick} />
            </li>
          );
        })}
      </ul>
    </Pane>
  );
}

import Image from 'next/image';
import { useState } from 'react';

interface Props {
  name: string;
  content: string;
  expanded: boolean;
}

export function Accordion({ name, content, expanded }: Props) {
  const [opened, setOpened] = useState<boolean>(expanded);
  return (<div>
    <div className="flex items-center justify-between bg-light-50 cursor-pointer border-b border-light pr-15 overflow-hidden" onClick={() => setOpened(!opened)}>
      <div className="flex-grow px-15 md:px-30 py-25 text-18 text-light-400">{name}</div>
      <Image className={"delay-300 transform transition ease-out " + (opened ? " rotate-180" : "")} src="/assets/images/icons/chevron.svg" width={24} height={24} alt="Chevron" />
    </div>
    <div className={"px-10 overflow-hidden md:px-50 transform transition ease-out bg-white " + (opened ? " max-h-500 opacity-100 py-25" : "max-h-0 opacity-0")} dangerouslySetInnerHTML={{ __html: content }} />
  </div>);
}

Accordion.defaultProps = {
  expanded: false,
}

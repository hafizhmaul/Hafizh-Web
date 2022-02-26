import { useWindowSize } from '@/hooks/useWindowSize';
import { config } from '@/utils/config';
import Image from 'next/image';
import { Tooltip } from 'react-tippy';


const SocmedLink = () => {
  const size = useWindowSize();

  return (
    <div className='flex mt-7'>
      {config.socialMedia.map((item, idx) => (
        <Tooltip
          key={idx}
          title={item.name}
          position="bottom"
          interactive
          trigger="mouseenter"
          className='mr-5'
          html={
            <div
              style={{ backgroundColor: `${config.colors.blackSolid}` }}
              className='inline-block p-2 mt-3 rounded-md shadow-md text-white border border-green-200 transition-all ease-out'>
              {item.name}
            </div>}
        >
          <a href={item.url} target="_blank" rel="noreferrer">
            <span>
              <Image width={size.width >= 769 ? 50 : 35} src={item.logo} alt={item.name} />
            </span>
          </a>
        </Tooltip>
      ))}
    </div>
  )
};

export default SocmedLink;
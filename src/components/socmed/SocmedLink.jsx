import Image from 'next/image';
import { Tooltip } from 'react-tippy';
import { config } from '../../utils/config';

const SocmedLink = () => {
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
              className='inline-block p-2 rounded-md shadow-md text-white border border-yellow-400'>
              {item.name}
            </div>}
        >
          <a href={item.url} target="_blank" rel="noreferrer">
            <span>
              <Image src={item.logo} alt={item.name} />
            </span>
          </a>
        </Tooltip>
      ))}
    </div>
  )
};

export default SocmedLink;
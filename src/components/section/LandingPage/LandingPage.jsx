import { Divider, Layout, SocmedLink } from '@/components';
import { config } from '@/utils/config';
import { TextLoop } from 'react-text-loop-next';

const LandingPage = () => {
  return (
    <Layout id={"home-page"}>
      <div aria-details='container' className='ml-11'>
        <div className='text-yellow-origin text-2xl mb-4' aria-details='greeting'>
          <TextLoop mask={true}>
            <span>halo</span>
            <span title='greeting-japan'>こんにちは</span>
            <span title='greeting-korean'>안녕</span>
            <span title='greeting-chinese'>你好</span>
            <span title='greeting-france'>bonjour</span>
            <span title='greeting-russian'>Привет</span>
          </TextLoop>
          , my name is
        </div>
        <div aria-details='full-name' className='lowercase font-bold text-7xl mb-7'>Hafizh Maulan<span className='text-yellow-origin blink-text'>a.</span></div>
        <Divider color={config.colors.yellowOrigin} />
        <div aria-details='profile' className='mt-7 font-medium'>
          I am a Software Engineer focusing on <strong>Frontend Development</strong>. <br />Based in Bogor, Indonesia.
        </div>
        <SocmedLink />
      </div>
    </Layout>
  )
};

export default LandingPage;
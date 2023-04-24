import styled from 'styled-components';
import { heroWave1, heroWave2, heroWave3, heroWave3Dark } from '../../assets/waves';

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave src={heroWave1} style={{ top: '0px' }} />
      <Wave src={heroWave2} style={{ top: '350px' }} />
      <Wave src={heroWave3} style={{ top: '550px' }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }

  :last-child {
    @media (prefers-color-scheme: dark) {
      content: url('/src/assets/waves/hero-wave3-dark.svg');
    }
  }
`;

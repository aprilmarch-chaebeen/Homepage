import styled, {keyframes} from 'styled-components';

interface HomeMainTextProp {
  descript: string;
}

function HomeMainTextAnimation({descript}: HomeMainTextProp) {
  return (
    <TextContainer>
      <div className="slide-container">
        <ul className="slide-wrapper">
          <div className="slide original">
            <li className="item">{descript} </li>
          </div>
          <div className="slide clone">
            <li className="item">{descript} </li>
          </div>
          <div className="slide clone">
            <li className="item">{descript}</li>
          </div>
          <div className="slide clone">
            <li className="item">{descript}</li>
          </div>
          <div className="slide clone">
            <li className="item">{descript}</li>
          </div>
          <div className="slide clone">
            <li className="item">{descript}</li>
          </div>
          <div className="slide clone">
            <li className="item">{descript}</li>
          </div>
          <div className="slide clone">
            <li className="item">{descript}</li>
          </div>
          <div className="slide clone">
            <li className="item">{descript}</li>
          </div>
        </ul>
      </div>
    </TextContainer>
  );
}

export default HomeMainTextAnimation;

const InfiniteAnimation1 = keyframes`
    0% {
    transform: translateX(0vw);
  }
  50% {
    transform: translateX(-100vw);
  }
  50.1% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(0vw);
  }
`;

const infiniteAnimation2 = keyframes`
      0% {
    transform: translateX(0vw);
  }
  100% {
    transform: translateX(-200vw);
  }
`;

const TextContainer = styled.div`
  width: 100vw;

  .slide-container {
    overflow: hidden;

    .slide-wrapper {
      display: inline-flex;
      flex-wrap: nowrap;
      align-items: center;
      gap: 7px;
      padding: 0;
    }
    .slide {
      display: inline-flex;
      align-items: center;
      flex-wrap: nowrap;
      position: relative;
      align-items: center;
      gap: 7px;

      &.original {
        animation: 100s linear infinite normal none running ${InfiniteAnimation1};
      }
      &.clone {
        animation: 100s linear infinite ${infiniteAnimation2};
      }

      .item {
        margin: 0;
        width: max-content;
        height: 100%;
        line-height: 1rem;
        font-family: 'Pretendard-Regular';
        font-size: 1.1vw;
        list-style: none;
      }
    }
  }
`;

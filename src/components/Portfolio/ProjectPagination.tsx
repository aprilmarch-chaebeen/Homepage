import styled, {css} from 'styled-components';
import {useAppDispatch, useAppSelector} from '../../hook/reduxHook';
import {changeIdx, selectProjectIdxValue} from '../../reducers/projectCurIdxSlice';
import arrowsrc from '../../assets/svg/arrow.svg';
import doublearrowsrc from '../../assets/svg/double_arrow.svg';
interface ProjectPaginationProps {
  total: number;
}

function ProjectPagination({total}: ProjectPaginationProps) {
  const dispatch = useAppDispatch();
  const currentIdx = useAppSelector(selectProjectIdxValue);

  return (
    <Pagination>
      <List>
        <PageBtn onClick={() => dispatch(changeIdx(1))}>
          <DoubleArrow src={doublearrowsrc} alt="double arrow button" />
        </PageBtn>
      </List>
      <List>
        <PageBtn onClick={() => dispatch(changeIdx(currentIdx <= 1 ? 1 : currentIdx - 1))}>
          <Arrow src={arrowsrc} alt="arrow button" />
        </PageBtn>
      </List>

      {Array.from({length: total}, (_, i) => (
        <List key={i + 1}>
          <PageBtn onClick={() => dispatch(changeIdx(i + 1))} $disabled={currentIdx === i + 1}>
            {i + 1}
          </PageBtn>
        </List>
      ))}

      <List>
        <PageBtn onClick={() => dispatch(changeIdx(currentIdx >= total ? total : currentIdx + 1))}>
          <Arrow src={arrowsrc} alt="arrow button" $right={true} />
        </PageBtn>
      </List>
      <List>
        <PageBtn onClick={() => dispatch(changeIdx(total))}>
          <DoubleArrow src={doublearrowsrc} alt="double arrow button" $right={true} />
        </PageBtn>
      </List>
    </Pagination>
  );
}

export default ProjectPagination;

const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5vw;
  margin: 4vw 0 12vw 0;
  padding: 0;

  @media (max-width: 1024px) {
    margin-top: 8vw;
    margin-bottom: 25vw;
    gap: 2vw;
  }

  @media (max-width: 480px) {
    margin-top: 15vw;
    margin-bottom: 25vw;
    gap: 7vw;
  }
`;

const List = styled.li`
  list-style: none;
`;

const PageBtn = styled.button<{$disabled?: boolean}>`
  cursor: pointer;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85vw;
  color: #111;
  border: none;
  border-bottom: ${(p) => p.$disabled && '0.12vw solid #111'};
  padding: 0 0.8vw;

  @media (max-width: 1024px) {
    font-size: 1.6vw;
  }

  @media (max-width: 480px) {
    font-size: 3.9vw;
    border-bottom: ${(p) => p.$disabled && '0.6vw solid #111'};
  }
`;

const DoubleArrow = styled.img<{$right?: boolean}>`
  width: 1.4vw;
  ${(p) =>
    p.$right &&
    css`
      transform: rotateY(180deg);
    `}
  @media (max-width: 480px) {
    width: 7vw;
  }
`;

const Arrow = styled.img<{$right?: boolean}>`
  width: 1.4vw;
  ${(p) =>
    p.$right &&
    css`
      transform: rotateY(180deg);
    `}
  @media (max-width: 480px) {
    width: 7vw;
  }
`;

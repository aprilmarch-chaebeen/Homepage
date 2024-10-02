import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../../hook/reduxHook';
import {changeIdx, selectProjectIdxValue} from '../../reducers/projectCurIdxSlice';

interface ProjectPaginationProps {
  total: number;
}

function ProjectPagination({total}: ProjectPaginationProps) {
  const dispatch = useAppDispatch();
  const currentIdx = useAppSelector(selectProjectIdxValue);

  return (
    <Pagination>
      <List>
        <PageBtn onClick={() => dispatch(changeIdx(1))}>First</PageBtn>
      </List>
      <List>
        <PageBtn onClick={() => dispatch(changeIdx(currentIdx <= 1 ? 1 : currentIdx - 1))}>Previous</PageBtn>
      </List>

      {Array.from({length: total}, (_, i) => (
        <List key={i + 1}>
          <PageBtn onClick={() => dispatch(changeIdx(i + 1))} $disabled={currentIdx === i + 1}>
            {i + 1}
          </PageBtn>
        </List>
      ))}

      <List>
        <PageBtn onClick={() => dispatch(changeIdx(currentIdx >= total ? total : currentIdx + 1))}>Next</PageBtn>
      </List>
      <List>
        <PageBtn onClick={() => dispatch(changeIdx(total))}>Last</PageBtn>
      </List>
    </Pagination>
  );
}

export default ProjectPagination;

const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5vw;
  margin: 10vw 20vw;
  padding: 0;
`;

const List = styled.li`
  list-style: none;
`;

const PageBtn = styled.button<{$disabled?: boolean}>`
  cursor: pointer;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1vw;
  color: #111;
  border: none;
  border-bottom: ${(p) => p.$disabled && '0.2vw solid #111'};
  padding: 0 1vw;
`;

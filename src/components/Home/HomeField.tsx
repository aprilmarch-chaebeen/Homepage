import styled from 'styled-components';
import FieldCategory from './FieldCategory';
import FieldDescript from './FieldDescript';
import {useState} from 'react';

const voucher = ['정부지원바우처', '제조혁신바우처・전통문화바우처 수행사', '전략적인 디자인과 컨설팅으로 브랜드를 지원하겠습니다'];
const newBrand = ['신사업・신규브랜드'];
const it = ['IT 대시보드'];
const university = ['공공기관 대학'];

function HomeField() {
  const [voucherClicked, setVoucherClicked] = useState(true);
  const [newClicked, setNewClicked] = useState(false);
  const [itClicked, setItClicked] = useState(false);
  const [publicClicked, setPublicClicked] = useState(false);

  const handleVoucherClicked = () => {
    setVoucherClicked(true);
    setNewClicked(false);
    setItClicked(false);
    setPublicClicked(false);
  };

  const handleNewClicked = () => {
    setVoucherClicked(false);
    setNewClicked(true);
    setItClicked(false);
    setPublicClicked(false);
  };

  const handleItClicked = () => {
    setVoucherClicked(false);
    setNewClicked(false);
    setItClicked(true);
    setPublicClicked(false);
  };

  const handlePublicClicked = () => {
    setVoucherClicked(false);
    setNewClicked(false);
    setItClicked(false);
    setPublicClicked(true);
  };

  return (
    <Section>
      <CategorySection>
        <FieldCategory
          title={'정부지원 바우처 수행사'}
          text={'Goverment voucher'}
          onClick={handleVoucherClicked}
          clicked={voucherClicked}
        />
        <FieldCategory title={'신사업・신규브랜드'} text={'New Business & Brand'} onClick={handleNewClicked} clicked={newClicked} />
        <FieldCategory title={'IT 대시보드'} text={'IT Dashboard'} onClick={handleItClicked} clicked={itClicked} />
        <FieldCategory title={'공공기관 대학'} text={'Public University'} onClick={handlePublicClicked} clicked={publicClicked} />
      </CategorySection>
      <DescriptSection>
        {voucherClicked && <FieldDescript descript={voucher} />}
        {newClicked && <FieldDescript descript={newBrand} />}
        {itClicked && <FieldDescript descript={it} />}
        {publicClicked && <FieldDescript descript={university} />}
      </DescriptSection>
    </Section>
  );
}

export default HomeField;

const Section = styled.section`
  width: 100vw;
  display: flex;
`;

const CategorySection = styled.div`
  width: 50%;
`;

const DescriptSection = styled.div`
  width: 50%;
`;

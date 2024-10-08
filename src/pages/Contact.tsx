// import {useState} from 'react';
import styled from 'styled-components';
// import iconsrc from '../assets/svg/contact_icon.svg';
import HomeFooter from '../components/Home/HomeFooter';
import statuesrc from '../assets/svg/contact_statue.svg';

function Contact() {
  //   const [formData, setFormData] = useState({
  //     company: '',
  //     phone: '',
  //     name: '',
  //     email: '',
  //   });
  //   const [errors, setErrors] = useState({
  //     company: '',
  //     phone: '',
  //     name: '',
  //     email: '',
  //   });

  //   const validateEmail = (email: string) => {
  //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     return regex.test(email);
  //   };

  //   const validatePhone = (phone: string) => {
  //     const regex = /^\d{2,3}-\d{3,4}-\d{4}$/; // e.g., 010-1234-5678
  //     return regex.test(phone);
  //   };

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const {name, value} = e.target;
  //     setFormData({...formData, [name]: value});

  //     if (name === 'email' && !validateEmail(value)) {
  //       setErrors({...errors, email: '유효한 이메일 주소를 입력하세요.'});
  //     } else if (name === 'phone' && !validatePhone(value)) {
  //       setErrors({...errors, phone: '유효한 전화번호를 입력하세요. (예: 010-1234-5678)'});
  //     } else {
  //       setErrors({...errors, [name]: ''});
  //     }
  //   };

  //   const handleSubmitClick = (e: React.FormEvent) => {
  //     e.preventDefault();

  //     let hasErrors = false;
  //     const newErrors = {...errors};

  //     if (!formData.company) {
  //       newErrors.company = '회사명을 입력하세요.';
  //       hasErrors = true;
  //     }

  //     if (!formData.phone || !validatePhone(formData.phone)) {
  //       newErrors.phone = '유효한 전화번호를 입력하세요. (예: 010-1234-5678)';
  //       hasErrors = true;
  //     }

  //     if (!formData.name) {
  //       newErrors.name = '담당자명을 입력하세요.';
  //       hasErrors = true;
  //     }

  //     if (!formData.email || !validateEmail(formData.email)) {
  //       newErrors.email = '유효한 이메일 주소를 입력하세요.';
  //       hasErrors = true;
  //     }

  //     setErrors(newErrors);

  //     if (!hasErrors) {
  //       // 모든 유효성 검사를 통과한 경우 폼 제출
  //       alert('문의가 완료되었습니다.');
  //       setFormData({
  //         company: '',
  //         phone: '',
  //         name: '',
  //         email: '',
  //       });
  //       document.getElementById('contactForm')?.onsubmit;
  //     }
  //   };

  return (
    <section>
      <Container>
        <TextContainer>
          <Title>Contact</Title>
          <SubTitle>고객의 프로젝트를 생각하고 고민하는 공간입니다.</SubTitle>
          <TextBox>
            <p>
              <TextGray>E-mail</TextGray>
              <br />
              <TextBlack>jjw@aprilmarch.design</TextBlack>
            </p>
            <p>
              <TextGray>Tell</TextGray>
              <br />
              <TextBlack>02.6929.0990</TextBlack>
            </p>
          </TextBox>
        </TextContainer>
        <Statue src={statuesrc} alt="contact statue img" />
        {/* <FormBox>
          <form id="contactForm" role="form" method="POST" action={process.env.HTML_CONTACT_FORM_WEB_APP_URL} target="formDisplay">
            <Icon src={iconsrc} alt="contact icon" />
            <InputContainer>
              <Input type="text" name="company" placeholder="회사명" value={formData.company} onChange={handleChange} required />
              {errors.company && <ErrorMessage>{errors.company}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
              <Input
                type="text"
                name="phone"
                placeholder="휴대폰번호 (예: 010-1234-5678)"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
              <Input type="text" name="name" placeholder="담당자명" value={formData.name} onChange={handleChange} required />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
              <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputContainer>

            <SubmitContainer>
              <Submit type="submit" value="SEND" onClick={handleSubmitClick} />
            </SubmitContainer>
          </form>
          <iframe name="formDisplay" style={{display: 'none'}}></iframe>
        </FormBox> */}
      </Container>
      <HomeFooter />
    </section>
  );
}

export default Contact;

const Container = styled.section`
  position: relative;
  font-family: 'Pretendard-Regular', sans-serif;
  padding: 5vw 12vw 15vw;
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div``;

const Title = styled.h1`
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  font-size: 5vw;
  color: #111;
  margin-bottom: 0;
  margin-top: 7vw;
`;

const SubTitle = styled.h2`
  font-size: 1.2vw;
  color: #131313;
  line-height: 1.5;
`;

const TextBox = styled.div`
  margin-top: 3vw;
  line-height: 1.5;
`;

const TextGray = styled.span`
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 1vw;
  color: #999;
`;

const TextBlack = styled.span`
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 1vw;
  color: #131313;
`;

// const FormBox = styled.div`
//   margin-top: 10vw;
// `;

// const Icon = styled.img`
//   margin-bottom: 1.5vw;
//   width: 0.8vw;
// `;

// const InputContainer = styled.div`
//   margin-bottom: 1.5vw;
// `;

// const Input = styled.input`
//   font-family: 'Pretendard-Regular', sans-serif;
//   width: 30vw;
//   height: 2vw;
//   padding-bottom: 0.4vw;
//   font-size: 1vw;
//   border: none;
//   border-bottom: 0.05vw solid #ccc;
//   color: #111;
//   cursor: pointer;
// `;

// const SubmitContainer = styled.div`
//   text-align: right;
// `;

// const Submit = styled.input`
//   background: #fff;
//   border: 0.05vw solid #222;
//   color: #222;
//   font-size: 1vw;
//   padding: 0.7vw 2.5vw;
//   cursor: pointer;
// `;

// const ErrorMessage = styled.p`
//   color: red;
//   font-size: 0.8vw;
//   margin: 0.5vw 0;
// `;

const Statue = styled.img`
  width: 19vw;
`;

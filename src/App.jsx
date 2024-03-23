import React, {useState} from 'react'
import './App.css'
import bannerbackground from '/assets/bannerbackground.png'
import girl from '/assets/girl.png'
import hands from '/assets/hands.png'
import logo from '/assets/logo.svg'
import speakAnimation from '/assets/speak.gif'
import '@brainhubeu/react-carousel/lib/style.css';
import {styled} from '@mui/material/styles';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import QuizIcon from '@mui/icons-material/Quiz';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  ListItemAvatar,
  Modal,
  Snackbar,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography
} from "@mui/material";
import {InstagramEmbed} from "react-social-media-embed";
import CountUp from "react-countup";
import ReactStars from "react-rating-stars-component/dist/react-stars.js";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Pagination} from "swiper/modules";

const ColorlibConnector = styled(StepConnector)(({theme}) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(-99deg, #FFA8DC 0%, #40c9ff 98%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(-99deg, #FFA8DC 0%, #40c9ff 98%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibConnecto2 = styled(StepConnector)(({theme}) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(-99deg, #FFA8DC 0%, #40c9ff 98%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(-99deg, #FFA8DC 0%, #40c9ff 98%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 20,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 10,
    width: 5,
    marginLeft: 10
  },
}));

const ColorlibStepIconRoot = styled('div')(({theme, ownerState}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient(-99deg, #FFA8DC 0%, #40c9ff 98%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient(-99deg, #FFA8DC 0%, #40c9ff 98%)',
  }),
}));


function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [snackMessage, setSnackMessage] = useState('')
  const [openSnack, setOpenSnack] = useState(false)
  const [snackMessageStatus, setSnackMessageStatus] = useState('')

  const handleCloseSnack = () => {
    setOpenSnack(false);
  };

  function ColorlibStepIcon(props) {
    const {active, completed, className} = props;

    const icons = {
      1: <AddIcCallIcon/>,
      2: <QuizIcon/>,
      3: <PeopleAltIcon/>,
    };

    return (
      <ColorlibStepIconRoot ownerState={{completed, active}} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const isStepFailed = (step) => {
    return step === 1;
  };

  const steps = ['Свяжись з нами', 'Пройди невеличкий тест', 'Познайомся з вчителем та визнач свої потреби у навчанні'];

  const handleSubmit = async (event) => {
    if (!name || !phone) {
      setSnackMessage('Щоб залишити заявку, будь ласка, надайте ваше ім\'я та номер телефону');
      setSnackMessageStatus('error')
      setOpenSnack(true);
    } else {
      const url = `https://api.telegram.org/bot6382498664:AAHkW6xvQhXqJVlOxHnT6HGgl6NZlBNUk5Q/sendMessage?chat_id=-1001954943934&text=<b>${name}</b>%20<i>${phone}</i>&parse_mode=html`;

      try {
        const resp = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
        })

        const data = await resp.json();

        console.log('data resp', data)
        setSnackMessage(`Дякуємо за вашу заявку, ${name}! Ми раді, що ви з нами. Наш вчитель зв\'яжеться з вами незабаром. Очікуйте на зв\'язок та приємного дня! 😊`);
        setSnackMessageStatus('success')
        setOpenSnack(true);
      } catch (e) {
        console.log(e)
      }
    }
  }


  const renderForm = () => {
    return (
      <FormGroup className="form">
        <FormControl>
          <InputLabel htmlFor="my-input">Ім'я</InputLabel>
          <Input
            onChange={(event) => setName(event.target.value)}
            name={'name'} variant="filled" className="form__input" id="my-input"
            aria-describedby="my-helper-text"/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Номер телефону / Телеграм нік</InputLabel>
          <Input
            onChange={(event) => setPhone(event.target.value)}
            name={'phone'} variant="filled" className="form__input" id="my-input"
            aria-describedby="my-helper-text"/>
        </FormControl>
        <FormControl>
          <Button onClick={handleSubmit} className="form__submit">Залишити заявку</Button>
        </FormControl>
      </FormGroup>
    )
  }

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="App">
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <div className="modal-container">
            <div className="modal-container__form">
              {renderForm()}
            </div>
          </div>
        </Modal>
        <Snackbar
            className={`snack-container ${snackMessageStatus === 'success' && 'snack-container__success'} ${snackMessageStatus === 'error' && 'snack-container__error'}`}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            open={openSnack}
            onClose={handleCloseSnack}
            message={snackMessage}
            key={'top' + 'right'}
        />
        {/*<div className="btns-menu">*/}
        {/*  <a href="https://www.instagram.com/" target="_blank">*/}
        {/*    <img className="contact-icon" src={inst} alt=""/>*/}
        {/*  </a>*/}
        {/*  <a href="https://www.instagram.com/" target="_blank">*/}
        {/*    <img className="contact-icon" src={tele} alt=""/>*/}
        {/*  </a>*/}
        {/*  <a href="https://www.instagram.com/" target="_blank">*/}
        {/*    <img className="contact-icon" src={gmail} alt=""/>*/}
        {/*  </a>*/}
        {/*</div>*/}

        <div className="header">
          <div className="header__container">
            {/*<img className="banner" src={banner} alt="banner"/>*/}
            <img className="banner" src={bannerbackground} alt="banner"/>
            <img className="girl" src={girl} alt="banner"/>
            <img className="hands" src={hands} alt="banner"/>
            <img className="logo" src={logo} alt="logo"/>
          </div>
        </div>

        <div className="body">
          <div className="container container--mini-margin merged-section">
            <div className="course-container">
              <div className="course-box">
                <div className="course-box__visible">
                  <p className="course-box__title">Easy групи</p>
                  <p>250 грн за 80 хвилин</p>
                </div>
                <div className="course-box__invisible">
                  <p className="">До 5 учнів в групі Мотивуюча та весела атмосфера</p>
                </div>
              </div>
              <div className="course-box">
                <div className="course-box__visible course-box__visible-ind">
                  <p className="course-box__title">Easy індиви</p>
                  <p>350 грн за 60 хвилин</p>
                </div>
                <div className="course-box__invisible">
                  <p className="">За твоїм розкладом Твої персональні цілі</p>
                </div>
              </div>
              <div className="course-box">
                <div className="course-box__visible course-box__visible-sc">
                  <p className="course-box__title">Speaking club</p>
                  <p>180 грн за 60 хвилин</p>
                </div>
                <div className="course-box__invisible">
                  <p className="">Суто розмови на кайфові теми</p>
                </div>
              </div>
            </div>

            <div className="form__container">
              {renderForm()}
              <div className="counter-container">
                <h5 className="sub-title sub-title__margin">Багато щаслывих студентів</h5>
                <CountUp
                    enableScrollSpy={true}
                    className="counter"
                    start={0}
                    end={3953}
                    duration={2.75}
                    separator=""
                    decimal=""
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                />
              </div>
            </div>
          </div>

          <div className="container container--no-padding container--margin-mini">
            <h3 className="sub-title">Ми виговоримо твою англійську! Бо</h3>
            <div className="container--flex-row">
              <div className="container--flex container--flex-margin choose__descktop">
                <div className="container__box container__pink container__box--smaller ">
                  <ListItemAvatar>
                    <img className="emoji" src={speakAnimation} alt=""/>
                  </ListItemAvatar>
                  <p className="text">Наші учні розмовляють більшу частину уроку</p>
                </div>
                <div className="container__box container__pink container__box--smaller ">
                  <ListItemAvatar>
                    <p className="emoji">&#127881;</p>
                  </ListItemAvatar>
                  <p className="text">Вчимося сміючись та обговорюючи щось кумедне</p>
                </div>
                <div className="container__box container__pink container__box--smaller ">
                  <ListItemAvatar>
                    <p className="emoji">&#128540;</p>
                  </ListItemAvatar>
                  <p className="text text--center">
                    Не нудьгуємо над письмовою граматикою - бо в реальному житті ти ж не будеш показувати
                    співрозмовнику завдяння з Past Simple
                  </p>
                </div>
              </div>
              <div className="bubble-image__wrapper">
                <img
                    className="bubble-image"
                    src="https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
              </div>
            </div>

          </div>
          <div className="container">
            <h3 className="sub-title sub-title__margin">EASY СТАРТ</h3>
            <div className="container--flex-row container--start">
              <div className="start-image__wrapper">
                <img
                    className="start-image"
                    src="https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
              </div>
              <div className="steps__descktop container__blue">
                <Stack sx={{width: '100%'}} spacing={4}>
                  <Stepper activeStep={2} alternativeLabel connector={<ColorlibConnector/>}>
                    {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel
                              className="step__label"
                              StepIconComponent={ColorlibStepIcon}
                          >
                            {label}
                          </StepLabel>
                        </Step>
                    ))}
                  </Stepper>
                </Stack>
              </div>
            </div>

            <div className="steps__mobile">
              <Stepper
                  orientation="vertical"
                  activeStep={3}
                  connector={<ColorlibConnecto2/>}
              >
                {steps.map((label, index) => {
                  const labelProps = {};
                  if (isStepFailed(index)) {
                    labelProps.optional = (
                        <Typography variant="caption" color="error">
                          Alert message
                        </Typography>
                    );
                  }

                  return (
                      <Step key={label}>
                        <StepLabel
                            className="step__label"
                            StepIconComponent={ColorlibStepIcon}
                        >
                          {label}
                        </StepLabel>
                      </Step>
                  );
                })}
              </Stepper>
            </div>
          </div>
          <div className="container__no--glass">
            <div className="choose__mobile">
              {/*<CarouselProvider*/}
              {/*  naturalSlideWidth={100}*/}
              {/*  naturalSlideHeight={60}*/}
              {/*  totalSlides={3}*/}
              {/*  className="container__carousel"*/}
              {/*>*/}
              {/*  <Slider>*/}
              {/*    <Slide index={0}>*/}
              {/*      <div className="container__box container__pink">*/}
              {/*        <h5>Easy групи</h5>*/}
              {/*        <p className="text">До 5 учнів в групі</p>*/}
              {/*        <p className="text">Мотивуюча та весела атмосфера</p>*/}
              {/*        <p className="text">80 хвилин</p>*/}
              {/*        <p className="text">250 грн</p>*/}
              {/*      </div>*/}
              {/*    </Slide>*/}
              {/*    <Slide index={1}>*/}
              {/*      <div className="container__box container__pink">*/}
              {/*        <h5>Easy індиви</h5>*/}
              {/*        <p className="text">За твоїм розкладом</p>*/}
              {/*        <p className="text">Твої персональні цілі</p>*/}
              {/*        <p className="text">60 хвилин</p>*/}
              {/*        <p className="text">350 грн</p>*/}
              {/*      </div>*/}
              {/*    </Slide>*/}
              {/*    <Slide index={2}>*/}
              {/*      <div className="container__box container__pink">*/}
              {/*        <h5>Найкомофртніший speaking club</h5>*/}
              {/*        <p className="text text--center">60 хвилин суто розмов на кайфові теми</p>*/}
              {/*        <p className="text">180 грн</p>*/}
              {/*      </div>*/}
              {/*    </Slide>*/}
              {/*  </Slider>*/}
              {/*</CarouselProvider>*/}
            </div>
            {/*<div className="container--flex container--flex-margin choose__descktop">*/}
            {/*  <div className="container__box container__purple">*/}
            {/*    <h5>Easy групи</h5>*/}
            {/*    <p className="text">До 5 учнів в групі</p>*/}
            {/*    <p className="text">Мотивуюча та весела атмосфера</p>*/}
            {/*    <p className="text">80 хвилин</p>*/}
            {/*    <p className="text">250 грн</p>*/}
            {/*  </div>*/}
            {/*  <div className="container__box container__purple">*/}
            {/*    <h5>Easy індиви</h5>*/}
            {/*    <p className="text">За твоїм розкладом</p>*/}
            {/*    <p className="text">Твої персональні цілі</p>*/}
            {/*    <p className="text">60 хвилин</p>*/}
            {/*    <p className="text">350 грн</p>*/}
            {/*  </div>*/}
            {/*  <div className="container__box container__purple">*/}
            {/*    <h5>Найкомофртніший speaking club</h5>*/}
            {/*    <p className="text text--center">60 хвилин суто розмов на кайфові теми</p>*/}
            {/*    <p className="text">180 грн</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div>
          <div className="container">
            <h3 className="sub-title">Що про нас кажуть</h3>
            <Swiper
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
              <SwiperSlide>
                <p className="review__text">
                  <ReactStars
                      count={5}
                      value={5}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                  />
                  "Я нарешті знайшла собі ідеальний спосіб занять англійською - не потрібно витрачати час на дорогу, і навіть
                  більше - можна виділити на це робочу перерву. Заняття з моїм викладачем – це завжди цікаво, пізнавально,
                  весело та дуже душевно. Урок проходить максимально різноманітно, вчитель відповідає на всі питання та
                  постійно чергує активності. І найважливіше для мене – я бачу прогрес:)"
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="review__text">
                  <ReactStars
                      count={5}
                      value={5}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                  />
                  "Чудова школа англійської!! Онлайн заняття дуже зручно, особливо коли вільного часу не так багато. З
                  викладачем уроки відбуваються на одному подиху, дуже цікаво та з гарним настроєм. Виявляється англійську
                  можна вчити легко та із задоволенням!"
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="review__text">
                  <ReactStars
                      count={5}
                      value={5}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                  />
                  "Дуже рекомендую! економія часу та нервів - навчання по інтернету зі Speak Easily. В мене чудовий педагог
                  та чудовий співрозмовник! Цікава програма, індивідуальний підхід та допомога у всіх питаннях, навчання із
                  задоволенням! Результат не змусить себе чекати! No doubt!"
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="review__text">
                  <ReactStars
                      count={5}
                      value={5}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                  />
                  "Займаюсь другий місяць онлайн, дуже зручно, викладач кваліфікований, цікаві заняття, результат від
                  навчання відчувається миттєво!))"</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="insta-container">
        <InstagramEmbed
            url="https://www.instagram.com/reel/C3Z7MxNtDD2/?igsh=MTdmeHppcjB2ZHAxdA=="
            height={'100%'}
        />
        <InstagramEmbed
            url="https://www.instagram.com/p/C2__aDntt1N/?igsh=MXNud20yZDdiOTdwdQ=="
            height={'100%'}
        />
        <InstagramEmbed
            url="https://www.instagram.com/p/C1_mpY5t4MK/?igsh=a2swOG4xNGcyNXE5"
            height={'100%'}
        />
      </div>
    </>
  )
}

export default App

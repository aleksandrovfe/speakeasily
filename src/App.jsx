import {
  Divider, List, ListItem, ListItemAvatar, Typography
} from "@mui/material";
import React, { useState } from 'react'
import { useSpring, to, animated, config } from '@react-spring/web'
import { scale, dist } from 'vec-la'
import { useDrag } from 'react-use-gesture'
import './App.css'
import inst from '/assets/inst.svg'
import tele from '/assets/tele.svg'
import gmail from '/assets/gmail.svg'
import '@brainhubeu/react-carousel/lib/style.css';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import QuizIcon from '@mui/icons-material/Quiz';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ColorlibConnector = styled(StepConnector)(({theme}) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(-99deg, #e81cff 0%, #40c9ff 98%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(-99deg, #e81cff 0%, #40c9ff 98%)',
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
        'linear-gradient(-99deg, #e81cff 0%, #40c9ff 98%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(-99deg, #e81cff 0%, #40c9ff 98%)',
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
      'linear-gradient(-99deg, #e81cff 0%, #40c9ff 98%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient(-99deg, #e81cff 0%, #40c9ff 98%)',
  }),
}));


function App() {
  const [page, setPage] = useState(0)

  const [{pos}, api] = useSpring(() => ({pos: [0, 0]}))
  const [{angle}, angleApi] = useSpring(() => ({
    angle: 0,
    config: config.wobbly,
  }))

  // const parallax = useParallax({
  //   speed: 10,
  // });
  //
  // const parallax2 = useParallax({
  //   speed: -20,
  // });

  const bind = useDrag(
    ({xy, previous, down, movement: pos, velocity, direction}) => {
      api.start({
        pos,
        immediate: down,
        config: {velocity: scale(direction, velocity), decay: true},
      })

      if (dist(xy, previous) > 10 || !down)
        angleApi.start({angle: Math.atan2(direction[0], -direction[1])})
    },
    {initial: () => pos.get()}
  )

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

  return (
    <div className="App">
      <div className="btns-menu">
        <a href="https://www.instagram.com/" target="_blank">
          <img className="contact-icon" src={inst} alt=""/>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img className="contact-icon" src={tele} alt=""/>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img className="contact-icon" src={gmail} alt=""/>
        </a>
      </div>
      {/*<div ref={parallax.ref} className="cube1"/>*/}
      {/*<div ref={parallax2.ref} className="cube2"/>*/}
      <div className="header">
        <div className="header__container">
          <div className="header__box">
            <animated.div
              className="rocket"
              {...bind()}
              style={{
                transform: to(
                  [pos, angle],
                  // @ts-ignore
                  ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`
                ),
              }}
            />
          </div>
          <h2 className="title">вивчай англійську з комфортом та easily</h2>
        </div>
      </div>
      <div className="body">
        <div className="container container__pink">
          <h3 className="sub-title">Ми виговоримо твою англійську! Бо</h3>
          <List sx={{width: '100%', bgcolor: 'transparent'}}>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128483;</p>
              </ListItemAvatar>
              <p className="text">Наші учні розмовляють більшу частину уроку</p>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#127881;</p>
              </ListItemAvatar>
              <p className="text">Вчимося сміючись та обговорюючи щось кумедне</p>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128540;</p>
              </ListItemAvatar>
              <p className="text">Не нудьгуємо над письмовою граматикою - бо в реальному житті ти ж не будеш показувати
                співрозмовнику завдяння з Past Simple</p>
            </ListItem>
          </List>
        </div>
        <div className="container container__blue">
          <h3 className="sub-title sub-title__margin">як почати easy?</h3>
          <div className="steps__descktop">
            <Stack sx={{width: '100%'}} spacing={4}>
              <Stepper activeStep={2} alternativeLabel connector={<ColorlibConnector/>}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel className="step__label" StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Stack>
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
                    <StepLabel className="step__label" StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>
        </div>
        <div className="container__no--glass">
          <h3 className="sub-title">Що обрати?</h3>
          <div className="choose__mobile">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={60}
              totalSlides={3}
              className="container__carousel"
            >
              <Slider>
                <Slide index={0}>
                  <div className="container__box container__pink">
                    <h5>Easy групи</h5>
                    <p className="text">До 5 учнів в групі</p>
                    <p className="text">Мотивуюча та весела атмосфера</p>
                    <p className="text">80 хвилин</p>
                    <p className="text">250 грн</p>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="container__box container__pink">
                    <h5>Easy індиви</h5>
                    <p className="text">За твоїм розкладом</p>
                    <p className="text">Твої персональні цілі</p>
                    <p className="text">60 хвилин</p>
                    <p className="text">350 грн</p>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="container__box container__pink">
                    <h5>Найкомофртніший speaking club</h5>
                    <p className="text text--center">60 хвилин суто розмов на кайфові теми</p>
                    <p className="text">180 грн</p>
                  </div>
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
          <div className="container--flex container--flex-margin choose__descktop">
            <div className="container__box container__purple">
              <h5>Easy групи</h5>
              <p className="text">До 5 учнів в групі</p>
              <p className="text">Мотивуюча та весела атмосфера</p>
              <p className="text">80 хвилин</p>
              <p className="text">250 грн</p>
            </div>
            <div className="container__box container__purple">
              <h5>Easy індиви</h5>
              <p className="text">За твоїм розкладом</p>
              <p className="text">Твої персональні цілі</p>
              <p className="text">60 хвилин</p>
              <p className="text">350 грн</p>
            </div>
            <div className="container__box container__purple">
              <h5>Найкомофртніший speaking club</h5>
              <p className="text text--center">60 хвилин суто розмов на кайфові теми</p>
              <p className="text">180 грн</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <h3 className="sub-title">Що про нас кажуть</h3>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={4}
            className="review__slider"
          >
            <Slider>
              <Slide index={0}>
                <p className="review__text">
                  "Я нарешті знайшла собі ідеальний спосіб занять англійською - не потрібно витрачати час на дорогу, і
                  навіть
                  більше - можна виділити на це робочу перерву. Заняття з моїм викладачем – це завжди цікаво, пізнавально,
                  весело та дуже душевно. Урок проходить максимально різноманітно, вчитель відповідає на всі питання та
                  постійно чергує активності. І найважливіше для мене – я бачу прогрес:)"
                </p>
              </Slide>
              <Slide index={1}>
                <p className="review__text">
                  "Чудова школа англійської!! Онлайн заняття дуже зручно, особливо коли вільного часу не так багато. З
                  викладачем уроки відбуваються на одному подиху, дуже цікаво та з гарним настроєм. Виявляється англійську
                  можна вчити легко та із задоволенням!"
                </p>
              </Slide>
              <Slide index={2}>
                <p className="review__text">
                  "Дуже рекомендую! економія часу та нервів - навчання по інтернету зі Speak Easily. В мене чудовий педагог
                  та чудовий співрозмовник! Цікава програма, індивідуальний підхід та допомога у всіх питаннях, навчання із
                  задоволенням! Результат не змусить себе чекати! No doubt!"
                </p>
              </Slide>
              <Slide index={3}>
                <p className="review__text">
                  "Займаюсь другий місяць онлайн, дуже зручно, викладач кваліфікований, цікаві заняття, результат від
                  навчання відчувається миттєво!))"</p>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  )
}

export default App

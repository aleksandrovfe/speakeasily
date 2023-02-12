import {
  Divider, List, ListItem, ListItemAvatar
} from "@mui/material";
import React, { useState } from 'react'
import { useSpring, to, animated, config } from '@react-spring/web'
import { scale, dist } from 'vec-la'
import { useDrag } from 'react-use-gesture'
import './App.css'
import inst from '/assets/inst.svg'
import tele from '/assets/tele.svg'
import gmail from '/assets/gmail.svg'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import FloatingBtn from "./floatingBtn.jsx";
import { useParallax } from "react-scroll-parallax";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import QuizIcon from '@mui/icons-material/Quiz';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

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

  const parallax = useParallax({
    speed: 10,
  });

  const parallax2 = useParallax({
    speed: -20,
  });

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

  const steps = ['свяжись з нами', 'пройди невеличкий тест', 'познайомся з вчителем та визнач свої потреби у навчанні'];

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
      <div ref={parallax.ref} className="cube1"/>
      <div ref={parallax2.ref} className="cube2"/>
      <div className="header">
        <div className="header__container">
          <div className="header__box">
            {/*<div className="contacts">*/}
            {/*  <img className="contact-icon" src={inst} alt=""/>*/}
            {/*  <img className="contact-icon" src={tele} alt=""/>*/}
            {/*  <img className="contact-icon" src={gmail} alt=""/>*/}
            {/*</div>*/}
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
        <div className="container">
          <h3 className="sub-title">ми виговоримо твою англійську! Бо</h3>
          <List sx={{width: '100%', bgcolor: 'transparent'}}>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128483;</p>
              </ListItemAvatar>
              <p className="text">наші учні розмовляють більшу частину уроку</p>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#127881;</p>
              </ListItemAvatar>
              <p className="text">вчимося сміючись та обговорюючи щось кумедне</p>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128540;</p>
              </ListItemAvatar>
              <p className="text">не нудьгуємо над письмовою граматикою - бо в реальному житті ти ж не будеш показувати
                співрозмовнику завдяння з Past Simple</p>
            </ListItem>
          </List>
        </div>
        <div className="container">
          <h3 className="sub-title sub-title__margin">як почати easy?</h3>
          <Stack sx={{width: '100%'}} spacing={4}>
            <Stepper alternativeLabel activeStep={2} connector={<ColorlibConnector/>}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel className="step__label" StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </div>
        <div className="container__no--glass">
          <h3 className="sub-title">що обрати?</h3>
          <div className="container--flex container--flex-margin">
            <div className="container__box">
              <h5>easy групи</h5>
              <p className="text">до 5 учнів в групі</p>
              <p className="text">мотивуюча та весела атмосфера</p>
              <p className="text">80 хвилин</p>
              <p className="text">250 грн</p>
            </div>
            <div className="container__box">
              <h5>easy індиви</h5>
              <p className="text">за твоїм розкладом</p>
              <p className="text">твої персональні цілі</p>
              <p className="text">60 хвилин</p>
              <p className="text">350 грн</p>
            </div>
            <div className="container__box">
              <h5>найкомофртніший speaking club</h5>
              <p className="text text--center">60 хвилин суто розмов на кайфові теми</p>
              <p className="text">180 грн</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <h3 className="sub-title">що про нас кажуть</h3>
          <Carousel
            slidesPerScroll={1}
            animationSpeed={1000}
            stopAutoPlayOnHover
            infinite
            addArrowClickHandler
            onChange={page => setPage(page)}
            value={page}
            arrowLeft={
              <img
                className='arrow arrow-left'
                src='../public/assets/arrow.svg'
              />
            }
            arrowRight={
              <img className='arrow'
                   src='../public/assets/arrow.svg'
              />
            }
          >
            <p className="review__text">
              Я нарешті знайшла собі ідеальний спосіб занять англійською - не потрібно витрачати час на дорогу, і навіть
              більше - можна виділити на це робочу перерву. Заняття з моїм викладачем – це завжди цікаво, пізнавально,
              весело та дуже душевно. Урок проходить максимально різноманітно, вчитель відповідає на всі питання та
              постійно чергує активності. І найважливіше для мене – я бачу прогрес:)
            </p>
            <p className="review__text">
              Чудова школа англійської!! Онлайн заняття дуже зручно, особливо коли вільного часу не так багато. З
              викладачем уроки відбуваються на одному подиху, дуже цікаво та з гарним настроєм. Виявляється англійську
              можна вчити легко та із задоволенням!
            </p>
            <p className="review__text">
              Дуже рекомендую! економія часу та нервів - навчання по інтернету зі Speak Easily. В мене чудовий педагог
              та чудовий співрозмовник! Цікава програма, індивідуальний підхід та допомога у всіх питаннях, навчання із
              задоволенням! Результат не змусить себе чекати! No doubt!
            </p>
            <p className="review__text">
              Займаюсь другий місяць онлайн, дуже зручно, викладач кваліфікований, цікаві заняття, результат від
              навчання відчувається миттєво!)) </p>
          </Carousel>
          <Dots
            value={page}
            onChange={page => setPage(page)}
            number={4}
          />
        </div>
      </div>
    </div>
  )
}

export default App

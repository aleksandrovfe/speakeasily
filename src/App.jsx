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

  const steps = ['?????????????? ?? ????????', '???????????? ???????????????????? ????????', '???????????????????? ?? ???????????????? ???? ???????????? ???????? ?????????????? ?? ????????????????'];

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
          <h2 className="title">???????????? ???????????????????? ?? ?????????????????? ???? easily</h2>
        </div>
      </div>
      <div className="body">
        <div className="container container__pink">
          <h3 className="sub-title">???? ???????????????????? ???????? ????????????????????! ????</h3>
          <List sx={{width: '100%', bgcolor: 'transparent'}}>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128483;</p>
              </ListItemAvatar>
              <p className="text">???????? ???????? ?????????????????????? ???????????? ?????????????? ??????????</p>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#127881;</p>
              </ListItemAvatar>
              <p className="text">?????????????? ???????????????? ???? ?????????????????????? ???????? ??????????????</p>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128540;</p>
              </ListItemAvatar>
              <p className="text">???? ?????????????????? ?????? ?????????????????? ???????????????????? - ???? ?? ?????????????????? ?????????? ???? ?? ???? ?????????? ????????????????????
                ???????????????????????????? ???????????????? ?? Past Simple</p>
            </ListItem>
          </List>
        </div>
        <div className="container container__blue">
          <h3 className="sub-title sub-title__margin">???? ???????????? easy?</h3>
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
          <h3 className="sub-title">???? ?????????????</h3>
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
                    <h5>Easy ??????????</h5>
                    <p className="text">???? 5 ?????????? ?? ??????????</p>
                    <p className="text">?????????????????? ???? ???????????? ??????????????????</p>
                    <p className="text">80 ????????????</p>
                    <p className="text">250 ??????</p>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="container__box container__pink">
                    <h5>Easy ????????????</h5>
                    <p className="text">???? ?????????? ??????????????????</p>
                    <p className="text">???????? ?????????????????????? ????????</p>
                    <p className="text">60 ????????????</p>
                    <p className="text">350 ??????</p>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="container__box container__pink">
                    <h5>?????????????????????????????? speaking club</h5>
                    <p className="text text--center">60 ???????????? ???????? ???????????? ???? ?????????????? ????????</p>
                    <p className="text">180 ??????</p>
                  </div>
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
          <div className="container--flex container--flex-margin choose__descktop">
            <div className="container__box container__purple">
              <h5>Easy ??????????</h5>
              <p className="text">???? 5 ?????????? ?? ??????????</p>
              <p className="text">?????????????????? ???? ???????????? ??????????????????</p>
              <p className="text">80 ????????????</p>
              <p className="text">250 ??????</p>
            </div>
            <div className="container__box container__purple">
              <h5>Easy ????????????</h5>
              <p className="text">???? ?????????? ??????????????????</p>
              <p className="text">???????? ?????????????????????? ????????</p>
              <p className="text">60 ????????????</p>
              <p className="text">350 ??????</p>
            </div>
            <div className="container__box container__purple">
              <h5>?????????????????????????????? speaking club</h5>
              <p className="text text--center">60 ???????????? ???????? ???????????? ???? ?????????????? ????????</p>
              <p className="text">180 ??????</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <h3 className="sub-title">???? ?????? ?????? ????????????</h3>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={4}
            className="review__slider"
          >
            <Slider>
              <Slide index={0}>
                <p className="review__text">
                  "?? ?????????????? ?????????????? ???????? ?????????????????? ???????????? ???????????? ?????????????????????? - ???? ???????????????? ?????????????????? ?????? ???? ????????????, ??
                  ????????????
                  ???????????? - ?????????? ???????????????? ???? ???? ???????????? ??????????????. ?????????????? ?? ???????? ???????????????????? ??? ???? ???????????? ????????????, ??????????????????????,
                  ???????????? ???? ???????? ??????????????. ???????? ?????????????????? ?????????????????????? ????????????????????????, ?????????????? ???????????????????? ???? ?????? ?????????????? ????
                  ???????????????? ???????????? ????????????????????. ?? ???????????????????????? ?????? ???????? ??? ?? ???????? ??????????????:)"
                </p>
              </Slide>
              <Slide index={1}>
                <p className="review__text">
                  "???????????? ?????????? ??????????????????????!! ???????????? ?????????????? ???????? ????????????, ???????????????? ???????? ???????????????? ???????? ???? ?????? ????????????. ??
                  ???????????????????? ?????????? ???????????????????????? ???? ???????????? ????????????, ???????? ???????????? ???? ?? ???????????? ????????????????. ?????????????????????? ????????????????????
                  ?????????? ?????????? ?????????? ???? ???? ????????????????????????!"
                </p>
              </Slide>
              <Slide index={2}>
                <p className="review__text">
                  "???????? ????????????????????! ???????????????? ???????? ???? ???????????? - ???????????????? ???? ?????????????????? ???? Speak Easily. ?? ???????? ?????????????? ??????????????
                  ???? ?????????????? ??????????????????????????! ???????????? ????????????????, ???????????????????????????? ???????????? ???? ???????????????? ?? ???????? ????????????????, ???????????????? ????
                  ????????????????????????! ?????????????????? ???? ?????????????? ???????? ????????????! No doubt!"
                </p>
              </Slide>
              <Slide index={3}>
                <p className="review__text">
                  "???????????????? ???????????? ???????????? ????????????, ???????? ????????????, ???????????????? ????????????????????????????, ???????????? ??????????????, ?????????????????? ??????
                  ???????????????? ???????????????????????? ??????????????!))"</p>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  )
}

export default App

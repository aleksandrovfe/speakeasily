import {
  Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText
} from "@mui/material";
import React, { useState } from 'react'
import './App.css'
import logo from '../public/assets/3.webp'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function App() {
  const [page, setPage] = useState(0)

  return (
    <div className="App">
      <div className="header">
        <div className="header__container">
          <img className="logo" src={logo} alt="speakeasily"/>
          <h2 className="title">вивчай англійську з комфортом та easily</h2>
        </div>
      </div>
      <div className="body">
        <div className="container">
          <h3 className="sub-title">ми виговоримо твою англійську! Бо</h3>
          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128483;</p>
              </ListItemAvatar>
              <ListItemText
                className="text"
                primary="наші учні розмовляють більшу частину уроку"
              />
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#127881;</p>
              </ListItemAvatar>
              <ListItemText
                className="text"
                primary="вчимося сміючись та обговорюючи щось кумедне"
              />
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128540;</p>
              </ListItemAvatar>
              <ListItemText
                className="text"
                primary="не нудьгуємо над письмовою граматикою - бо в реальному житті ти ж не будеш показувати співрозмовнику завдяння з Past Simple"
              />
            </ListItem>
          </List>
        </div>
        <div className="container">
          <h3 className="sub-title">як почати easy уроки?</h3>
          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128483;</p>
              </ListItemAvatar>
              <ListItemText
                className="text"
                primary="свяжись з нами "
              />
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#127881;</p>
              </ListItemAvatar>
              <ListItemText
                className="text"
                primary="пройди невеличкий тест"
              />
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128540;</p>
              </ListItemAvatar>
              <ListItemText
                className="text"
                primary="познайомся з вчителем та визнач свої потреби у навчанні "
              />
            </ListItem>
          </List>
        </div>
        <div className="container">
          <h3 className="sub-title">що обрати?</h3>
          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128483;</p>
              </ListItemAvatar>
              <ListItemText
                className="text"
                primary="easy групи: 🖤 до 5 учнів в групі 🖤 мотивуюча та весела атмосфера 🖤 80 хвилин 🖤 250 грн"
              />
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#127881;</p>
              </ListItemAvatar>
              <ListItemText
                className="text"
                primary="easy індиви:  🖤 за твоїм розкладом  🖤 твої персональні цілі  🖤 60 хвилин  🖤 від 350"
              />
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem className="body__item">
              <ListItemAvatar>
                <p className="emoji">&#128540;</p>
              </ListItemAvatar>
              <ListItemText
                className="text"
                primary="найкомофртніший speaking club: 🖤 60 хвилин суто розмов на кайфові теми 🖤180 грн"
              />
            </ListItem>
          </List>
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

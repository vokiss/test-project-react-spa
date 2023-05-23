import Card from 'react-bootstrap/Card';
import { CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Image from 'react-bootstrap/Image';

function AboutPage({skillBadges}) {
  return (
    <div className='about-page_container'>
    <Header/>
    <Card style={{ textAlign: 'left' }}>
      <Card.Body>
      <Image style={{height: 150, marginBottom: 10, borderRadius: 10}} src={require("../images/avatar_about.jpg")} alt='avatar'/>
        <Link to={'/'}>
        <CloseButton style={{float: 'right'}}></CloseButton>
        </Link>
      <Card.Title>Привет! Я Влад Котов, ваш будуший фулл-стек разработчик.</Card.Title>
      <Card.Text>
          Мой стек MongoDB, Express, React, Node.
          Готов учиться всему.
          Английский язык - C1 - Advanced.
          Интересуюсь web-разработкой и все что с этим связано, более года назад принял решение начать обучение full-stack, а теперь и поиск работы.
          Имею большой опыт в работе с людьми, организовывал и вел отделы продаж, сам всю жизнь проработал в продажах.
          </Card.Text>
          </Card.Body>

          <Card.Body><Card.Link href='mailto:vokisskotov@gmail.com'>📧 E-Mail</Card.Link>
          <Card.Link href='https://github.com/vokiss'>GitHub</Card.Link>
          <Card.Link href='https://drive.google.com/file/d/1awjqV0k8j5FVa7YxoVo3xlelajisAnVY/view?usp=sharing'>CV</Card.Link>

          </Card.Body>
          <Card.Body>
            {skillBadges.map((e, i) => (<Image key={i} src={e} rounded/>))}
      </Card.Body>
    </Card>
    </div>
  );
}

export default AboutPage;

import React, { Component } from 'react';
import { Container, Menu, Button, Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';
import CommentTable from '../components/Comments/CommentTable';
import StatusScreenshot from '../images/oh-haay-status.png';
import './About.css';

class About extends Component {

  render() {
    return (
      <div>
        <Container>
          <Menu fixed="top" inverted>
            <Menu.Item>
              <NavLink to='/main'>
                <h1 className="oh-haay-logo">oh-haay!</h1>
              </NavLink>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <NavLink to='/main'><Button><Icon name='arrow left' /></Button></NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to='/about' ><Button>About</Button></NavLink>
              </Menu.Item>
              <Menu.Item>
                <LogoutButton {...this.props} />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
        <div className="about">
          <Container>
            <div className="group-list-title">
              <h3>About oh-haay!</h3>
            </div>
            <p className="about-msg">
              oh-haay! is an application that directly populates a users groups through the Meetup API allowing them
              to see fellow group members whilst updating their status and informing others of their objectives for
              attending. I first got the idea for oh-haay! due to my frustration of not being able to remember the
              names, faces, and objectives of all the fellow attendees at the local meetups I would attend. oh-haay!
              serves as an awesome way to fix that. Let others know what it is you're working on and also see what
              everyone else is working on. Build connections, help others out, get help, all while meeting your fellow devs!
            </p>
            <p>
              <Image src={StatusScreenshot} size='huge' centered rounded />
            </p>

            <div className="my-links">
              oh-haay! was built by John Espinosa
              <div className="links">
                <a href='https://www.linkedin.com/in/johnespinosa1988/'>
                  <Button color='linkedin'><Icon name='linkedin' /> LinkedIn</Button>
                </a>
                <a href='https://twitter.com/JEspn88'>
                  <Button color='twitter'><Icon name='twitter' /> Twitter</Button>
                </a>
              </div>
            </div>
          </Container>
        </div >

        <div className="comments">
          <CommentTable comments={mockComments}/>
        </div>

      </div >
    );
  }
}

const mockComments = [ 
  {
    id: 1,
    text: "First Comment"
  }, 
  {
    id: 2,
    text: "Second Comment"
  }, 
  {
    id: 3,
    text: "Third Comment"
  }, 
];

export default About;
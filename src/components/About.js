import React, { Component } from 'react';
import { Container, Menu, Button, Icon, Image, Form, TextArea } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';
// import CommentForm from '../components/CommentForm';
import StatusScreenshot from '../images/oh-haay-status.png';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { commentValue: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ commentValue: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.commentValue);
    event.preventDefault();
  }

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
        <div>
          <Form
            onSubmit={this.handleSubmit}
          >
            <Form.Field
              control={TextArea}
              value={this.state.value}
              onChange={this.handleChange}
              label='Comment'
              placeholder='add comment...'
            />
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>

          {/* <form onSubmit={this.handleSubmit}>
            <label>
              Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form> */}

        </div>
      </div >




    );
  }
}

//thinking in react blog post

export default About;
import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';

import Angular from '../../assets/angular.svg';
import Apple from '../../assets/apple.svg';
import Babel from '../../assets/babel.svg';
import Chrome from '../../assets/chrome.svg';
import CSS from '../../assets/css.svg';
import Git from '../../assets/git.svg';
import Heroku from '../../assets/heroku.svg';
import HTML from '../../assets/html.svg';
import Jasmine from '../../assets/jasmine.svg';
import Js from '../../assets/js.svg';
import Linux from '../../assets/linux.svg';
import Mocha from '../../assets/mocha.svg';
import Node from '../../assets/node-js.svg';
import NPM from '../../assets/npm.svg';
import Python from '../../assets/python.svg';
import React from '../../assets/react.svg';
import Redux from '../../assets/redux.svg';
import Responsive from '../../assets/responsive.svg';
import SASS from '../../assets/sass.svg';
import Slack from '../../assets/slack.svg';
import Sublime from '../../assets/sublime.svg';
import VsCode from '../../assets/vs-code.svg';
import Vue from '../../assets/vue.svg';
import Windowns from '../../assets/windowns.svg';
import Yarn from '../../assets/yarn.svg';

import './styles.css'

export default function TechIcons() {

  const techs = [
    {
      title: "Angular",
      svg: Angular
    },
    {
      title: "Apple",
      svg: Apple
    },
    {
      title: "Babel",
      svg: Babel
    },
    {
      title: "CSS",
      svg: CSS
    },
    {
      title: "Git",
      svg: Git
    },
    {
      title: "Chrome",
      svg: Chrome
    },
    {
      title: "Heroku",
      svg: Heroku
    },
    {
      title: "HTML",
      svg: HTML
    },
    {
      title: "Jasmine",
      svg: Jasmine
    },
    {
      title: "JavaScript",
      svg: Js
    },
    {
      title: "Linux",
      svg: Linux
    },
    {
      title: "Mocha",
      svg: Mocha
    },
    {
      title: "Node",
      svg: Node
    },
    {
      title: "NPM",
      svg: NPM
    },
    {
      title: "Python",
      svg: Python
    },
    {
      title: "React",
      svg: React
    },
    {
      title: "Redux",
      svg: Redux
    },
    {
      title: "Responsive",
      svg: Responsive
    },
    {
      title: "Sass",
      svg: SASS
    },
    {
      title: "Slack",
      svg: Slack
    },
    {
      title: "Sublime",
      svg: Sublime
    },
    {
      title: "Vs Code",
      svg: VsCode
    },
    {
      title: "Vue",
      svg: Vue
    },
    {
      title: "Windowns",
      svg: Windowns
    },
    {
      title: "Yarn",
      svg: Yarn
    },
  ]

  return (
    <>
      {techs.map((tech) => {
        return (
          <div className='tech-name' key={tech.title}>
            <Tooltip arrow placement="top" title={`${tech.title}`}>
              <Card className='tech-card' raised>
                <img src={`${tech.svg}`} height={35} width={35}></img>
              </Card>
            </Tooltip>
          </div>
        )
      })}
    </>
  )
}
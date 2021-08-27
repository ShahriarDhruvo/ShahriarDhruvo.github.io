import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  text-align: justify;

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    // background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      // .img {
      //   filter: none;
      //   mix-blend-mode: normal;
      // }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      // mix-blend-mode: multiply;
      // filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skillsWillDone = ['TypeScript', 'GraphQL', 'Docker', 'Deep Learning'];
  const skillsDone = ['React', 'Django', 'Django Rest Framework', 'Shell Scripting'];
  const programmingLang = ['C/C++', 'Python', 'JavaScript (ES6+)'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Dhruvo and I enjoy creating things that live on the internet. My
              interest in web development started back in 2020 when I decided to do my academic
              project by using PHP, MySQL — turns out the simplicity of building my project by using
              PHP and the thrill of building something completely on my own taught me a lot! Now I
              am facinated with Deep Learning and Computer Vision that can solve something we human
              thought couldn't be achieved before.
            </p>

            <p>Fast-forward to today, and I've had learnt ReactJS, Django and many more.</p>
          </div>

          <br />
          <p>Technologies I've worked with:</p>
          <ul className="skills-list">
            {skillsDone && skillsDone.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          <br />
          <p>Few technologies I'm interested in:</p>
          <ul className="skills-list">
            {skillsWillDone && skillsWillDone.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          <br />
          <p>Languages I am proficient at:</p>
          <ul className="skills-list">
            {programmingLang && programmingLang.map((lang, i) => <li key={i}>{lang}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

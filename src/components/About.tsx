import styled from "styled-components";

const AboutWrapper = styled.div`
    margin-top: 120px;
    padding: 6em;
    height: 100vh;
`;

const AboutTitle = styled.h2`
    display: flex;
    text-align: center;
`;

const AboutDescription = styled.p`
    display: flex;
    text-align: left;
    white-space: pre-wrap;
`;

const About = () => {
    const description =
        `Hi! My name is Aliffi and I'm an aspiring software developer!\n\nI've been meaning to create my own blog to capture my thoughts and opinions since May 2022 but have only ever gotten around to it now.\n\nHope this attempt gets somewhere this time!!`;

    return (
        <AboutWrapper>
            <AboutTitle>About Me</AboutTitle>
            <AboutDescription>
                {description}
            </AboutDescription>
        </AboutWrapper>
    );
};

export default About;
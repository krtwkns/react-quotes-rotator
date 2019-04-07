import styled from 'styled-components';

const progressBar = styled.span`
    position: absolute;
    height: 3px;
    width: ${props => props.width || '0'}%;
    background-color: ${props => props.backgroundColor || "coral"};
    transition: ${props => props.transition};
    top: 0;
    z-index: 1000;
`;

export default progressBar
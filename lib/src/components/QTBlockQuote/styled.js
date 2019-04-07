import styled from 'styled-components';

const BlockQuote = styled.blockquote`
        font-size: 1em;
        border: none;
        padding: 0;

        font-weight: 300;
        margin: 0.4em 0 1em;
        color:${props => props.textColor || "#000"};
        span {
            font-style: italic;
            margin: 10px 0px;
        }
`

export default BlockQuote
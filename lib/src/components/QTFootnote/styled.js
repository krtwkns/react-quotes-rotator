import styled from 'styled-components';

const FootNote = styled.footer`
    font-size: 1em;
    margin-top: 1.3em;

    &:before {
        content: '- ';
    }
`

export default FootNote;
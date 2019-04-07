import styled from 'styled-components';
import {mediaQueries} from '../../commons/utils';

const ImagePlaceholder = styled.img`
    float: right;
    margin-left: 3em;
    max-width: 20%;

    ${mediaQueries.phone`
        width: 80px;
    `}
`

export default ImagePlaceholder
import React from 'react';
import { Icon } from 'react-icons-kit'
import {quoteLeft, quoteRight} from 'react-icons-kit/fa/'

const QuoteDescription = ({children}) => (
    <React.Fragment>
        <Icon icon={quoteLeft}/>
        <span> {children} </span>
        <Icon icon={quoteRight}/>
    </React.Fragment>
)

export default QuoteDescription;
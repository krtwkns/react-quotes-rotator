import React from 'react';
import ProgressBarStyled from './styled';

const QtProgressBar = ({transition, width, progressBarColor}) => (
    <ProgressBarStyled
        transition={transition}
        width={width}
        backgroundColor={progressBarColor}
    />
)

export default QtProgressBar
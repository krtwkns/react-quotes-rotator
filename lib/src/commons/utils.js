import { css } from 'styled-components';

// Style Helpers 
const DEVICE_SIZES = {
    desktop: 1024,
    tablet: 768,
    phone: 360,
}

export const mediaQueries = Object.keys(DEVICE_SIZES).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${DEVICE_SIZES[label] / 16}em) {
        ${css(...args)}
        }
        `
    return acc
}, {})

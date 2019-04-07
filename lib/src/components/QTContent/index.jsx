import React from 'react';
// Child Component
import QTFootnote from '../QTFootnote';
import QuoteImage from '../QTImage';
import QuoteDescription from '../QTDescription';
import QuoteBlockQuote from '../QTBlockQuote';

const QuoteContent = ({
    key,
    backgroundColor,
    visibleState, 
    textColor, 
    title, 
    content, 
    pic,
    footnote}) => (
    <div key={key} className={`qtcontent ${visibleState}`} style={{backgroundColor: `${backgroundColor}`}}>
        <QuoteImage source={pic} alt={`picture-of-${title}`} />
        <QuoteBlockQuote textColor={textColor}>
            <h3>{title}</h3>
            <QuoteDescription>{content}</QuoteDescription>
            <QTFootnote>{footnote}</QTFootnote> 
        </QuoteBlockQuote>
    </div>
)

export default QuoteContent;
import React from "react";
import {QuotesWrapper} from './style'

// Import Inner Child Component
import QuotesProgressBar from './components/QTProgressBar';
import QuoteContent from './components/QTContent';

class QuotesRotator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            styleProgress: {},
            indexContentVisible: 0,
            isProgress: true
        };
    }
    componentDidMount(){
        setTimeout(
            function() {
                this.setState({
                    data: this.props.data,
                    transition: `width ${this.props.timer}ms linear 0s`,
                    width: 100    
                })
                this.timerQuotes = setInterval(
                    () => {
                        this.setState({
                            transition: `none`,
                            width: 0    
                        })
                        if(this.state.indexContentVisible+1 === this.props.data.length){
                            this.setState({
                                indexContentVisible: 0,
                            })
                        } else {
                            this.setState({
                                indexContentVisible: this.state.indexContentVisible+1,
                            })
                        }
                        setTimeout(
                            function() {
                                this.setState({
                                    transition: `width ${this.props.timer - 100}ms linear 0s`,
                                    width: 100    
                                })       
                            }
                            .bind(this),
                            100
                        );                            
                    },
                    this.props.timer,
                );    
            }
            .bind(this),
            100
        );                           
    }

    _renderQuotesContents = ({ data, indexContentVisible}) => data.map((item, index)=>{
        return (
                <QuoteContent
                    key={index}
                    backgroundColor={this.props.backgroundColor}
                    visibleState={indexContentVisible === index ? 'display' : 'hidden'}
                    textColor={this.props.textColor}
                    title={item.title}
                    content={item.content}
                    pic={item.pic}
                    footnote={item.footnote}
                />
        )
    })

    render() {
        const { data, width, indexContentVisible, transition } = this.state
        const { timer, progressBarColor } = this.props
        return (
                <QuotesWrapper>
                    <div className="qtrotator">
                        {this._renderQuotesContents({data, indexContentVisible})}
                    </div>
                    <QuotesProgressBar 
                    transition={transition}
                    width={width}
                    progressBarColor={progressBarColor}
                    />
                </QuotesWrapper>
        );
    }
}

export default QuotesRotator;

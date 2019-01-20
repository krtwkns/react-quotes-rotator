import React from "react";
import "./styles/app.scss";
import MaterialIcon from 'material-icons-react'
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
        window.onload = () => {
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
    }
    render() {
        const { data, width, indexContentVisible, transition } = this.state
        const { timer } = this.props
        const QuotesContent = data.map((item, index)=>{
            let visibleState = indexContentVisible === index ? 'display' : 'hidden'
            return (
                <div key={index} className={`qtcontent ${visibleState}`} style={{backgroundColor: `${this.props.backgroundColor}`}}>
                    <img src={item.pic} alt={item.pic} />
                    <blockquote style={{color: `${this.props.textColor}`}}>
                        <h3>{item.title}</h3>
                        <MaterialIcon icon="format_quote"/>
                            <span>{item.content}</span>
                        <MaterialIcon icon="format_quote"/>
                        <footer>{item.footnote}</footer>
                    </blockquote> 
                </div>    
        )})
        return (
            <React.Fragment>
                <div className="qtrotator">
                    {QuotesContent}
                    <span
                        className="qtprogress"
                        style={{
                            transition: `${transition}`,
                            width: `${width}%`,
                            background: `${this.props.progressBarColor}`
                        }}
                    />                        
                </div>
            </React.Fragment>
        );
    }
}

export default QuotesRotator;

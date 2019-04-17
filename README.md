# react-quotes-rotator

> React Quotes Rotator.

## Description

React Quotes Rotator is Quotes Component for React

## Demo

![react-quotes-rotator](https://user-images.githubusercontent.com/20862187/51443006-b46be780-1d15-11e9-9bd8-02950f911123.gif)

## Install

``` bash
$ npm i react-quotes-rotator
```

## Usage

```jsx
import QuotesRotator from "react-quotes-rotator";

// Example quotes data
const quotes = [
    {
        title: "50 Inspirational Quotes For Startups And Entrepreneurs",
        content:
            "If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out.",
        footnote: "Mark Zuckerberg, Facebook Founder and CEO",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mark_Zuckerberg_cropped.jpg/220px-Mark_Zuckerberg_cropped.jpg"
    },
    {
        title: "50 Inspirational Quotes For Startups And Entrepreneurs",
        content:
            "Any time is a good time to start a company.",
        footnote: "Ron Conway, Noted Startup Investor, SV Angel",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDzSJUGCynBe_5AsxFMa5di6NDl79jlhaXU_GjzfKXvUYfQv2"
    },
];

// How to use it 
ReactDOM.render(<div>
    <QuotesRotator
        data={quotes}
        progressBarColor="#B5D43C"
        backgroundColor="#fff"
        textColor="#212121"
        timer="5000"
    />
</div>, container);
```
## API

### props

<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 100px;">name</th>
            <th style="width: 50px;">type</th>
            <th>description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>data</td>
            <td>Array Objects</td>
            <td>Data of quotes</td>
        </tr>
        <tr>
            <td>progressBarColor</td>
            <td>String</td>
            <td>Color of your progress bar</td>
        </tr>
        <tr>
            <td>backgroundColor</td>
            <td>String</td>
            <td>Color of your background color card</td>
        </tr>
        <tr>
            <td>textColor</td>
            <td>String</td>
            <td>Text color (title, content, footnote).</td>
        </tr>
        <tr>
            <td>timer</td>
            <td>Int</td>
            <td>Duration for how long quotes are displayed</td>
        </tr>
    </tbody>
</table>

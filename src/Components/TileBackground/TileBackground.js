// TileBackground.js

import React from 'react';
import './TileBackground.css'; // Import custom styles for the component

const color_classes = [
    "bg-primary",
    "bg-base-100",
    "bg-base-300",
];
const TAGS = [
    ' ', 
    '  ', 
    '   ', 
    '    ', 
    '     ', 
    '      ', 
    '       ',
    '        ',
    '         ',
    '          ',
    '           ',
    ];

const DURATION = 75000;
const ROWS = 13;
const TAGS_PER_ROW = 20;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        // '--direction': reverse ? 'reverse' : 'normal'
        '--direction': reverse ? 'alternate-reverse' : 'alternate'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => {
    let classes = color_classes[random(0, color_classes.length)] + ' tag';
    return (<div className={classes}><pre>{text}</pre></div>)
};

const TileBackground = () => {
    return (
        <div className='tag-list'>
            {[...new Array(ROWS)].map((_, i) => (
            <InfiniteLoopSlider key={i} duration={random(DURATION, DURATION*1.5)} reverse={i % 2}>
                {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
                <Tag text={tag} key={tag}/>
                ))}
            </InfiniteLoopSlider>
            ))}
            <div className='bg-gradient-to-r from-primary to-accent z-10'/>
        </div>
  );
}

export default TileBackground;
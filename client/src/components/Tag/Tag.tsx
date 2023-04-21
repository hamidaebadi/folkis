import React from 'react';
import {Tag} from '../../types';

const Tag = ({text, status, size, colorAnim}: Tag) => {
    return(
        <p className={`tag tag-${status} tag-${size} ${colorAnim && 'tag-anim'}`}>
            {text}
        </p>
    )
}

export default Tag;
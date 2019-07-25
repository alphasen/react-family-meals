import React from 'react';
import { __RouterContext } from 'react-router-dom'

export default function d(props) {
    console.log('d props :', props);
    return <div>d

        <__RouterContext.Consumer>
            {
                context=>{
                    console.log('context in component d :', context);
                    return JSON.stringify(context)
                }
            }
        </__RouterContext.Consumer>
    </div>;
}

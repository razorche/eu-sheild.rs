import React, {Fragment} from 'react'

const toolsContent = [
    {
        icon: 'html-5',
        tag: 'html',
    },
    {
        icon: 'css-3',
        tag: 'css',
    },
    {
        icon: 'js',
        tag: 'js',
    },
    {
        icon: 'php',
        tag: 'php',
    },
    {
        icon: 'c',
        tag: 'c',
    },
    {
        icon: 'dart',
        tag: 'dart',
    },
    {
        icon: 'python',
        tag: 'python',
    },
    {
        icon: 'typescript',
        tag: 'typescript',
    },
]

const ToolsList = () => {
    return (
        <Fragment>
            <div className="tools-list mt-20 mb-40">
                {toolsContent.map((val, i)=>(
                    <span key={i}><img src={`assets/img/icon/${val.icon}.png`} alt={val.tag}/></span>
                ))}
            </div>
        </Fragment>
    )
}

export default ToolsList
import React from 'react';
import styles from './styles.css';

// 見た目を表現するという関心
export const HeadingPresenter = ({ tag:Tag, visualLevel, className, ...props}) => (
    <Tag className={[ styles.h, styles[`h${ visualLevel }`], className ].join(' ')} {...props} />
)

export const HeadingUnderlinedPresenter = ({ tag:Tag, visualLevel, className, ...props}) => (
    <Tag className={[ styles.h, styles.underlined, styles[`h${ visualLevel }`], className ].join(' ')} {...props} />
)

// レベルを決定するという関心
export const HeadingContainer = ({ presenter, level = 2, visualLevel, ...props }) => {
    level = Math.max(0, Math.min(6, level));
    visualLevel = (typeof visualLevel !== 'undefined') ? visualLevel : level;
    const tag = `h${ level }`

    return presenter({ tag, visualLevel, ...props })
}

const Heading = props => (
    <HeadingContainer presenter={ presenterProps => <HeadingPresenter { ...presenterProps }/>} {...props} />
)

export default Heading

export const HeadingUnderlined = props => (
    <HeadingContainer presenter={ presenterProps => <HeadingUnderlinedPresenter { ...presenterProps }/>} {...props} />
)

// コンポーネントのコードが複雑化している

// const Heading = ({ children, level = 2, visualLevel, className, ...props}) => {
//     level = Math.max(0, Math.min(6, level));
//     visualLevel = (typeof visualLevel !== 'undefined') ? visualLevel : level;
//     const Tag = `h${ level }`
//     const tagStyle = `${ styles.h } ${ styles[`h${visualLevel}`]}`

//     return(
//         <Tag className={ [ tagStyle, className ].join('')} {...props}>
//             {children}
//         </Tag>
//     )
// }

// export default Heading


// 冗長すぎる

// export const Heading1 = ({ chiledren, className, ...props }) => <h1
// className=
// {[ styles.h1, className].join('')} {...props}>{children}</h1>
// export const Heading2 = ({ chiledren, className, ...props }) => <h2
// className=
// {[ styles.h2, className].join('')} {...props}>{children}</h2>
// export const Heading3 = ({ chiledren, className, ...props }) => <h3
// className=
// {[ styles.h3, className].join('')} {...props}>{children}</h3>
// export const Heading4 = ({ chiledren, className, ...props }) => <h4
// className=
// {[ styles.h4, className].join('')} {...props}>{children}</h4>
// export const Heading5 = ({ chiledren, className, ...props }) => <h5
// className=
// {[ styles.h5, className].join('')} {...props}>{children}</h5>
// export const Heading6 = ({ chiledren, className, ...props }) => <h6
// className=
// {[ styles.h6, className].join('')} {...props}>{children}</h6>
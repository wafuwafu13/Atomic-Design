import React from 'react'
import styles from './styles.css';

// 見た目を表現するという関心
export const IconPresenter = ({
    iconName,
    height = 20,
    width = 20,
    ...props
}) => (
    <img
      src={`/icons/${iconName}.svg`}
      alt=""
      height={height}
      width={width}
      {...props}
    />
)

// アイコンを決定するという関心
export const IconContainer = ({
    presenter,
    onClick,
    className="",
    ...props
}) => {
    if (onClick) className += `${styles.clickable}`
    return presenter({ onClick, className, ...props })
}

export const iconFactory = iconName => props => (
    <IconContainer 
      presenter={ presenterProps => <IconPresenter {...presenterProps} />} 
     {...{ iconName, ...props }}
    />
)

export const TrashCanIcon = iconFactory('trash-can')
export const ChevronRightIcon = iconFactory('chevron-right')
export const SearchIcon = iconFactory('search')
export const SettingsIcon = iconFactory('settings')

// export const TrashCanIcon = ({
//     height = 20,
//     width = 20,
//     className = "",
//     onClick,
//     ...props,
// }) => {
//     if(onClick) className += `${styles.clickable}`
//     return(
//         <img
//           src="/icons/trash-can.svg"
//           alt=""
//           height={height}
//           width={width}
//           className={className}
//           onClick={onClick}
//           {...props}
//         />
//     )
// }
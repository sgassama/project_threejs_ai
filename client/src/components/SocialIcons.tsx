import React from 'react'

export function SocialIcons (props: {icons: SocialIcon[]}): React.JSX.Element {
  const {icons} = props
  const iconList = icons.map((icon: SocialIcon, i: number) => (
    <li key={i}>
      <a href={icon.url} target="_blank">
        <img src={icon.icon} alt={icon.name} />
      </a>
    </li>
  ))

  return (
    <ul>
      {iconList}
    </ul>
  )
}

type SocialIcon = {
  icon: string
  name: string
  url: string
}

import {marked} from 'marked'
import React, {useEffect, useState} from 'react'

export const MarkdownViewer = (props: {filePath: string}): React.JSX.Element => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(props.filePath)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.log(err))
  }, [props.filePath])

  const renderedMarkdown = marked(markdown)

  return (
    <div className="markdownPreviewer w-full">
      <div className="markdownPreviewer__preview sine lite-gray overflow-y-none" dangerouslySetInnerHTML={{__html: renderedMarkdown}} />
      <hr className={`mt-8`}/>
    </div>
  )
}

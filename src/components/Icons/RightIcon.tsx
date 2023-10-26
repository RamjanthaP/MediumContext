import React from 'react'

function RightIcon(props: { className?: string }) {
  return (
    <svg className={`${props.className}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16">
      <path d="M8.0286 2.86177c.26035-.26035.68246-.26035.94281 0l4.66669 4.66666c.2603.26035.2603.68246 0 .94281L8.97141 13.1379c-.26035.2604-.68246.2604-.94281 0-.26035-.2603-.26035-.6825 0-.9428l3.5286-3.5286H3.83334c-.36819 0-.66667-.29847-.66667-.66666s.29848-.66667.66667-.66667h7.72386l-3.5286-3.5286c-.26035-.26034-.26035-.68245 0-.9428z" fill="currentColor" />
    </svg>
  )
}

export default RightIcon
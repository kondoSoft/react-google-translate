import React from 'react'

const dynamicScript = ({src, async}) => {
  const script = document.createElement('script')
  script.async = async
  script.src = src
  document.getElementByTag('body').appendChild(script)
}

class GoogleTranslate extends (React.component) {
  componentWillMount () {
    const src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    dynamicScript({src, async: false, cb: 'googleTranslateElementInit' })
  }
  render () {
    return <div id='google_translate_element' />
  }
}

export GoogleTranslate
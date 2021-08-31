import React from 'react'

class Hello extends React.Component {
  static defaultProps = {
    name: '이름없음',
  }
  constructor(props) {
    super(props)
  }

  render() {
    const { color, name, isSpecial } = this.props
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    )
  }
}

// Hello.defaultProps = {
//     name:'이름없음'
// }
export default Hello

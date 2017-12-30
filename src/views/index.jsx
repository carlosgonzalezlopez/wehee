import React from 'react'

export default class TemplateModule extends React.Component {

 emitEvent() {
   this.props.bp.events.emit('test.clicked', { a: '123' })
 }

 render() {
   return <button onClick={::this.emitEvent}>Click me</button>
 }
}

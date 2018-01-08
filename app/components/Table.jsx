import React from 'react'

export default class Table extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      models: []
    }
  }

  componentDidMount () {
    return fetch('/api/models') // eslint-disable-line
      .then((response) => response.json())
      .then(json => {
        this.setState({ models: json })
      })
  }

  render () {
    return (
      <div className='panel panel-primary'>
        <div className='panel-heading'>
           Panel
        </div>
        <div className='panel-body table-responsive' id='wrapper'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th id='name' className='table-header'>Name</th>
                <th id='attribute' className='table-header'>Attribute</th>
                <th id='created_at' className='table-header'>Created At</th>
              </tr>
            </thead>
            <tbody>
              {this.state.models.map(model =>
                <tr data-id={model.id} key={model.id}>
                  <td>{model.name}</td>
                  <td>{model.attribute}</td>
                  <td>{model.created_at}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

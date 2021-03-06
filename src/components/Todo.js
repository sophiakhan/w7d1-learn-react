import React from 'react';

class Todo extends React.Component {
    render() {
        return <li className="list-group-item">
            <div className="row">
                <div className="col-xs-6">
                    <div className="checkbox">
                        <label>
                            {/*<input type="checkbox" onChange={(e) => this.props.toggleTodoComplete(this.props.id, e.target.checked)}
                        checked={this.props.completed === 'yes' ? true : false}/>*/}
                            
                            <span onClick={(e) => this.props.toggleTodoComplete(this.props.id, this.props.completed !== 'yes')}>{this.props.completed === 'yes' ? <i className="glyphicon glyphicon-check"></i> : <i className="glyphicon glyphicon-unchecked"></i>}</span> 

                            <span className={this.props.completed === 'yes' ? "done" : ''}> {this.props.description}</span>
                        </label>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="checkbox text-right">
                        <div className="label label-default">{this.props.category}</div>
                    </div>
                </div>
            </div>
        </li>
    }
}

// Todo.propTypes = {
//     id: React.PropTypes.any.isRequired,
//     completed: React.PropTypes.string.isRequired,
//     todo: React.PropTypes.string.isRequired,
//     category: React.PropTypes.stromg.isRequired,
//     toggleTodoComplete: React.PropTypes.func.isRequired
// }

export default Todo
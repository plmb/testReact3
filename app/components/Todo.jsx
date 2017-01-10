var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function(){
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo'
    var renderDate = () => {
      moment.locale('ru');
      var message = 'Создано ';
      var timestamp = createdAt;

      if (completed){
        message = 'Завершено ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('D MMMM YYYY @ H:mm')
    };

    return(
      <div className={todoClassName} onClick={() => {
        dispatch(actions.toggleTodo(id));
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
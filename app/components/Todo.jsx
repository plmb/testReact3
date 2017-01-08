var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function(){
    var {text, id, completed, createdAt, completedAt} = this.props;
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
        this.props.onToggle(id);
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

module.exports = Todo;
import React, { Component } from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clear } from './todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }
  
  keyHandler(e) {
    const { add, search, description } = this.props;
    if(e.key === 'Enter') {
      e.shiftKey ? search(description) : add(description)
    } else if(e.key === 'Escape') {
      this.props.handleClear();
    }
  }

  componentWillMount() {
    this.props.search();
  }

  render() {
    const { add, search, description } = this.props;
    return (
      <div role="form" className="todoForm">
        
        <Grid cols="12 9 10">
          <input type="text" 
            value={this.props.description} 
            id="decription" 
            onKeyUp={this.keyHandler}
            className="form-control" 
            placeholder="Adicione uma tarefa"
            onChange={this.props.changeDescription}
            />
        </Grid>
  
        <Grid cols="12 3 2">
          <IconButton icon="plus" style="primary" onClick={() => add(description)}/>
          <IconButton icon="search" style="info" onClick={() => search(description)}/>
          <IconButton icon="close" style="default" onClick={this.props.clear}/>
        </Grid>
  
      </div>
    )  
  }
}

const mapStateToProps = state => ({
  description : state.todo.description
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({ changeDescription, search, add, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
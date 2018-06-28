var Search = (props) => (
  <div className="search-bar form-inline">
    <form>
      <input className="form-control" type="text" id="searchField" onChange={_.debounce(props.fetch, 750)}/>
    </form>
    <button className="btn hidden-sm-down" onClick={props.fetch}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);
// 
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

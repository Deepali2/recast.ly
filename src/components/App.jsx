class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: props.videos,
      currentIndex: 0
    };
  }

  onFetch() {
    this.setState;
  }

  handleSelectEvent(e) {
    // console.log(e.target.getAttribute('value'));
    this.setState({
      currentIndex: e.target.getAttribute('value')
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.props.videos[this.state.currentIndex]}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.props.videos} eventHandlerFunction={this.handleSelectEvent.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

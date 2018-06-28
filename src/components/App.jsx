class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [{id: {videoId: ''}, snippet: {title: '', description: '', thumbnails: {default: {url: ''}}}}],
      currentIndex: 0
    }; 
  }

  componentDidMount() {
    this.props.searchYouTube({query: '', max: 5, key: window.YOUTUBE_API_KEY}, this.setVideoState.bind(this));
  }

  setVideoState(data) {
    this.setState({
      videos: data
    });
  }

  fetch() {
    let query = document.getElementById('searchField').value;
    this.props.searchYouTube({query: query, max: 5, key: window.YOUTUBE_API_KEY}, this.setVideoState.bind(this));
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
          <div className="col-md-6 offset-md-3" >
            <Search fetch={this.fetch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videos[this.state.currentIndex]}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} eventHandlerFunction={this.handleSelectEvent.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

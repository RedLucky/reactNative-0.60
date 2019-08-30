import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class Albumlist extends Component{
  state = {albums: []};

  componentDidMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}))
    console.log("component did mount in AlbumList ");
  }

  renderAlbums(){
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} record={album}/>
    );
  }

  render(){
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default Albumlist;
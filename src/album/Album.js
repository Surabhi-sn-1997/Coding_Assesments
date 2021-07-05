import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllAlbumList } from "../store/actions/actions";
import AlbumList from "./AlbumItem";
import { title, letterToBeReplace } from "./constants";

function Album(props) {
  const [formattedAlbumList, setFormattedAlbumList] = useState([]);
  const { albumList, getAllAlbumList } = props;

  const formatArray = () => {
    const albumArraywithOcurence = [...albumList];
    const albumArraywithOutOcurence = [];
    albumArraywithOcurence.forEach((ele) => {
      albumArraywithOutOcurence.push({
        id: ele.id,
        title: ele.title.replaceAll(letterToBeReplace, ""),
        url: ele.thumbnailUrl,
      });
    });
    setFormattedAlbumList(albumArraywithOutOcurence);
  };
  useEffect(() => {
    if (albumList && albumList.length <= 0) {
      getAllAlbumList();
    }
  }, []);
  useEffect(() => {
    if (albumList.length > 0) {
      formatArray();
    }
  }, [albumList.length]);

  return (
    <div>
      <h1>{title}</h1>
      <AlbumList albums={formattedAlbumList} />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    albumList: state.albumReducer.albumList || [],
  };
}
const mapDispatchToProps = {
  getAllAlbumList,
};
export default connect(mapStateToProps, mapDispatchToProps)(Album);

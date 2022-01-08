import React from 'react';
import React, { Fragment, useEffect, useState } from 'react';
import './style.css';
import { createApi } from 'unsplash-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';
import Search from './search.js';
import Info from './info.js';

export default function App() {
  const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: 'Gp1TQzzESgpp0foLXvwR5s55hrLkfai9o8-PJGTYrIE',
  });
  const [ss, setSS] = useState(window.innerWidth);
  const [data, setData] = useState(null);
  const [loading, setLoad] = useState();
  const [searchshow, setSearchShow] = useState('none');
  const [infoshow, setInfoShow] = useState('none');
  // app logic
  useEffect(() => {
    if (ss < 1000) {
      console.log('loadbig');
      api.photos.getRandom({ orientation: 'portrait' }).then((result) => {
        if (result.errors) {
          // handle error here
          console.log('error occurred: ', result.errors[0]);
        } else {
          // handle success here
          const photo = result.response;
          setData(photo);
          console.log(photo);
        }
      });
    } else {
      console.log('load');
      api.photos.getRandom({ orientation: 'landscape' }).then((result) => {
        if (result.errors) {
          // handle error here
          console.log('error occurred: ', result.errors[0]);
        } else {
          // handle success here
          const photo = result.response;
          setData(photo);
          console.log(photo);
        }
      });
    }
  }, []);

  function images() {
    setLoad('loading...');
    if (ss < 1000) {
      console.log('loadbigImages');
      api.photos.getRandom({ orientation: 'portrait' }).then((result) => {
        if (result.errors) {
          // handle error here
          console.log('error occurred: ', result.errors[0]);
        } else {
          // handle success here
          const photo = result.response;
          setData(photo);
          setLoad('');
          console.log(photo);
        }
      });
    } else {
      console.log('load');
      setLoad('loading...');
      api.photos.getRandom({ orientation: 'landscape' }).then((result) => {
        if (result.errors) {
          // handle error here
          console.log('error occurred: ', result.errors[0]);
        } else {
          // handle success here
          const photo = result.response;
          setData(photo);
          setLoad('');
          console.log(photo);
        }
      });
    }
  }

  function search(query) {
    setLoad('Loading...');
    if (ss < 1000) {
      console.log('loadbig');
      api.photos
        .getRandom({ orientation: 'portrait', query: query })
        .then((result) => {
          if (result.errors) {
            // handle error here
            console.log('error occurred: ', result.errors[0]);
          } else {
            // handle success here
            const photo = result.response;
            setData(photo);
            setLoad('');
            console.log(photo);
          }
        });
    } else {
      console.log('load');
      setLoad('Loading...');
      api.photos
        .getRandom({ orientation: 'landscape', query: query })
        .then((result) => {
          if (result.errors) {
            // handle error here
            console.log('error occurred: ', result.errors[0]);
          } else {
            // handle success here
            const photo = result.response;
            setData(photo);
            setLoad('Loading...');
            console.log(photo);
          }
        });
    }
  }

  function searchshowclick() {
    searchshow === 'none' ? setSearchShow('') : setSearchShow('none');
    setInfoShow('none');
  }
  function infoshowclick() {
    infoshow === 'none' ? setInfoShow('') : setInfoShow('none');
    setSearchShow('none');
  }

  //main app
  if (data === null) {
    return (
      <div
        className=""
        style={{ height: '100vh', backgroundColor: 'royalblue' }}
      >
        <h1 className="text-warning text-center shadow">RandomWallpaper.io</h1>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: 'royalblue', height: '100vh' }}>
        <h2
          className="position-absolute top-0 bg-light px-1"
          style={{
            opacity: '0.4',
          }}
        >
          RandomWallpaper.io
        </h2>
        <h2
          className="bg-light position-absolute top-0 end-0 px-1 hvr-underline-from-center"
          style={{
            opacity: '0.4',
          }}
          onClick={searchshowclick}
        >
          <i class="bi bi-search"></i>
        </h2>
        <Search display={searchshow} search={search} />
        <Info Info={infoshow} data={data} />
        <h2 className="position-absolute top-50 px-2">{loading}</h2>
        <img
          src={data.urls.regular}
          class="img-fluid"
          alt=".i"
          style={{
            height: '100vh',
            width: '100vw',
          }}
        />
        <div className="row position-absolute bottom-0 col-12 text-center">
          <h2
            className="bg-light  px-1 col-3 mx-1 hvr-underline-from-center"
            style={{
              opacity: '0.4',
            }}
          >
            <a href={'"' + data.links.download + '"'}>
              <i class="bi bi-arrow-down"></i>
            </a>
          </h2>
          <h2
            className="bg-light px-1 col-3 mx-1 hvr-underline-from-center"
            style={{
              opacity: '0.4',
            }}
            onClick={images}
          >
            <i class="bi bi-arrow-repeat"></i>
          </h2>
          <h2
            className="bg-light px-1 col-3 mx-1 hvr-underline-from-center"
            style={{
              opacity: '0.4',
            }}
            onClick={infoshowclick}
          >
            <i class="bi bi-info"></i>
          </h2>
        </div>
      </div>
    );
  }
}

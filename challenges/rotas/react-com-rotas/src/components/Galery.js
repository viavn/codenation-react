import React from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

export default function ModalGalleryExample() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

const ModalSwitch = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route path="/gallery/list" children={<Gallery />} />
        <Route path="/gallery" children={<FeatureImages />} />
        <Route path="/img/:id" children={<ImageView />} />
      </Switch>

      {background && <Route path="/img/:id" children={<Modal />} />}
    </div>
  );
};

const IMAGES = [
  { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
  { id: 1, title: 'Lime Green', color: 'LimeGreen' },
  { id: 2, title: 'Tomato', color: 'Tomato' },
  { id: 3, title: 'Seven Ate Nine', color: '#789' },
  { id: 4, title: 'Crimson', color: 'Crimson' },
];

const Thumbnail = ({ color }) => {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        background: color,
      }}
    />
  );
};

const Image = ({ color }) => {
  return (
    <div
      style={{
        width: '100%',
        height: 400,
        backgroundColor: color,
      }}
    />
  );
};

const FeatureImages = () => {
  return (
    <div>
      <Link to="/gallery/list">Visit the Gallery</Link>
      <h2>Featured Images</h2>
      <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/4">Crimson</Link>
        </li>
      </ul>
    </div>
  );
};

const Gallery = () => {
  const location = useLocation();

  return (
    <div>
      <div
        style={{
          marginBottom: '5px',
        }}
      >
        <Link
          to="/gallery"
          style={{
            color: '#000',
            fontSize: '14px',
          }}
        >
          Feature Images
        </Link>
      </div>
      {IMAGES.map((i) => (
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            state: { background: location },
          }}
        >
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  );
};

const ImageView = () => {
  const { id } = useParams();
  const image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Iamge not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  );
};

const Modal = () => {
  const history = useHistory();
  const { id } = useParams();
  const image = IMAGES[parseInt(id, 10)];

  if (!image) return null;

  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.15)',
      }}
    >
      <div
        className="modal"
        style={{
          position: 'absolute',
          background: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444',
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
};

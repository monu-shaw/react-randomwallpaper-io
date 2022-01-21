import React from 'react';
class Info extends React.Component {
  //dataa = this.props.data;
  render() {
    return (
      <div className={this.props.Info}>
        <div
          className="card position-absolute bg-light p-2"
          style={{
            marginTop: '55px',
            opacity: '0.5',
          }}
        >
          <h3 className="text-center">
            Images a used from
            <a href="https://unsplash.com/developers"> unsplash</a>
          </h3>
          <p className="text-center fw-bold">
            Pictures is taken at
            {
              (this.props.data.location.country = !''
                ? ' location not available '
                : ` ${this.props.data.location.country} `)
            }
            by
            <a href={'"' + this.props.data.user.links.html + '"'}>
              {` ${this.props.data.user.name} `}
            </a>
            with {` ${this.props.data.exif.make} `} {this.props.data.exif.model}
          </p>
        </div>
      </div>
    );
  }
}

export default Info;

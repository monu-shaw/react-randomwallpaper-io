import React from 'react';
class Search extends React.Component {
  onTrigger = (event) => {
    this.props.search(event.target.myname.value);
    event.preventDefault();
  };

  render() {
    return (
      <div className={this.props.display}>
        <form
          onSubmit={this.onTrigger}
          className="input-group mb-3 position-absolute bg-light"
          style={{
            marginTop: '55px',
            opacity: '0.5',
          }}
        >
          <input
            type="text"
            name="myname"
            className="form-control"
            placeholder="Saerch"
            aria-describedby="basic-addon2"
          />
          <button
            className="input-group-text btn-outline-primary"
            id="basic-addon2"
            type="submit"
          >
            @search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;

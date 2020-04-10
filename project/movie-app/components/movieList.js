import React, { Component } from 'react'

class movieList extends Component {


    shorten = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substr(0, 180) + '...'
        }
        return text
    }

    render() {
        const { movies } = this.props
        return (
            <React.Fragment>
                {movies.map((movie) => {
                    return (
                        <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="">{movie.name}</a>
                                    </h4>
                                    <p className="card-text">{this.shorten(movie.description, 100)}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{movie.rating}</small>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </React.Fragment>
        )
    }
}

export default movieList;
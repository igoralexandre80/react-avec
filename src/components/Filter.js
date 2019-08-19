import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div className="row">
                <div className="col-md-6">
                    {`${this.props.count} products found.`}
                </div>
                <div className="col-md-6">
                    <label>Order by
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}

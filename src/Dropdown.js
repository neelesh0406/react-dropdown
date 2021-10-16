import React, { Component } from 'react'
import './Dropdown.css'

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
            showList: false
        }
    }
    handleDropdownEnter = () => {
        this.setState({
            showList: true
        })
    }
    handleDropdownLeave = () => {
        this.setState({
            showList: false
        })
    }
    //When an item is clicked, it stores the value selected in state & hides the list
    handleItemClick = (item) => {
        this.setState({
            selectedValue: item,
            showList: false
        })
    }
    render() {
        const { listItems } = this.props;
        const { selectedValue, showList } = this.state;
        return (
            <div className="dropdown">
                <p className="dropdown-text">Should you choose a dropdown ?</p>
                {/* Functions change the state when mouse enters and leaves the button */}
                <button onMouseEnter={this.handleDropdownEnter} onMouseLeave={this.handleDropdownLeave}>
                    {/* If a value is selected, it gets displayed here */}
                    {selectedValue.length > 0 ?
                        selectedValue
                        :
                        'Select'
                    }
                    <i className="fas fa-chevron-down"></i>
                    {/* When the showList is true show the list */}
                    {showList &&
                        <div className="dropdown-list">
                            <ul>
                                {listItems.map((item) => {
                                    return <li onClick={() => this.handleItemClick(item)}
                                        key={item} >
                                        {item}
                                    </li>
                                })}
                            </ul>
                        </div>}
                </button>

            </div>
        )
    }
}

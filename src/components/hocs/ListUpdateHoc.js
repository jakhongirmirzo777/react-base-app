import {Component} from "react";

const DataSource1 = {
    source1: [
        'DataSource1 source1',
        'DataSource1 source1',
        'DataSource1 source1',
    ],
    source2: [
        'DataSource1 source2',
        'DataSource1 source2',
        'DataSource1 source2',
    ]
}

const DataSource2 = {
    source1: [
        'DataSource2 source1',
        'DataSource2 source1',
        'DataSource2 source1',
    ],
    source2: [
        'DataSource2 source2',
        'DataSource2 source2',
        'DataSource2 source2',
    ]
}

const ListUpdateHoc = (WrappedComponent, selectData) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource1, props)
            }
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource2, this.props)
            });
        }

        render() {
            return (
                <WrappedComponent handleChange={this.handleChange} data={this.state.data} {...this.props}/>
            )
        }
    }
}

export default ListUpdateHoc
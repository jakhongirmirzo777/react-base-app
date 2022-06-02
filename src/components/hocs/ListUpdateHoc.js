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
     class ListUpdateHoc extends Component {
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

    const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component';
    ListUpdateHoc.displayName = `ListUpdateHoc(${getDisplayName(WrappedComponent)})`;
    return ListUpdateHoc;
}

export default ListUpdateHoc

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// import {useState} from "react";
//
// const DataSource1 = {
//     source1: [
//         'DataSource1 source1',
//         'DataSource1 source1',
//         'DataSource1 source1',
//     ],
//     source2: [
//         'DataSource1 source2',
//         'DataSource1 source2',
//         'DataSource1 source2',
//     ]
// }
//
// const DataSource2 = {
//     source1: [
//         'DataSource2 source1',
//         'DataSource2 source1',
//         'DataSource2 source1',
//     ],
//     source2: [
//         'DataSource2 source2',
//         'DataSource2 source2',
//         'DataSource2 source2',
//     ]
// }
//
// const ListUpdateHoc = (WrappedComponent, selectData) => {
//     const Render = () => {
//         const [data, setData] = useState({
//             data: selectData(DataSource1)
//         })
//         const handleChange = () => {
//             setData({
//                 data: selectData(DataSource2)
//             })
//         }
//         return (
//             <WrappedComponent handleChange={handleChange} data={data}/>
//         )
//     }
//
//     return Render()
// }


// export default ListUpdateHoc
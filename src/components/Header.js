import PropTypes from 'prop-types'


const header = ({title, onAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
           
        </header>
    )
}

header.defaultProps={
    title:'Task Tracker',
}

header.protoTypes={
    title:PropTypes.string.isRequired,
}

export default header

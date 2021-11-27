import React from 'react';
import MenuItem from '../menuItem/menuItem';
import './directory.scss'
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directorySelector';
import { createStructuredSelector } from 'reselect';
const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {sections.map(({ linkUrl, imageUrl, size, id, title }) => (
                <MenuItem linkUrl={linkUrl} imageUrl={imageUrl} size={size} key={id} title={title} />
            ))}
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
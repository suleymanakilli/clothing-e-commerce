import React from 'react';
import MenuItem from '../menuItem/menuItem';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directorySelector';
import { createStructuredSelector } from 'reselect';
import { DirectoryMenuContainer } from './directoryStyle';
const Directory = ({ sections }) => {
    return (
        <DirectoryMenuContainer>
            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </DirectoryMenuContainer>
    );
}
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
import { useState } from "react";
import PropTypes from 'prop-types';
import Grid from "@mui/system/Grid";

Custom3ActionSection.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        heading: PropTypes.string,
        description: PropTypes.string,
        urlLink: PropTypes.string,
        buttonLabel: PropTypes.string
    })).isRequired,
};

export default function Custom3ActionSection({ items, name = 'Custom 3 Action Section'}) {
    return (
        <Grid >
            
        </Grid>
    )
}
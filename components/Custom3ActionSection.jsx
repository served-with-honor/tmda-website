import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

Custom3ActionSection.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        heading: PropTypes.string,
        description: PropTypes.string,
        button: PropTypes.shape({
            url: PropTypes.string,
            label: PropTypes.string.isRequired,
            acton: PropTypes.func,
        })
    })).isRequired,
};

export default function Custom3ActionSection({ items, name = 'Custom 3 Action Section' }) {
    const router = useRouter();

    function handleCTAClick({ url, action }){
        if (action) return action();
        if (url) return router.push(url);
    }

    return (
        <Grid container sx={{minWidth: '100%'}}>
            {items.map(({ icon, heading, description, button }) => {
                const { label, url, action } = button;
                const href = !action && url ? url : null;
                return(
                    <Paper onClick={() => handleCTAClick({ url: url, action: action })} sx={{m: 5, width: '25%', minHeight: '300px', borderRadius: 0, backgroundColor: 'secondary.100'}}>
                        <Stack sx={{alignItems: 'center', pt: 5}} direction='column'>
                            <Image 
                                src={icon}
                                width={60}
                                height={60}
                            />
                            <Typography color='secondary' variant='h6' sx={{pt:2}}>{heading}</Typography>
                            <Typography color='secondary' variant='text' sx={{p:2}}>{description}</Typography>
                            <Button variant={'outlined'} sx={{ mb: 5 }} href={href} onClick={action}>{label}</Button>
                        </Stack>
                    </Paper>
                )
            })}
        </Grid>
    )
}
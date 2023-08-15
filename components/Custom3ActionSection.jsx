import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
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

export default function Custom3ActionSection({ items }) {
    const router = useRouter();

    function handleCTAClick({ url, action }){
        if (action) return action();
        if (url) return router.push(url);
    }

    return (
        <Grid container spacing={5}>
            {items.map(({ icon, heading, description, button }) => {
                const { label, url, action } = button;
                const href = !action && url ? url : null;
                return (
                    <Grid item md>
                        <Paper onClick={() => handleCTAClick({ url, action })} sx={{ minHeight: '100%', textAlign: 'center', p: 5 }}>
                            <Image src={icon} width={60} height={60} />
                            <Typography color='secondary' variant='h6' component='h2' sx={{ mt:2 }}>{heading}</Typography>
                            <Typography color='secondary' variant='body1' sx={{ my: 3 }}>{description}</Typography>
                            <Button variant={'contained'} fullWidth={true} href={href} onClick={action}>{label}</Button>
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>
    )
}
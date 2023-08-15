import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { baseTheme } from '../theme'

CustomCard.propTypes = {
    icon: PropTypes.string.isRequired,
    heading: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.shape({
        url: PropTypes.string,
        label: PropTypes.string.isRequired,
        acton: PropTypes.func,
    }),
};

export default function CustomCard({ icon, heading, description, button }) {
    const { label, url, action } = button;
    const href = !action && url ? url : null;
    const transition = baseTheme.transitions.create(['transform', 'box-shadow']);

    const router = useRouter();

    function handleCTAClick({ url, action }){
        if (action) return action();
        if (url) return router.push(url);
    }

    return (
        <Paper onClick={() => handleCTAClick({ url, action })}
            sx={{
                minHeight: '100%',
                textAlign: 'center',
                p: 5,
                cursor: 'pointer',
                transition,
                "&:hover": {
                    boxShadow: 5,
                    transform: 'scale(1.0125)',
                },
            }}
        >
            <Image src={icon} width={60} height={60} />
            <Typography color='secondary' variant='h6' component='h2' sx={{ mt: 2 }}>{heading}</Typography>
            <Typography color='secondary' variant='body1' sx={{ my: 3 }}>{description}</Typography>
            <Button variant={'contained'} fullWidth={true} href={href} onClick={action}>{label}</Button>
        </Paper>
    );
}

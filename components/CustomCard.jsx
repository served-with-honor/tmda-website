import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { baseTheme } from '../theme'

CustomCard.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        height: PropTypes.number,
        width: PropTypes.number,
    }),
    heading: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.shape({
        url: PropTypes.string,
        label: PropTypes.string.isRequired,
        acton: PropTypes.func,
        target: PropTypes.string,
    }),
    entireClickable: PropTypes.bool,
};

export default function CustomCard({ image, heading, description, button, entireClickable }) {
    const { label, url, target, action } = button || {};
    const href = !action && url ? url : null;
    const transition = baseTheme.transitions.create(['transform', 'box-shadow']);

    const router = useRouter();

    function handleCTAClick({ url, action, target }){
        if (action) return action();
        if (url && target) return window.open(url, target, 'noopener,noreferrer');
        if (url) return router.push(url);
    }

    const cardStyles = {
        borderRadius: 24,
        minHeight: '100%',
        textAlign: 'center',
        p: 5,
        cursor: entireClickable ? 'pointer' : 'initial',
        transition,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "&:hover": {
            boxShadow: 5,
            transform: 'scale(1.0125)',
        },
    };

    return (image || heading || description || button) ? (
        <Paper sx={cardStyles} onClick={entireClickable ? () => handleCTAClick(button) : null}>
            {image ? <Image alt={image.alt || ''} src={`/../public${image.src}`} width={image.width} height={image.height} /> : null}
            {heading ? (
                <Typography color='secondary' variant='h6' component='h2' sx={{ mt: 2 }}>{heading}</Typography>
            ) : null}
            {description ? (
                <Typography variant='body1' sx={{ my: 3 }}>{description}</Typography>
            ) : null}
            {button ? (
                <Button
                    variant={'contained'}
                    fullWidth={true}
                    href={href}
                    target={target}
                    onClick={action}
                    rel="noopener noreferrer"
                    sx={{ mt: 'auto' }}
                >
                    {label}
                </Button>
            ) : null}
        </Paper>
    ) : null;
}

import { createStyles, Theme } from '@material-ui/core';

export const styles = (theme: Theme) => createStyles({
    root:{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.background.paper
    },
    peopleSection: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    btn: {
        height: '35px',
        alignSelf: 'center',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    },
    comments: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 0
    }
});
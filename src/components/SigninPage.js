import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Avatar, Button, CssBaseline, TextField, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import Layout from './Layout';
import { auth } from '../firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "rgb(245, 143, 11)",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SigninPage() {
    const classes = useStyles();

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div>
            <Layout>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Sign in</h2>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="current-password"
                                onChange={e => setPassword(e.target.value)}
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="password"
                                value={password}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={signIn}
                            >
                                Sign In
                            </Button>
                            <div className="signin-new">
                                <strong>New to Everest ? </strong>
                                Get our latest product recommendations for you.
                                Personalise your Everest experience on Mobile, tablet and desktop.
                                Manage your orders and preferences.
                                Access your saved items.
                                Create and share gift lists.
                            </div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={register}
                            >
                                Register for an account
                            </Button>
                        </form>
                    </div>
                </Container>
            </Layout>
        </div>
    );
}

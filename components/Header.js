import * as React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "@/styles/Header.module.css"

export function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>

        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Button size="small">Subscribe</Button>
            <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={styles.none}
            sx={{ flex: 1 }
          }
            >
                <a href="/">{title}</a>
            </Typography>
            <IconButton>
            <SearchIcon />
            </IconButton>
            <Button variant="outlined" size="small">
              Sign up
            </Button>
        </Toolbar>
        <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
            {sections.map((section) => (
            <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                underline="none"
                sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
            ))}
        </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};
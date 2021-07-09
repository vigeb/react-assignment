import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CategoryIcon from '@material-ui/icons/Category';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';

const useStyles = makeStyles((theme) => ({
  navLink: {
    display: 'block',
    color: 'inherit',
  },
  navLinkActive: {
    background: theme.palette.grey['100'],
  },
}))

export const AdminListItem = () => {
  const classes = useStyles()

  return (
    <div>
      <NavLink to="/admin/dashboard" className={classes.navLink} activeClassName={classes.navLinkActive}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </NavLink>
      <NavLink to="/admin/course-management" className={classes.navLink} activeClassName={classes.navLinkActive}>
        <ListItem button>
          <ListItemIcon>
            <VideoLabelIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
      </NavLink>
      <NavLink to="/admin/category-management" className={classes.navLink} activeClassName={classes.navLinkActive}>
        <ListItem button>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
      </NavLink>
      <NavLink to="/admin/students/all" className={classes.navLink} activeClassName={classes.navLinkActive}>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </NavLink>
      <NavLink to="/admin/enrollment/pending" className={classes.navLink} activeClassName={classes.navLinkActive}>
        <ListItem button>
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="Enrollment" />
        </ListItem>
      </NavLink>
    </div>
  )
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
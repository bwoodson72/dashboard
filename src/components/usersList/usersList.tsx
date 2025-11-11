'use client'

import React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import User from './user';

/**
 * Record shape for a single user in the list.
 */
type UserRecord = {
  name: string;
  email: string;
};

/**
 * Example data. Replace with your real data source/props as needed or lift state up.
 */
const data: UserRecord[] = [
    { name: 'Avery Johnson', email: 'avery.johnson@example.com' },
    { name: 'Riley Thompson', email: 'riley.thompson@example.com' },
    { name: 'Jordan Lee', email: 'jordan.lee@example.com' },
    { name: 'Casey Morgan', email: 'casey.morgan@example.com' },
    { name: 'Taylor Brooks', email: 'taylor.brooks@example.com' },
    { name: 'Quinn Parker', email: 'quinn.parker@example.com' },
    { name: 'Phoenix Carter', email: 'phoenix.carter@example.com' },
    { name: 'Dakota Reed', email: 'dakota.reed@example.com' },
    { name: 'Charlie Nguyen', email: 'charlie.nguyen@example.com' },
    { name: 'Morgan Patel', email: 'morgan.patel@example.com' },
    { name: 'Alex Rivera', email: 'alex.rivera@example.com' },
    { name: 'Sydney Kim', email: 'sydney.kim@example.com' },
    { name: 'Rowan Garcia', email: 'rowan.garcia@example.com' },
    { name: 'Cameron Hughes', email: 'cameron.hughes@example.com' },
    { name: 'Reese Martinez', email: 'reese.martinez@example.com' },
    { name: 'Skyler Adams', email: 'skyler.adams@example.com' },
    { name: 'Harper Flores', email: 'harper.flores@example.com' },
    { name: 'Peyton Brooks', email: 'peyton.brooks@example.com' },
    { name: 'Logan Bennett', email: 'logan.bennett@example.com' },
    { name: 'Emerson Clark', email: 'emerson.clark@example.com' },
];

/**
 * UsersList renders a MUI `List` of user items.
 *
 * Rendering:
 * - Each item renders a `User` component keyed by email.
 * - Replace the local `data` with props or a data-fetching mechanism as needed.
 */
export default function UsersList(): React.JSX.Element {
  return (
    <List>
      {data.map((item: UserRecord) => (
          <ListItem key={item.email}>
        <ListItemText >
          <User name={item.name} email={item.email} />
        </ListItemText>
          </ListItem>
      ))}
    </List>
  );
}
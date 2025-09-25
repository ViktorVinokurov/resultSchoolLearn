import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Delete from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

const ListTask = ({lists, deleteTask, toggleTask}) => {
    return (
        <Box
				sx={{
					width: '100%',
					minWidth: 500,
					bgcolor: 'background.paper',
					display: 'flex',
				}}
			>
				<List className="m-auto!">
					{lists.map((task, index) => {
						return (
							<ListItem
								key={task.id}
								secondaryAction={
									<IconButton
										edge="end"
										aria-label="comments"
										disabled={!task.finaly}
										onClick={() => deleteTask(task.id)}
									>
										<Delete />
									</IconButton>
								}
							>
								<ListItemAvatar>
									<Avatar>
										<Checkbox
											checked={task.finaly}
											color="secondary"
											onChange={() => toggleTask(task)}
											name={`gilad${index}`}
										/>
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={task.task}
									secondary={task.finaly ? 'Выполнена' : 'Не выполнена'}
								/>
							</ListItem>
						);
					})}
				</List>
			</Box>
    )
}
export default ListTask
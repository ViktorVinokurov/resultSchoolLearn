import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

const ListTask = ({ lists, toggleTask, open }) => {
	return (
		<Box
			sx={{
				width: '100%',
				minWidth: 500,
				bgcolor: 'background.paper',
				display: 'flex',
			}}
		>
			<List>
				{lists.map((task, index) => {
					return (
						<ListItem
							key={task.id}
						>
							<ListItemAvatar>
								<Checkbox
									checked={task.finaly}
									color="secondary"
									onChange={(e) =>
										toggleTask({ ...task, finaly: e.target.checked })
									}
									name={`gilad${index}`}
								/>
							</ListItemAvatar>
							<ListItemText
								className='pointer'
								primary={task.title}
								secondary={task.finaly ? 'Выполнена' : 'Не выполнена'}
								onClick={() => open(task.id)}
							/>
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
};
export default ListTask;

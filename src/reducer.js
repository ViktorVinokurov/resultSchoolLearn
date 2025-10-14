const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload,
			};
		case 'SET_FIELD':
		    return {
                ...state,
                field: state.field.map((cell, i) =>
                    i === payload.index ? payload.player : cell
                )
            }
		case 'RESTART_GAME':
            return { ...initialState, field: [...initialState.field] };
		case 'SET_GAME_END':
			return {
				...state,
				isGameEnded: payload,
			};
		case 'SET_DRAW':
			return {
				...state,
				isDraw: payload,
			};
		default:
			return state;
	}
};

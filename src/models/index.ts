export type TodoType = {
	id: string;
	task: string;
	completed: boolean;
};

export type EditFormType = {
	id: string;
	task: string;
	toggleEditForm: () => void;
};

export type TodoReducerAction = {
	type: 'ADD' | 'REMOVE' | 'UPDATE' | 'TOGGLE';
	task: string;
	id: string;
	newTask: string;
};

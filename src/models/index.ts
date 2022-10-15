export type TodoType = {
	id: number;
	task: string;
	completed: boolean;
};

export type EditFormType = {
	id: number;
	task: string;
	toggleEditForm: () => void;
};

export type TodoReducerAction = {
	type: 'ADD' | 'REMOVE' | 'UPDATE' | 'TOGGLE';
	task: string;
	id: number;
	newTask: string;
};

import React from 'react';
import './tasklist.css';
import Task from './Task';

export default function TaskList({ loading, tasks, onPinTasks, onArchiveTask }) {
    const events = {
        onPinTasks,
        onArchiveTask
    };

    return(
        <div className={`task_list`}>
            <h1> Task List : </h1>
            {
                loading ? (
                    <h3> LOADING... </h3>
                ) : tasks.length === 0 ? (
                    <h3> Empty Task List </h3>
                ) : tasks.map((task) => (
                    <Task key={task.id} task={task} {...events} />
                ))
            }
        </div>
    )
}